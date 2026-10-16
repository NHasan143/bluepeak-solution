import { getService } from "./services";

export const SITE_ORIGIN = "https://blupeaksolutions.com";

export function getCanonicalUrl(pathname: string | null): string | null {
  if (pathname === null) return null;
  let path = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) path = `/services/${getService(serviceMatch[1]).slug}`;
  return `${SITE_ORIGIN}${path}`;
}

const PAGE_DETAILS: Record<string, { type: string; name: string }> = {
  "/": { type: "WebPage", name: "Blupeak Solutions | Sales, Marketing & Growth Agency" },
  "/about": { type: "AboutPage", name: "About Blupeak Solutions" },
  "/services": { type: "CollectionPage", name: "Blupeak Solutions Services" },
  "/team": { type: "CollectionPage", name: "The Blupeak Solutions Team" },
  "/contact": { type: "ContactPage", name: "Contact Blupeak Solutions" },
};

/** JSON-LD describing visible company and service content, without inferred claims. */
export function createStructuredData(canonicalUrl: string) {
  const organizationId = `${SITE_ORIGIN}/#organization`;
  const websiteId = `${SITE_ORIGIN}/#website`;
  const path = new URL(canonicalUrl).pathname;
  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  const service = serviceMatch ? getService(serviceMatch[1]) : null;
  const page = PAGE_DETAILS[path];
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Blupeak Solutions",
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/images/blupeak-dark-full.png`,
      email: "contact@blupeaksolutions.com",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Blupeak Solutions",
      url: `${SITE_ORIGIN}/`,
      publisher: { "@id": organizationId },
    },
    {
      "@type": page?.type ?? "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: service?.title ?? page?.name ?? "Blupeak Solutions",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      ...(service ? { mainEntity: { "@id": `${canonicalUrl}#service` } } : {}),
    },
  ];
  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: service.title,
      description: service.intro,
      url: canonicalUrl,
      provider: { "@id": organizationId },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
