export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  included: string[];
  outcome: string;
  contentBoxes: [string, string];
  faqDescription: string;
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "revenue-sales-systems",
    contentBoxes: [
      "Build a scalable sales system that streamlines your pipeline, improves lead management, and helps your business convert more opportunities into revenue.",
      "Blupeak Solutions aligns sales processes, customer journeys, and revenue goals to create efficient workflows that support consistent, measurable business growth."
    ],
    faqDescription: "Learn how revenue and sales systems improve lead conversion, streamline sales processes, and help Blupeak Solutions support sustainable business growth.",
    faqs: [
      {
        question: "What are revenue and sales systems?",
        answer: "Revenue and sales systems are structured processes that help businesses manage leads, organize sales activities, track opportunities, and improve conversions. Blupeak Solutions helps businesses build scalable sales processes aligned with their revenue goals."
      },
      {
        question: "How can you improve your sales process?",
        answer: "Improve your sales process by defining clear sales stages, qualifying leads, standardizing follow-ups, and tracking performance. A well-organized sales system helps reduce missed opportunities and supports more consistent conversions."
      },
      {
        question: "How do you turn more leads into customers?",
        answer: "Turning leads into customers requires timely follow-ups, relevant communication, clear offers, and a smooth buying journey. Blupeak Solutions focuses on structured sales workflows that help businesses manage prospects and improve lead conversion opportunities."
      },
      {
        question: "How can sales systems support revenue growth?",
        answer: "Effective sales systems help businesses identify bottlenecks, track pipeline performance, and make informed decisions. By improving sales visibility and consistency, businesses can create a stronger foundation for sustainable revenue growth."
      }
    ],
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
    contentBoxes: [
      "Create a distinctive brand identity with compelling visuals, consistent messaging, and creative direction that connects your business with the right audience.",
      "Blupeak Solutions helps businesses communicate their value through strategic branding and creative assets designed to strengthen recognition and support growth."
    ],
    faqDescription: "Explore how branding and creative solutions help your business stand out, communicate its value, and build a consistent identity across marketing channels.",
    faqs: [
      {
        question: "Why is brand identity important for a business?",
        answer: "A clear brand identity helps customers recognize your business, understand its values, and distinguish it from competitors. Consistent visuals and messaging build familiarity and trust over time."
      },
      {
        question: "What does a brand & creative service include?",
        answer: "Brand and creative services may include visual identity development, brand messaging, graphic design, and marketing assets. Blupeak Solutions focuses on aligning creative execution with your business goals."
      },
      {
        question: "How can creative design help my business grow?",
        answer: "Effective creative design communicates your value, captures attention, and makes marketing messages easier to understand. Consistent, audience-focused visuals can support stronger engagement and brand recognition."
      },
      {
        question: "How do I build a consistent brand across channels?",
        answer: "Use consistent colours, typography, messaging, and visual styles across your website, social media, and marketing materials. A clear brand guideline helps maintain a recognizable customer experience."
      }
    ],
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
    contentBoxes: [
      "Improve search visibility through strategic keyword targeting, optimized website content, and technical improvements that help attract relevant organic traffic.",
      "Blupeak Solutions uses data-driven SEO strategies to strengthen organic performance, connect with qualified audiences, and support sustainable long-term business growth."
    ],
    faqDescription: "Discover how SEO and organic growth strategies improve search visibility, attract qualified visitors, and help your business build sustainable online performance.",
    faqs: [
      {
        question: "What is SEO and why does it matter?",
        answer: "Search engine optimization (SEO) improves a website's visibility in organic search results. It helps potential customers discover relevant pages, products, and services when searching online."
      },
      {
        question: "How long does SEO take to show results?",
        answer: "SEO results depend on competition, website condition, content quality, and industry demand. Meaningful improvements often take several months, while sustainable growth requires ongoing optimization and monitoring."
      },
      {
        question: "How can SEO attract qualified website traffic?",
        answer: "Keyword research, search-intent alignment, relevant content, and technical optimization help attract people actively looking for your services. This can improve traffic relevance and create more conversion opportunities."
      },
      {
        question: "What does an organic growth strategy include?",
        answer: "An organic growth strategy may include keyword research, on-page SEO, technical audits, content optimization, internal linking, and performance tracking. Blupeak Solutions aligns these activities with business goals and search opportunities."
      }
    ],
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
    contentBoxes: [
      "Build user-focused websites and custom software that streamline business operations, improve customer experiences, and support your evolving digital requirements.",
      "Blupeak Solutions develops tailored digital solutions around your workflows, customer needs, and business objectives to support efficiency, usability, and growth."
    ],
    faqDescription: "Learn how custom websites and software solutions can improve user experience, simplify business processes, and support your company's changing digital needs.",
    faqs: [
      {
        question: "What are custom web and software solutions?",
        answer: "Custom web and software solutions are digital products designed around specific business requirements. They can help improve workflows, address operational challenges, and deliver experiences tailored to users."
      },
      {
        question: "When should a business choose custom software?",
        answer: "Custom software may be suitable when existing tools cannot support your workflows, integrations, or business requirements. The right approach depends on your goals, budget, and long-term needs."
      },
      {
        question: "How can a website improve customer experience?",
        answer: "A well-designed website makes information easier to find, works across devices, and guides visitors towards relevant actions. Clear navigation, accessibility, and fast loading can improve usability."
      },
      {
        question: "What should I consider before building a website?",
        answer: "Define your target audience, business goals, essential features, content needs, budget, and maintenance requirements. A clear project scope helps guide design and development decisions."
      }
    ],
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
    contentBoxes: [
      "Simplify repetitive tasks with workflow automation that reduces manual effort, improves process consistency, and gives your team more time for valuable work.",
      "Blupeak Solutions helps businesses explore practical AI and automation opportunities to streamline operations, connect workflows, and improve everyday efficiency."
    ],
    faqDescription: "Explore how AI and workflow automation can reduce repetitive work, improve operational efficiency, and help your business scale processes more effectively.",
    faqs: [
      {
        question: "What is workflow automation?",
        answer: "Workflow automation uses technology to perform repetitive tasks according to defined rules. It can reduce manual work, improve consistency, and help teams manage routine business processes more efficiently."
      },
      {
        question: "How can AI help improve business efficiency?",
        answer: "AI can assist with tasks such as information processing, content support, data analysis, and customer enquiries. Its value depends on the use case, data quality, and appropriate human oversight."
      },
      {
        question: "Which business processes can be automated?",
        answer: "Depending on your operations, automation may support lead routing, task notifications, data entry, reporting, and routine follow-ups. Start with repetitive processes that consume time or create bottlenecks."
      },
      {
        question: "Is AI automation suitable for small businesses?",
        answer: "Yes. Small businesses can explore automation for repetitive, well-defined tasks without automating every process at once. Start with a clear business need, assess costs, and measure the results."
      }
    ],
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
