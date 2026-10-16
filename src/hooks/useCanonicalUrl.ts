import { useEffect } from "react";
import { getCanonicalUrl } from "../lib/siteMetadata";

/** Keep one canonical URL in sync with navigation, excluding query strings. */
export function useCanonicalUrl(pathname: string | null) {
  const canonicalUrl = getCanonicalUrl(pathname);

  useEffect(() => {
    if (canonicalUrl === null) return;

    const existing = document.head.querySelector<HTMLLinkElement>('link[rel~="canonical"]');
    const link = existing ?? document.createElement("link");
    const previousHref = link.getAttribute("href");
    link.rel = "canonical";
    link.href = canonicalUrl;
    if (!existing) document.head.append(link);

    return () => {
      if (!existing) link.remove();
      else if (previousHref === null) link.removeAttribute("href");
      else link.setAttribute("href", previousHref);
    };
  }, [canonicalUrl]);

  return canonicalUrl;
}
