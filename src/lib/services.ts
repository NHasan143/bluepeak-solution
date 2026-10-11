export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  included: string[];
  outcome: string;
};

export const SERVICES: Service[] = [
  {
    slug: "revenue-sales-systems",
    title: "Revenue & Sales Systems",
    metaTitle: "Revenue & Sales Systems That Scale Fast | Blupeak Solutions",
    metaDescription:
      "Turn your sales process into a scalable revenue system. Blupeak Solutions helps you attract, convert and retain more customers with proven strategies.",
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
    metaTitle: "Brand Identity & Creative Strategies | Blupeak Solutions",
    metaDescription:
      "Create a memorable brand with creative strategy and design. Blupeak Solutions helps your business look professional, build trust and become market-ready.",
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
    metaTitle: "Data-Driven SEO & Organic Growth Agency | Blupeak Solutions",
    metaDescription:
      "Boost your search visibility and attract qualified traffic. Blupeak Solutions delivers data-driven SEO that builds lasting organic growth for your brand.",
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
    metaTitle: "Custom Website & Software Development | Blupeak Solutions",
    metaDescription:
      "Get powerful websites and custom software built around your goals. Blupeak Solutions creates solutions that fit your business and your customers' needs.",
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
    metaTitle: "AI Automation & Workflow Integration | Blupeak Solutions",
    metaDescription:
      "Automate repetitive workflows and integrate AI to save time. Blupeak Solutions helps your business improve efficiency and scale smarter with automation.",
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
