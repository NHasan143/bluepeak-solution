import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";

type GrowthService = {
  title: string;
  intro: string;
  included: string[];
  outcome: string;
};

const GROWTH_SERVICES: GrowthService[] = [
  {
    title: "B2B Outbound Sales & Pipeline Generation",
    intro:
      "We build and run the cold outreach that fills your calendar. Every list, message and cadence is built around your actual buyer, by call and by email, so the leads coming in are ones worth having a conversation with, not just names on a list.",
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
    title: "Full-Cycle Deal Closing",
    intro:
      "Booking a call is only half the job. Our native English speaking sales consultants take it from there, running discovery, handling objections and closing high-ticket B2B deals on your behalf, under your brand.",
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
    title: "SEO & Organic Growth",
    intro:
      "Paid outreach fills the pipeline today. SEO is what keeps it filling months from now without you spending more on ads. We handle the technical fixes, the keyword strategy and the content itself.",
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
    title: "Brand, Creative & Paid Media",
    intro:
      "The systems and the outreach only work as well as the material behind them. Our in-house design team produces the assets your sales team needs and manages the paid campaigns that put them in front of the right people.",
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

export default function GrowthServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const content = contentRefs.current[openIndex ?? -1];
    const contents = contentRefs.current.filter(
      (item): item is HTMLDivElement => item !== null,
    );

    gsap.killTweensOf(contents);
    gsap.to(contents, {
      height: 0,
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      overwrite: true,
    });

    if (content) {
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
        },
      );
    }
  }, [openIndex]);

  return (
    <div className="growth-services" aria-label="Growth services">
      {GROWTH_SERVICES.map((service, index) => {
        const isOpen = openIndex === index;
        const contentId = `growth-service-content-${index}`;

        return (
          <article className={`growth-service${isOpen ? " is-open" : ""}`} key={service.title}>
            <button
              type="button"
              className="growth-service-toggle"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="growth-service-number">0{index + 1}.</span>
              <span className="growth-service-title">{service.title}</span>
              <span className="growth-service-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </button>
            <div
              id={contentId}
              ref={(element) => {
                contentRefs.current[index] = element;
              }}
              className="growth-service-content"
              aria-hidden={!isOpen}
            >
              <div className="growth-service-content-inner">
                <p>{service.intro}</p>
                <div className="growth-service-columns">
                  <div>
                    <h3>What's included</h3>
                    <ul>
                      {service.included.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="growth-service-outcome">
                    <h3>What you get</h3>
                    <p>{service.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
