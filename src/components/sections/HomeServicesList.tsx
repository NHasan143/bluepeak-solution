import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../lib/services";

const SERVICE_TAGS: Record<string, string> = {
  "revenue-sales-systems": "Revenue Engine",
  "brand-creative-solutions": "Brand & Identity",
  "seo-organic-growth": "Search Authority",
  "custom-web-software": "Web & Engineering",
  "ai-workflow-automation": "AI & Automation",
};

// These utilities keep both service overviews in sync. Important modifiers
// isolate their presentation from the unlayered legacy template stylesheet.
const rowStyles = [
  "home-service-row group relative! grid! grid-cols-[minmax(0,1fr)_48px]! items-center! gap-x-3! gap-y-3.5! overflow-hidden! rounded-[14px]! border! border-white/[0.07]! bg-white/[0.02]! px-[18px]! py-5! no-underline!",
  "min-[576px]:gap-x-5! min-[576px]:gap-y-4! min-[576px]:rounded-[18px]! min-[576px]:px-[26px]! min-[576px]:py-6! min-[992px]:grid-cols-[minmax(320px,1.15fr)_minmax(280px,1.4fr)_56px]! min-[992px]:gap-9! min-[992px]:px-9! min-[992px]:py-7!",
  "transition-[transform,background-color,border-color,box-shadow]! duration-350! ease-[cubic-bezier(0.2,0.8,0.2,1)]! hover:-translate-y-[3px]! hover:border-[#D9F45F]/[0.28]! hover:bg-[radial-gradient(120%_140%_at_20%_50%,rgba(217,244,95,0.08)_0%,rgba(26,32,22,0.5)_45%,rgba(18,20,22,0.8)_100%)]! hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.45),0_0_24px_-6px_rgba(217,244,95,0.12)]!",
  "focus-visible:-translate-y-[3px]! focus-visible:border-[#D9F45F]/[0.28]! focus-visible:bg-[radial-gradient(120%_140%_at_20%_50%,rgba(217,244,95,0.08)_0%,rgba(26,32,22,0.5)_45%,rgba(18,20,22,0.8)_100%)]! focus-visible:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.45),0_0_24px_-6px_rgba(217,244,95,0.12)]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-3! motion-reduce:transition-none! motion-reduce:duration-0! motion-reduce:hover:translate-y-0! motion-reduce:focus-visible:translate-y-0!",
].join(" ");

export default function HomeServicesList() {
  return (
    <div className="home-services-showcase relative! mt-10! mb-6!" aria-label="Our core growth services">
      <ul className="home-services-list m-0! flex! list-none! flex-col! gap-3! p-0! min-[576px]:gap-4!">
        {SERVICES.map((service, index) => (
          <li key={service.slug} className="home-service-item relative!">
            <Link to={`/services/${service.slug}`} className={rowStyles} aria-label={`${service.title} - ${service.intro}`}>
              <span aria-hidden="true" className="home-service-indicator absolute! inset-y-0! left-0! w-1! origin-center! scale-y-0! rounded! bg-[#D9F45F]! opacity-0! transition-[opacity,transform]! duration-350! ease-[cubic-bezier(0.2,0.8,0.2,1)]! group-hover:scale-y-100! group-hover:opacity-100! group-focus-visible:scale-y-100! group-focus-visible:opacity-100! motion-reduce:transition-none!" />

              <div className="home-service-header col-start-1! row-start-1! flex! min-w-0! items-center! gap-3.5! min-[576px]:gap-[22px]!">
                <span className="home-service-num min-w-8! shrink-0! text-[17px]! leading-normal! font-bold! tracking-[-0.01em]! text-[#D9F45F]! tabular-nums! min-[576px]:min-w-[42px]! min-[576px]:text-xl!" aria-hidden="true">{String(index + 1).padStart(2, "0")}.</span>
                <div className="flex! min-w-0! flex-col! gap-1!">
                  <h3 className="home-service-title m-0! text-[19px]! leading-[1.25]! font-semibold! text-white! transition-colors! duration-300! group-hover:text-[#D9F45F]! group-focus-visible:text-[#D9F45F]! min-[576px]:text-[clamp(22px,1.85vw,28px)]! motion-reduce:transition-none!">{service.title}</h3>
                  <span className="home-service-tag mt-0.5! text-[10px]! leading-normal! font-bold! tracking-[0.08em]! text-[#D9F45F]/75! uppercase! min-[576px]:text-[11px]!">{SERVICE_TAGS[service.slug]}</span>
                </div>
              </div>

              <div className="home-service-body col-span-2! col-start-1! row-start-2! min-[576px]:pl-16! min-[992px]:col-span-1! min-[992px]:col-start-2! min-[992px]:row-start-1! min-[992px]:pl-0!">
                <p className="home-service-desc m-0! text-sm! leading-[1.6]! text-white/72! transition-colors! duration-300! group-hover:text-white/92! group-focus-visible:text-white/92! min-[576px]:text-base! min-[576px]:leading-[1.65]! motion-reduce:transition-none!">{service.intro}</p>
              </div>

              <div className="col-start-2! row-start-1! flex! justify-end! min-[992px]:col-start-3!">
                <span aria-hidden="true" className="home-service-arrow-btn grid! size-10! place-items-center! rounded-full! border! border-white/20! bg-white/[0.03]! text-white! transition-[transform,background-color,border-color,color,box-shadow]! duration-350! ease-[cubic-bezier(0.2,0.8,0.2,1)]! group-hover:scale-[1.06]! group-hover:-rotate-45! group-hover:border-[#D9F45F]! group-hover:bg-[#D9F45F]! group-hover:text-[#0f0b19]! group-hover:shadow-[0_0_20px_rgba(217,244,95,0.45)]! group-focus-visible:scale-[1.06]! group-focus-visible:-rotate-45! group-focus-visible:border-[#D9F45F]! group-focus-visible:bg-[#D9F45F]! group-focus-visible:text-[#0f0b19]! group-focus-visible:shadow-[0_0_20px_rgba(217,244,95,0.45)]! min-[576px]:size-12! motion-reduce:transition-none! motion-reduce:transform-none! motion-reduce:group-hover:rotate-0! motion-reduce:group-hover:scale-100! motion-reduce:group-focus-visible:rotate-0! motion-reduce:group-focus-visible:scale-100!">
                  <ArrowRight size={18} strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
