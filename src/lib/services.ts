export type Service = {
  slug: string;
  title: string;
  intro: string;
  included: string[];
  outcome: string;
};

export const SERVICES: Service[] = [
  {
    slug: "b2b-outbound-sales",
    title: "B2B Outbound Sales & Pipeline Generation",
    intro:
      "Targeted cold outreach, by call and email, built to land Blupeak consultants in front of the right decision-makers and fill your calendar with qualified, ready-to-close appointments.",
    included: [
      "Custom prospect lists built around your ideal customer profile",
      "Cold call and cold email sequences written for your specific offer",
      "Lead qualification, so only real opportunities reach your calendar",
      "Ongoing testing on messaging, timing and targeting",
    ],
    outcome:
      "A calendar that fills on its own, with qualified conversations instead of cold leads you have to chase and sort through yourself.",
  },
  {
    slug: "full-cycle-deal-closing",
    title: "Full-Cycle Deal Closing",
    intro:
      "Native-English-speaking sales consultants run the entire sales cycle, from discovery through objection handling to close, on high-ticket B2B engagements.",
    included: [
      "Discovery calls run by trained closers, not junior reps reading a script",
      "Objection handling built around your actual sales process and offer",
      "Contracts and closing handled end to end",
      "Real-time reporting back to you after every call",
    ],
    outcome:
      "Deals closed without you or your team spending hours on calls that were never going to convert.",
  },
  {
    slug: "crm-architecture",
    title: "CRM Architecture & Workflow Automation",
    intro:
      "Behind every good sales team is a CRM that actually works the way the team sells. We design and build systems in Salesforce, Zoho and HubSpot, then automate the parts that used to eat up hours of manual work.",
    included: [
      "Custom pipeline stages built around how you actually sell",
      "Clean data migration if you are moving off spreadsheets or another tool",
      "Automated lead routing and follow-up sequences",
      "Live dashboards for pipeline, conversion and revenue",
    ],
    outcome:
      "No lead falling through the cracks, no manual data entry, and a clear view of exactly where every deal stands at any moment.",
  },
  {
    slug: "seo-organic-growth",
    title: "SEO & Organic Growth",
    intro:
      "Technical SEO, keyword clustering and content strategy built to help your brand dominate organic search and compound pipeline without paid spend.",
    included: [
      "Technical audit and fixes for crawlability and site health",
      "Keyword clustering built around what your buyers actually search",
      "Content calendar and production, not just a strategy document",
      "Monthly reporting on rankings and organic traffic",
    ],
    outcome:
      "Organic traffic and leads that keep compounding long after the initial sprint ends, instead of stopping the moment ad spend stops.",
  },
  {
    slug: "brand-creative-paid-media",
    title: "Brand, Creative & Paid Media",
    intro:
      "Capability statements, pitch decks, whitepapers, paid ad campaigns and high-converting video and graphic creative, produced in-house, on brand, on deadline.",
    included: [
      "Capability statements, pitch decks and whitepapers",
      "Paid social and search campaign management",
      "Video and graphic editing for ads, social and sales enablement",
      "Landing page and campaign creative",
    ],
    outcome:
      "Sales and marketing material that actually holds up in front of serious buyers, produced in-house and on brand, without hiring a separate creative agency.",
  },
];

export const getService = (slug?: string) =>
  SERVICES.find((service) => service.slug === slug) ?? SERVICES[0];