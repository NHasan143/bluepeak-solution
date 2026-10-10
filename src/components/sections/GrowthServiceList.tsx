import { pageClasses } from "../../styles/pageUtilities";
import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { SERVICES, type Service } from "../../lib/services";

export type GrowthService = Service;

export const GROWTH_SERVICES = SERVICES;

export default function GrowthServiceList({ items = GROWTH_SERVICES }: { items?: GrowthService[] }) {
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      items.forEach((_, index) => {
        const panel = document.querySelector<HTMLElement>(`[data-growth-panel="${index}"]`);
        if (!panel) return;
        const isOpen = open === index;
        gsap.to(panel, {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.55,
          ease: "power3.out",
          overwrite: true,
        });
      });
    }, listRef);
    return () => context.revert();
  }, [items, open]);

  return (
    <div className="growth-service-list" ref={listRef}>
      {items.map((service, index) => {
        const isOpen = open === index;
        return (
          <article className={`growth-service-item${isOpen ? " is-open" : ""}`} key={service.title}>
            <button
              className="growth-service-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`growth-service-panel-${index}`}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className={pageClasses("growth-service-number")}>0{index + 1}.</span>
              <span className={pageClasses("growth-service-title")}>{service.title}</span>
              <span className={pageClasses("growth-service-arrow")} aria-hidden="true">-&gt;</span>
            </button>
            <div
              className="growth-service-panel"
              id={`growth-service-panel-${index}`}
              data-growth-panel={index}
              aria-hidden={!isOpen}
            >
              <p>{service.intro}</p>
              <h4>What's included</h4>
              <ul>{service.included.map((point) => <li key={point}>{point}</li>)}</ul>
              <h4>What you get</h4>
              <p>{service.outcome}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
