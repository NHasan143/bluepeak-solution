import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap";
import { pageClasses } from "../../styles/pageUtilities";
import InterfaceIcon from "../common/InterfaceIcon";
import Star from "../common/Star";

const FOUNDATIONS = [
  "6+ years of combined, hands-on experience across our sales, tech and creative team",
  "A team built from people who have run outbound, closing and CRM systems for growing B2B companies before",
  "Every project handled by our own in-house specialists, never subcontracted out",
  "One accountable team covering strategy, execution and reporting for each client, start to finish",
];

export default function FoundationSection() {
  const section = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      section.current?.querySelectorAll<HTMLElement>("[data-foundation-row]").forEach((row, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.fromTo(row, { x: () => direction * (window.innerWidth + row.offsetWidth) / 2 }, {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top 98%",
            end: "top 35%",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      });
    }, section);
    return () => media.revert();
  }, []);

  return (
    <section ref={section} aria-labelledby="foundation-title" className={pageClasses("award-section1 section-padding relative! overflow-x-clip! pt-6! sm:pt-8! pb-12! sm:pb-16! bg-white!")}>
      <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
        <div className="grid! gap-8! mb-12! sm:mb-16! min-[1200px]:grid-cols-[1.4fr_1fr]! min-[1200px]:items-end! min-[1200px]:gap-16!">
          <div className={pageClasses("section-title mb-0!")}>
            <div className="sub-title"><Star variant="coral" /><span>Our Foundation</span></div>
            <h2 id="foundation-title" className={pageClasses("title text-anim text-[#261d1a]! max-[375px]:text-[28px]! max-[375px]:leading-[1.2]!")}>
              Built on Real Experience,<br className="block!" /><span>Not Empty Promises</span>
            </h2>
          </div>
          <div>
            <p className="mb-6! text-[#66544e]!">Blupeak is a young agency, but the team behind it isn’t. Here is what actually backs that up.</p>
            <div className="flex! items-center! gap-5!">
              <span className="text-[clamp(3rem,5vw,4rem)]! leading-none! tracking-[-0.03em]! text-[#064C44]!">6+</span>
              <p className="m-0! text-base! leading-[1.5]! text-[#66544e]!">Years of combined,<br />hands-on experience</p>
            </div>
          </div>
        </div>
        <div className="grid! gap-6! sm:gap-8!">
          {FOUNDATIONS.map((description, index) => (
            <article key={description} data-foundation-row className={`grid! items-center! gap-4! rounded-2xl! border! border-solid! border-[#eaded9]! bg-[#faf8f7]! p-4! sm:p-5! min-[768px]:gap-6! min-[992px]:gap-8! ${index % 2 === 0 ? "min-[768px]:grid-cols-[minmax(0,1fr)_200px]! min-[992px]:grid-cols-[minmax(0,1fr)_240px]!" : "min-[768px]:grid-cols-[200px_minmax(0,1fr)]! min-[992px]:grid-cols-[240px_minmax(0,1fr)]!"}`}>
              <img
                src={`/images/home/our_foundation_${index + 1}.jpg`}
                alt="Growth analytics dashboard"
                width={491}
                height={307}
                loading="lazy"
                className={`block! w-full! max-w-[200px]! h-auto! aspect-[16/10]! object-cover! rounded-xl! min-[768px]:max-w-none! ${index % 2 === 0 ? "min-[768px]:col-start-2! min-[768px]:row-start-1!" : "min-[768px]:col-start-1! min-[768px]:row-start-1!"}`}
              />
              <div className={`flex! flex-col! items-start! gap-3! ${index % 2 === 0 ? "min-[768px]:col-start-1! min-[768px]:row-start-1!" : "min-[768px]:col-start-2! min-[768px]:row-start-1!"}`}>
                <p data-foundation-description className="m-0! text-[22px]! leading-[1.4]! tracking-[-0.02em]! text-[#261d1a]! min-[992px]:text-[28px]!">{description}</p>
                <Link to="/about" aria-label={`More about Blupeak: ${description}`} className="inline-flex! size-11! shrink-0! items-center! justify-center! rounded-full! border! border-solid! border-[#eaded9]! bg-white! text-[#064C44]! transition-colors! duration-200! hover:border-[var(--theme-color-coral)]! hover:bg-[var(--theme-color-coral)]! hover:text-[#261d1a]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#C3422A]! focus-visible:outline-offset-4!">
                  <InterfaceIcon name="arrow-right" className="-rotate-45!" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
