import { pageClasses } from "../../styles/pageUtilities";
import InterfaceIcon from "../common/InterfaceIcon";
import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { SERVICES } from "../../lib/services";

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
    <div className={pageClasses("growth-services")} aria-label="Growth services">
      {SERVICES.map((service, index) => {
        const isOpen = openIndex === index;
        const contentId = `growth-service-content-${index}`;

        return (
          <article className={pageClasses(`growth-service${isOpen ? " is-open" : ""}`)} key={service.title}>
            <button
              type="button"
              className={pageClasses("growth-service-toggle")}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className={pageClasses("growth-service-number")}>0{index + 1}.</span>
              <span className={pageClasses("growth-service-title")}>{service.title}</span>
              <span className={pageClasses("growth-service-arrow")} aria-hidden="true">
                <InterfaceIcon name="arrow-right"  />
              </span>
            </button>
            <div
              id={contentId}
              ref={(element) => {
                contentRefs.current[index] = element;
              }}
              className={pageClasses("growth-service-content")}
              aria-hidden={!isOpen}
            >
              <div className={pageClasses("growth-service-content-inner")}>
                <p>{service.intro}</p>
                <div className={pageClasses("growth-service-columns")}>
                  <div>
                    <h3>What's included</h3>
                    <ul>
                      {service.included.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={pageClasses("growth-service-outcome")}>
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
