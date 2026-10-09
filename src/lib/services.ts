export type Service = {
  slug: string;
  title: string;
  intro: string;
  included: string[];
  outcome: string;
};

export const SERVICES: Service[] = [
  {
    slug: "revenue-sales-systems",
    title: "Revenue & Sales Systems",
    intro:
      "Turn your sales process into a scalable system designed to attract, convert, and retain more customers.",
    included: [
      "Custom prospect lists built around your ideal customer profile",
      "Cold call and cold email sequences written for high conversions",
      "Lead qualification so only high-value opportunities reach your pipeline",
      "Full-cycle deal closing and real-time sales reporting",
    ],
    outcome:
      "A predictable sales engine that fills your calendar with qualified buyers and closes high-ticket deals reliably.",
  },
  {
    slug: "brand-creative-solutions",
    title: "Brand & Creative Solutions",
    intro:
      "Build a distinctive brand identity with creative strategies that make your business memorable and market-ready.",
    included: [
      "Strategic brand identity, positioning and core messaging",
      "High-converting pitch decks, capability statements and sales collateral",
      "Custom graphic design and video editing for digital campaigns",
      "Landing page design crafted to maximize conversion rates",
    ],
    outcome:
      "A standout brand presence that builds instant market authority and turns casual observers into confident buyers.",
  },
  {
    slug: "seo-organic-growth",
    title: "SEO & Organic Growth",
    intro:
      "Grow your search visibility, attract qualified traffic, and build sustainable organic growth with data-driven SEO.",
    included: [
      "In-depth technical SEO audits and website health optimization",
      "High-intent keyword clustering aligned with buyer journeys",
      "End-to-end content calendar production and on-page optimization",
      "Authoritative link acquisition and transparent ranking reports",
    ],
    outcome:
      "Compounding organic search traffic that consistently attracts qualified leads without recurring ad spend.",
  },
  {
    slug: "custom-web-software",
    title: "Custom Web & Software Solutions",
    intro:
      "Create powerful websites and custom software solutions built around your business goals and customer needs.",
    included: [
      "Custom modern website design and frontend development",
      "Tailored web applications and scalable software architectures",
      "Performance optimization for lightning-fast page loading speeds",
      "Third-party integrations, APIs, and responsive mobile optimization",
    ],
    outcome:
      "A robust, high-performing digital platform that engages visitors, delivers frictionless experiences, and drives conversions.",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI & Workflow Automation",
    intro:
      "Automate repetitive workflows and integrate AI solutions to save time, improve efficiency, and scale smarter.",
    included: [
      "Custom workflow automation across CRM, communications and ops tools",
      "AI-powered assistants and task automation for everyday efficiency",
      "Multi-platform data syncing to eradicate manual copy-pasting",
      "Custom analytics pipelines and automated performance notifications",
    ],
    outcome:
      "Friction-free operations that free your team from manual tasks, prevent bottlenecks, and scale your output effortlessly.",
  },
];

const SLUG_ALIASES: Record<string, string> = {
  "b2b-outbound-sales": "revenue-sales-systems",
  "full-cycle-deal-closing": "revenue-sales-systems",
  "crm-architecture": "ai-workflow-automation",
  "brand-creative-paid-media": "brand-creative-solutions",
  "tech-enabled-operations": "custom-web-software",
};

export const getService = (slug?: string) => {
  if (!slug) return SERVICES[0];
  const targetSlug = SLUG_ALIASES[slug] || slug;
  return SERVICES.find((service) => service.slug === targetSlug) ?? SERVICES[0];
};