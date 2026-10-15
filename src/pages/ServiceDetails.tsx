import { useState } from "react";
import { ArrowRight, Check, ChevronRight, Minus, Phone, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import TextReveal from "../components/common/TextReveal";
import { getService, SERVICES } from "../lib/services";
import { usePageMetadata } from "../hooks/usePageMetadata";

const serviceImages = import.meta.glob<string>(
  "../assets/service-images/*.{webp,jpg,jpeg,png,avif}",
  { eager: true, query: "?url", import: "default" },
);

const SERVICE_IMAGE_BOUNDS: Record<string, { left: number; top: number; width: number; height: number }> = {
  "revenue-sales-systems": { left: 272, top: 336, width: 239, height: 161 },
  "brand-creative-solutions": { left: 233, top: 272, width: 290, height: 161 },
  "seo-organic-growth": { left: 264, top: 309, width: 290, height: 161 },
  "custom-web-software": { left: 218, top: 321, width: 306, height: 161 },
  "ai-workflow-automation": { left: 240, top: 357, width: 291, height: 161 },
};

const SERVICE_TAGS: Record<string, string> = {
  "revenue-sales-systems": "Revenue Engine",
  "brand-creative-solutions": "Brand & Identity",
  "seo-organic-growth": "Search Authority",
  "custom-web-software": "Web & Engineering",
  "ai-workflow-automation": "AI & Automation",
};

type ServiceFAQ = {
  question: string;
  answer: string;
};

const SERVICE_FAQS: Record<string, ServiceFAQ[]> = {
  "revenue-sales-systems": [
    {
      question: "How quickly can our outbound campaigns go live?",
      answer:
        "Our onboarding, list calibration, and sequence crafting sprint takes 10 to 14 business days. Outreach and qualification begin immediately after final messaging sign-off.",
    },
    {
      question: "Do you work within our current CRM or set up a new one?",
      answer:
        "We can integrate directly into your existing CRM (HubSpot, Salesforce, Pipedrive) or architect and configure a high-velocity sales CRM pipeline tailored to your sales reps.",
    },
    {
      question: "How do you ensure only qualified decision-makers reach our calendar?",
      answer:
        "Every prospect is rigorously verified against multi-layer ideal customer profile criteria. Prospects must confirm budget, timeline, and need before appointments are handed off.",
    },
    {
      question: "What is included with full-cycle deal closing?",
      answer:
        "Our senior sales consultants lead discovery calls, build tailored proposals, overcome objections, and navigate procurement through final contract execution.",
    },
  ],
  "brand-creative-solutions": [
    {
      question: "What core brand assets will our company receive?",
      answer:
        "You receive comprehensive brand identity guidelines, typography standards, color palettes, vector logo suites, pitch deck templates, and conversion-optimized digital collateral.",
    },
    {
      question: "Can you redesign our existing landing pages and sales collateral?",
      answer:
        "Yes. We conduct full conversion audits of your existing collateral and redesign them with high-contrast, responsive visual assets built to maximize conversion rates.",
    },
    {
      question: "How do you ensure our brand identity stands out from competitors?",
      answer:
        "We begin with competitor positioning analysis and customer research to discover unique whitespace in your market, establishing an authoritative and differentiated visual system.",
    },
    {
      question: "What is the typical turnaround time for creative sprints?",
      answer:
        "Brand identity and pitch deck sprints typically take 2 to 3 weeks, while ad creatives and landing page redesigns are executed within 7 to 10 business days.",
    },
  ],
  "seo-organic-growth": [
    {
      question: "When can we expect to see tangible search ranking and traffic growth?",
      answer:
        "Technical crawlability and indexation improvements occur within 30 days. Compounding keyword ranking increases and qualified organic lead velocity typically materialize within 90 to 180 days.",
    },
    {
      question: "Is content strategy and editorial writing handled in-house?",
      answer:
        "Yes. We do not outsource writing. Our in-house content strategists write search-optimized, high-authority articles and guides tailored directly to your B2B buyers.",
    },
    {
      question: "How do you approach keyword clustering?",
      answer:
        "We cluster keywords by commercial and transactional buyer search intent, ensuring your pages capture users actively looking for solutions rather than low-value informational clicks.",
    },
    {
      question: "What reporting visibility will we have into organic growth?",
      answer:
        "You receive live access to transparent reporting dashboards tracking keyword positions, click-through rates, impression gains, and conversion attribution.",
    },
  ],
  "custom-web-software": [
    {
      question: "What modern tech stacks do you specialize in?",
      answer:
        "We build with modern frameworks including React, Next.js, TypeScript, Tailwind CSS, Node.js, and scalable cloud APIs built for high availability and lightning-fast loading speeds.",
    },
    {
      question: "Will our website or application be fully mobile-responsive?",
      answer:
        "Every build is crafted mobile-first, ensuring pixel-perfect responsiveness across phones, tablets, and wide monitors, while adhering to Google Core Web Vitals performance benchmarks.",
    },
    {
      question: "Can you integrate third-party APIs and payment processors?",
      answer:
        "Yes. We specialize in custom API integrations, webhook automations, payment gateways (Stripe, etc.), authentication flows, and CRM data synchronizations.",
    },
    {
      question: "Do you offer post-deployment maintenance and updates?",
      answer:
        "We provide ongoing SLA maintenance, security updates, performance monitoring, and iterative feature development to support your product's roadmap.",
    },
  ],
  "ai-workflow-automation": [
    {
      question: "Which repetitive processes can Blupeak automate?",
      answer:
        "We automate manual lead routing, CRM data enrichment, automated follow-up cadences, contract generation, cross-platform syncing, and automated analytics summaries.",
    },
    {
      question: "How do you ensure data security and privacy with AI automations?",
      answer:
        "We implement enterprise-grade encryption and secure private APIs. Your proprietary business data is never exposed or used to train public models.",
    },
    {
      question: "How much team time does workflow automation typically save?",
      answer:
        "On average, our clients eliminate 15 to 30 hours of manual administrative data entry and status updating per employee every week.",
    },
    {
      question: "How easy is it for our internal team to adopt the new workflows?",
      answer:
        "We design workflows around tools your team already uses (Slack, email, CRM). We also supply complete documentation and hands-on staff training sessions.",
    },
  ],
};

const DEFAULT_FAQS: ServiceFAQ[] = [
  {
    question: "How do we get started with this service?",
    answer:
      "Book a discovery consultation with our strategy team. We will review your current systems, define clear growth benchmarks, and present a custom execution proposal.",
  },
  {
    question: "Is delivery handled by an in-house team?",
    answer:
      "Yes, 100%. Blupeak does not outsource client delivery. You work directly with our in-house consultants, strategists, and engineers.",
  },
  {
    question: "What contract terms and engagement models do you offer?",
    answer:
      "We offer flexible monthly retainers, milestone-based sprints, and hybrid performance models designed to align with your business milestones.",
  },
  {
    question: "How frequently will we receive progress updates?",
    answer:
      "You receive weekly sprint reports, live metric dashboard access, and scheduled strategy syncs with your dedicated growth lead.",
  },
];

const PROCESS_STEPS = [
  {
    phase: "01",
    title: "Discovery & Architecture",
    description:
      "Deep audit of your current assets, conversion funnel, and market dynamics to architect a high-precision execution plan.",
  },
  {
    phase: "02",
    title: "Sprint Execution & Build",
    description:
      "Rapid launch of custom workflows, collateral, and technical infrastructure built entirely by our in-house specialists.",
  },
  {
    phase: "03",
    title: "Optimization & Scaling",
    description:
      "Continuous performance telemetry, weekly reporting reviews, and proactive iteration to compound your business return.",
  },
];

function imageForService(slug: string) {
  return Object.entries(serviceImages).find(([path]) =>
    path.slice(path.lastIndexOf("/") + 1).startsWith(`${slug}.`),
  )?.[1];
}

const focusRing = "focus-visible:outline-2! focus-visible:outline-[var(--theme-color-coral)]! focus-visible:outline-offset-4!";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageMetadata(service.metaTitle, service.metaDescription);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const image = imageForService(service.slug);
  const bounds = SERVICE_IMAGE_BOUNDS[service.slug];
  const tag = SERVICE_TAGS[service.slug] || "Growth Capability";
  const faqs = SERVICE_FAQS[service.slug] || DEFAULT_FAQS;

  return (
    <>
      <main
        className="min-h-screen! bg-white! text-[#261d1a]! selection:bg-[var(--theme-color-coral)]! selection:text-[#261d1a]!"
        data-service-details-page
      >
        {/* Top Hero & Breadcrumbs Section */}
        <section
          aria-label="Service header and navigation"
          className="mx-auto! max-w-[1424px]! px-5! pt-30! pb-8! sm:px-8! sm:pt-32! sm:pb-10! lg:px-16!"
        >
          {/* Breadcrumb Bar */}
          <nav
            aria-label="Breadcrumb"
            className="mb-5! flex! flex-wrap! items-center! gap-2! text-xs! sm:text-sm! font-medium! text-[#66544e]!"
          >
            <Link
              to="/"
              className={`text-[#66544e]! transition-colors! duration-200! hover:text-[var(--theme-color-coral)]! ${focusRing}`}
            >
              Home
            </Link>
            <ChevronRight size={14} strokeWidth={2.5} className="text-[#eaded9]! shrink-0!" aria-hidden="true" />
            <Link
              to="/services"
              className={`text-[#66544e]! transition-colors! duration-200! hover:text-[var(--theme-color-coral)]! ${focusRing}`}
            >
              Services
            </Link>
            <ChevronRight size={14} strokeWidth={2.5} className="text-[#eaded9]! shrink-0!" aria-hidden="true" />
            <span className="text-[#261d1a]! font-semibold!" aria-current="page">
              {service.title}
            </span>
          </nav>

          {/* Eyebrow badge */}
          <div className="mb-4! inline-flex! items-center! gap-2! rounded-full! border! border-[#064C44]/15! bg-[#064C44]/5! px-3.5! py-1! text-xs! font-bold! uppercase! tracking-[0.1em]! text-[#064C44]!">
            <span className="size-1.5! rounded-full! bg-[var(--theme-color-coral)]!" aria-hidden="true" />
            {tag}
          </div>

          {/* Page Heading */}
          <h1 className="m-0! max-w-full! font-[family-name:var(--heading-font-family)]! text-[32px]! leading-[1.15]! font-normal! tracking-[-0.03em]! text-[#261d1a]! text-balance! min-[470px]:text-[40px]! min-[768px]:text-[clamp(36px,4.5vw,56px)]! min-[768px]:leading-[1.1]!">
            <TextReveal
              text={service.title}
              emphasis={{
                text: service.title.split("&").length > 1 ? service.title.split("&")[1].trim() : service.title.split(" ").slice(-2).join(" "),
                className: "font-[family-name:var(--style-font)]! font-normal! text-[var(--theme-color-coral)]! italic!",
              }}
            />
          </h1>

          {/* Lead Intro */}
          <p className="mt-4! mb-0! max-w-[75ch]! text-base! leading-[1.75]! text-[#66544e]! sm:text-lg!">
            {service.intro}
          </p>
        </section>

        {/* Two-Column Body: Content + Sidebar */}
        <section aria-label="Service details body" className="mx-auto! max-w-[1424px]! px-5! pb-16! sm:px-8! sm:pb-24! lg:px-16!">
          <div className="grid! grid-cols-1! gap-10! lg:grid-cols-12! lg:gap-12! items-start!">
            {/* Sidebar (Desktop left, Mobile stacked below main content) */}
            <aside aria-label="Service navigation and help" className="order-2! lg:order-1! lg:col-span-4! space-y-6!">
              {/* All Services Navigation Card */}
              <div className="rounded-2xl! border! border-[#eaded9]! bg-[#faf8f7]! p-4! sm:p-5! shadow-[0_4px_20px_rgba(38,29,26,0.03)]!">
                <span className="block! px-3! pt-1! pb-3! text-xs! font-bold! uppercase! tracking-[0.12em]! text-[#66544e]!">
                  All Growth Services
                </span>
                <ul className="m-0! list-none! p-0! space-y-2!">
                  {SERVICES.map((item) => {
                    const isCurrent = item.slug === service.slug;
                    return (
                      <li key={item.slug} className="m-0! p-0!">
                        <Link
                          to={`/services/${item.slug}`}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`group! flex! items-center! justify-between! gap-3! rounded-xl! px-4! py-3.5! text-sm! sm:text-base! transition-all! duration-200! ${
                            isCurrent
                              ? "bg-[#064C44]! text-white! font-semibold! shadow-sm!"
                              : "border! border-transparent! bg-white! text-[#261d1a]! font-medium! hover:border-[#064C44]/30! hover:text-[#064C44]! hover:shadow-sm!"
                          } ${focusRing}`}
                        >
                          <span className="min-w-0! truncate!">{item.title}</span>
                          <span
                            aria-hidden="true"
                            className={`flex! size-7! shrink-0! items-center! justify-center! rounded-full! transition-all! duration-200! ${
                              isCurrent
                                ? "bg-[var(--theme-color-coral)]! text-[#261d1a]!"
                                : "border! border-[#eaded9]! bg-[#faf8f7]! text-[#66544e]! group-hover:border-[#064C44]/30! group-hover:text-[#064C44]! group-hover:translate-x-0.5!"
                            }`}
                          >
                            <ChevronRight size={15} strokeWidth={2.5} />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Consultation / Expert Help Card with Primary Lockup on Light Background */}
              <div className="relative! overflow-hidden! rounded-2xl! border! border-[#eaded9]! bg-[#faf8f7]! p-6! sm:p-7! shadow-[0_4px_20px_rgba(38,29,26,0.03)]!">
                {/* Primary Lockup Logo */}
                <div className="mb-5!">
                  <img
                    src="/images/blupeak-dark-full.png"
                    alt="Blupeak Solutions"
                    className="h-7! w-auto! object-contain!"
                  />
                </div>

                <h3 className="m-0! font-[family-name:var(--heading-font-family)]! text-xl! font-normal! tracking-[-0.02em]! text-[#261d1a]!">
                  Need expert guidance on your revenue roadmap?
                </h3>
                <p className="mt-2! mb-5! text-sm! leading-[1.65]! text-[#66544e]!">
                  Speak directly with our strategy consultants to review your current bottlenecks and build a targeted growth pipeline.
                </p>

                {/* Direct Phone Line */}
                <div className="flex! items-center! gap-3.5! rounded-xl! border! border-[#eaded9]! bg-white! p-3.5!">
                  <div className="flex! size-11! shrink-0! items-center! justify-center! rounded-full! border! border-[#064C44]/15! bg-[#064C44]/10! text-[#064C44]!">
                    <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0!">
                    <span className="block! text-[11px]! font-bold! uppercase! tracking-[0.1em]! text-[#66544e]!">
                      Direct In-House Line
                    </span>
                    <a
                      href="tel:01849415421"
                      className={`block! text-lg! font-bold! tracking-tight! text-[#261d1a]! transition-colors! duration-200! hover:text-[var(--theme-color-coral)]! ${focusRing}`}
                    >
                      01849-415421
                    </a>
                  </div>
                </div>

                {/* Consultation CTA Button */}
                <Link
                  to="/contact"
                  className={`mt-5! inline-flex! min-h-12! w-full! items-center! justify-center! gap-3! rounded-full! bg-[var(--theme-color-coral)]! px-5! py-3! text-sm! font-semibold! text-[#261d1a]! text-center! transition-colors! duration-200! hover:bg-[#f24c32]! ${focusRing}`}
                >
                  Book a Growth Consultation
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="shrink-0!" />
                </Link>
              </div>

              {/* Service Delivery Highlights */}
              <div className="rounded-2xl! border! border-[#eaded9]! bg-white! p-5! shadow-[0_4px_20px_rgba(38,29,26,0.03)]!">
                <span className="block! pb-3! text-xs! font-bold! uppercase! tracking-[0.12em]! text-[#66544e]!">
                  Our Delivery Standard
                </span>
                <ul className="m-0! list-none! p-0! space-y-3!">
                  {[
                    "100% In-house execution bench",
                    "Dedicated Senior Strategy Consultant",
                    "Weekly metric reviews & KPI reporting",
                    "Frictionless integration with your stack",
                  ].map((highlight) => (
                    <li key={highlight} className="flex! items-center! gap-3! text-sm! text-[#261d1a]! font-medium!">
                      <span className="flex! size-5! shrink-0! items-center! justify-center! rounded-full! bg-[#064C44]/10! text-[#064C44]!">
                        <Check size={12} strokeWidth={3} className="text-[#064C44]!" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="order-1! lg:order-2! lg:col-span-8! space-y-10!">
              {/* Featured Service Artwork Card */}
              {image && bounds && (
                <div className="relative! overflow-hidden! rounded-2xl! bg-[#064C44]! p-6! sm:p-8! text-white! shadow-sm!">
                  <div className="grid! grid-cols-1! md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]! gap-6! items-center!">
                    <div className="min-w-0!">
                      <span className="inline-flex! items-center! gap-2! rounded-full! bg-white/10! px-3! py-1! text-xs! font-bold! uppercase! tracking-[0.1em]! text-white! mb-3!">
                        <span className="size-1.5! rounded-full! bg-[var(--theme-color-coral)]!" aria-hidden="true" />
                        Strategic Capability
                      </span>
                      <h2 className="m-0! font-[family-name:var(--heading-font-family)]! text-2xl! sm:text-3xl! font-medium! leading-[1.25]! text-white!">
                        {service.title}
                      </h2>
                      <p className="mt-3! mb-0! text-sm! sm:text-base! leading-relaxed! text-white/80!">
                        {service.intro}
                      </p>
                    </div>

                    <div
                      aria-hidden="true"
                      data-service-image={service.slug}
                      className="relative! block! h-28! sm:h-36! md:h-44! w-auto! justify-self-center! md:justify-self-end! overflow-hidden! select-none!"
                      style={{ aspectRatio: `${bounds.width} / ${bounds.height}` }}
                    >
                      <img
                        src={image}
                        alt=""
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="absolute! block! h-auto! max-w-none!"
                        style={{
                          width: `${(800 / bounds.width) * 100}%`,
                          left: `${(-bounds.left / bounds.width) * 100}%`,
                          top: `${(-bounds.top / bounds.height) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* What's Included Section */}
              <section aria-labelledby="included-title" className="space-y-4!">
                <div className="flex! flex-wrap! items-center! justify-between! gap-2!">
                  <h2
                    id="included-title"
                    className="m-0! font-[family-name:var(--heading-font-family)]! text-2xl! sm:text-3xl! font-medium! tracking-[-0.02em]! text-[#261d1a]!"
                  >
                    What&apos;s Included
                  </h2>
                  <span className="text-xs! sm:text-sm! font-medium! text-[#66544e]!">
                    Full In-House Execution
                  </span>
                </div>
                <p className="mt-1! mb-4! text-sm! sm:text-base! text-[#66544e]!">
                  Every component is delivered and managed by our in-house specialists to guarantee end-to-end quality:
                </p>

                <div className="grid! grid-cols-1! sm:grid-cols-2! gap-4!">
                  {service.included.map((item, index) => (
                    <div
                      key={item}
                      className="group! flex! items-start! gap-4! rounded-xl! border! border-[#eaded9]! bg-[#faf8f7]! p-5! transition-all! duration-200! hover:border-[#064C44]/30! hover:bg-white! hover:shadow-sm!"
                    >
                      <span className="flex! size-8! shrink-0! items-center! justify-center! rounded-full! bg-[#064C44]/10! text-[#064C44]! transition-colors! duration-200! group-hover:bg-[#064C44]! group-hover:text-white! mt-0.5!">
                        <Check size={16} strokeWidth={2.5} />
                      </span>
                      <div className="min-w-0!">
                        <span className="block! text-xs! font-bold! uppercase! tracking-wider! text-[#66544e]! mb-1!">
                          Deliverable {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="m-0! text-sm! sm:text-base! font-medium! leading-snug! text-[#261d1a]!">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Expected Strategic Outcome Callout */}
              <section aria-label="Strategic outcome" className="relative! overflow-hidden! rounded-2xl! border! border-[#064C44]/20! bg-[#064C44]/5! p-6! sm:p-8! pl-7! sm:pl-9!">
                {/* Structural brand teal accent line */}
                <span className="absolute! left-0! top-0! bottom-0! w-1.5! bg-[#064C44]!" aria-hidden="true" />
                <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-[0.12em]! text-[#064C44]! mb-2.5!">
                  <span className="size-2! rounded-full! bg-[var(--theme-color-coral)]!" aria-hidden="true" />
                  Target Business Outcome
                </div>
                <blockquote className="m-0! font-[family-name:var(--style-font)]! text-lg! sm:text-xl! md:text-2xl! font-normal! italic! leading-[1.5]! text-[#261d1a]!">
                  &ldquo;{service.outcome}&rdquo;
                </blockquote>
              </section>

              {/* How We Deliver: 3-Phase Execution Framework */}
              <section aria-labelledby="delivery-framework-title" className="space-y-4!">
                <div className="flex! flex-wrap! items-center! justify-between! gap-2!">
                  <h2
                    id="delivery-framework-title"
                    className="m-0! font-[family-name:var(--heading-font-family)]! text-2xl! sm:text-3xl! font-medium! tracking-[-0.02em]! text-[#261d1a]!"
                  >
                    How We Deliver
                  </h2>
                  <span className="text-xs! sm:text-sm! font-medium! text-[#66544e]!">
                    Disciplined 3-Phase Sprint
                  </span>
                </div>
                <p className="mt-1! mb-4! text-sm! sm:text-base! text-[#66544e]!">
                  A battle-tested framework engineered to eliminate implementation friction and compound results quickly:
                </p>

                <div className="grid! grid-cols-1! md:grid-cols-3! gap-4!">
                  {PROCESS_STEPS.map((step) => (
                    <div
                      key={step.phase}
                      className="flex! flex-col! justify-between! rounded-xl! border! border-[#eaded9]! bg-[#faf8f7]! p-5! sm:p-6! transition-all! duration-200! hover:border-[#064C44]/30! hover:bg-white! hover:shadow-sm!"
                    >
                      <div>
                        <div className="flex! items-center! justify-between! gap-2! mb-3!">
                          <span className="text-xs! font-bold! uppercase! tracking-widest! text-[var(--theme-color-coral)]!">
                            Phase {step.phase}
                          </span>
                          <span className="size-1.5! rounded-full! bg-[var(--theme-color-coral)]!" aria-hidden="true" />
                        </div>
                        <h3 className="m-0! font-[family-name:var(--heading-font-family)]! text-lg! font-medium! text-[#261d1a]!">
                          {step.title}
                        </h3>
                        <p className="mt-2! mb-0! text-xs! sm:text-sm! leading-relaxed! text-[#66544e]!">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section aria-labelledby="service-faq-title" className="space-y-4!">
                <div className="flex! flex-wrap! items-center! justify-between! gap-2!">
                  <h2
                    id="service-faq-title"
                    className="m-0! font-[family-name:var(--heading-font-family)]! text-2xl! sm:text-3xl! font-medium! tracking-[-0.02em]! text-[#261d1a]!"
                  >
                    Frequently Asked Questions
                  </h2>
                  <span className="text-xs! sm:text-sm! font-medium! text-[#66544e]!">
                    Clear Answers &amp; Expectations
                  </span>
                </div>
                <p className="mt-1! mb-5! text-sm! sm:text-base! text-[#66544e]!">
                  Everything you need to know about partnering with our in-house team for this service:
                </p>

                <div className="space-y-3!">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div
                        key={faq.question}
                        className={`rounded-xl! border! transition-all! duration-200! ${
                          isOpen
                            ? "border-[var(--theme-color-coral)]! bg-[#fff1ed]! shadow-sm!"
                            : "border-[#eaded9]! bg-[#faf8f7]! hover:border-[#064C44]/30!"
                        }`}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${index}`}
                          id={`faq-question-${index}`}
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className={`flex! w-full! cursor-pointer! items-center! justify-between! gap-4! p-4! sm:p-5! text-left! border-0! bg-transparent! transition-colors! ${focusRing}`}
                        >
                          <div className="flex! items-center! gap-3.5! min-w-0!">
                            <span className="text-xs! sm:text-sm! font-bold! text-[var(--theme-color-coral)]! shrink-0!">
                              {String(index + 1).padStart(2, "0")}.
                            </span>
                            <span className="font-[family-name:var(--heading-font-family)]! text-base! sm:text-lg! font-medium! tracking-tight! text-[#261d1a]!">
                              {faq.question}
                            </span>
                          </div>
                          <span
                            aria-hidden="true"
                            className={`flex! size-8! shrink-0! items-center! justify-center! rounded-full! transition-colors! duration-200! ${
                              isOpen
                                ? "bg-[var(--theme-color-coral)]! border! border-[var(--theme-color-coral)]! text-white!"
                                : "border! border-[#eaded9]! bg-white! text-[#261d1a]!"
                            }`}
                          >
                            {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            id={`faq-answer-${index}`}
                            role="region"
                            aria-labelledby={`faq-question-${index}`}
                            className="px-4! sm:px-5! pb-5! pt-1!"
                          >
                            <p className="m-0! text-sm! sm:text-base! leading-[1.7]! text-[#66544e]! border-t! border-[#eaded9]/60! pt-3.5!">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>

          {/* Bottom Full-Width CTA Banner (matching Services.tsx style) */}
          <div className="mt-14! flex! flex-col! items-start! justify-between! gap-6! rounded-2xl! bg-[#064C44]! p-7! sm:mt-20! sm:p-10! lg:flex-row! lg:items-center! lg:p-12! shadow-md!">
            <div className="min-w-0!">
              <span className="inline-flex! items-center! gap-2! rounded-full! bg-white/10! px-3! py-1! text-xs! font-bold! uppercase! tracking-[0.1em]! text-white! mb-3!">
                <span className="size-1.5! rounded-full! bg-[var(--theme-color-coral)]!" aria-hidden="true" />
                Next Step
              </span>
              <h2 className="m-0! font-[family-name:var(--heading-font-family)]! text-[clamp(1.75rem,3vw,2.5rem)]! leading-[1.2]! font-normal! tracking-[-0.03em]! text-white!">
                Ready to scale your revenue engine?
              </h2>
              <p className="mt-2! mb-0! max-w-[55ch]! text-sm! sm:text-base! text-white/80!">
                Book a focused growth consultation with our in-house specialists to audit your pipeline and map out your execution sprint.
              </p>
            </div>

            <Link
              to="/contact"
              className={`relative! z-10! inline-flex! min-h-14! w-full! sm:w-auto! shrink-0! items-center! justify-center! gap-4! rounded-full! bg-[var(--theme-color-coral)]! px-6! py-4! text-base! font-semibold! text-[#261d1a]! text-center! cursor-pointer! transition-colors! duration-300! hover:bg-[#f24c32]! motion-reduce:transition-none! ${focusRing}`}
            >
              Book a Growth Consultation
              <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" className="shrink-0!" />
            </Link>
          </div>
        </section>
      </main>
      <Footer padded />
    </>
  );
}
