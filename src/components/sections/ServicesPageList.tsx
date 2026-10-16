import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../lib/services";
import { useServiceCardFold } from "../../hooks/useServiceCardFold";

const SERVICE_TAGS: Record<string, string> = {
  "revenue-sales-systems": "Revenue Engine",
  "brand-creative-solutions": "Brand & Identity",
  "seo-organic-growth": "Search Authority",
  "custom-web-software": "Web & Engineering",
  "ai-workflow-automation": "AI & Automation",
};

// Render the supplied artwork directly, without an additional numeral mask.
const serviceImages = import.meta.glob<string>(
  "../../assets/service-images/*.{webp,jpg,jpeg,png,avif}",
  { eager: true, query: "?url", import: "default" },
);

// Visible alpha bounds in the supplied 800×800 PNGs. Crop only the rendered
// viewport so the transparent canvas does not shrink or offset the artwork.
const SERVICE_IMAGE_BOUNDS: Record<string, { left: number; top: number; width: number; height: number }> = {
  "revenue-sales-systems": { left: 272, top: 336, width: 239, height: 161 },
  "brand-creative-solutions": { left: 233, top: 272, width: 290, height: 161 },
  "seo-organic-growth": { left: 264, top: 309, width: 290, height: 161 },
  "custom-web-software": { left: 218, top: 321, width: 306, height: 161 },
  "ai-workflow-automation": { left: 240, top: 357, width: 291, height: 161 },
};

function imageForService(slug: string) {
  return Object.entries(serviceImages).find(([path]) =>
    path.slice(path.lastIndexOf("/") + 1).startsWith(`${slug}.`),
  )?.[1];
}

export default function ServicesPageList() {
  const listRef = useRef<HTMLUListElement>(null);
  useServiceCardFold(listRef);

  return (
    <div className="mt-10! mb-6!" aria-label="Our core growth services">
      <ul ref={listRef} className="relative! m-0! list-none! p-0!" data-services-editorial-list>
        {SERVICES.map((service, index) => {
          const reversed = index % 2 === 1;
          const image = imageForService(service.slug);
          const bounds = SERVICE_IMAGE_BOUNDS[service.slug];

          return (
            <li key={service.slug} className="relative! m-0! border-0! border-b! border-solid! border-white/20! bg-[#064C44]! p-0! last:border-b-0!">
              <div
                className="relative! grid! [--service-art-width:80px] [--service-card-gap:20px] grid-cols-[minmax(0,1fr)_var(--service-art-width)]! items-center! gap-5! px-4! py-9! min-[370px]:[--service-art-width:112px] min-[470px]:[--service-art-width:180px] sm:[--service-card-gap:40px] sm:gap-10! sm:px-6! sm:py-12! md:min-h-[288px]! md:grid-cols-2! lg:gap-20! lg:px-10!"
                data-service-row
              >
                <div className={`min-w-0! ${reversed ? "md:col-start-2! md:row-start-1! md:text-right!" : "md:col-start-1! md:row-start-1!"}`}>
                  <h3 className="m-0! font-[family-name:var(--heading-font-family)]! text-[24px]! leading-[1.2]! font-medium! tracking-[-0.02em]! text-white! text-balance! sm:text-[32px]! max-[767.98px]:w-[calc(100%+var(--service-art-width)+var(--service-card-gap))]! max-[767.98px]:whitespace-nowrap! max-[767.98px]:text-[clamp(15px,calc(6.75vw_-_6px),32px)]!">
                    {service.title}
                  </h3>
                  <span aria-hidden="true" className={`mt-3! mb-4! block! h-px! w-14! bg-[var(--theme-color-coral)]! ${reversed ? "md:ml-auto!" : ""}`} />
                  <p className={`m-0! max-w-[54ch]! text-base! leading-[1.75]! text-white! ${reversed ? "md:ml-auto!" : ""}`}>
                    {service.intro}
                  </p>
                  <div className={`mt-5! flex! ${reversed ? "md:justify-end!" : ""}`}>
                    <Link
                      to={`/services/${service.slug}`}
                      aria-label={`View ${service.title} details`}
                      className="inline-flex! min-h-11! min-w-0! max-w-full! items-center! gap-4! rounded-full! bg-[var(--theme-color-coral)]! px-4! py-2! text-[#261d1a]! no-underline! cursor-pointer! transition-colors! duration-200! hover:bg-[#ff806c]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-white! focus-visible:outline-offset-4! motion-reduce:transition-none!"
                      data-service-cta
                    >
                      <span className="min-w-0! text-[10px]! leading-normal! font-bold! tracking-[0.08em]! uppercase! sm:text-[11px]!">
                        {SERVICE_TAGS[service.slug]}
                      </span>
                      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} className="shrink-0!" />
                    </Link>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  data-service-image={service.slug}
                  className={`relative! block! h-10! w-auto! justify-self-end! overflow-hidden! select-none! min-[370px]:h-14! min-[470px]:h-22! md:h-[clamp(140px,16vw,220px)]! ${reversed ? "md:col-start-1! md:row-start-1! md:justify-self-start!" : "md:col-start-2! md:row-start-1!"}`}
                  style={{ aspectRatio: `${bounds.width} / ${bounds.height}` }}
                >
                  {image && (
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
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
