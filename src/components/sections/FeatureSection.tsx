import InterfaceIcon from "../common/InterfaceIcon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "../common/Star";
import { Megaphone, Handshake, Database, TrendingUp, MonitorPlay, Code, Users, Workflow, Search, Palette, Rocket } from "lucide-react";

export interface FeatureCardItem {
  cls: string;
  icon: React.ElementType;
  title: string;
  description: string;
  slug: string;
  active?: boolean;
}

const DEFAULT_SLIDER_CARDS: FeatureCardItem[] = [
  { cls: "card-1", icon: Megaphone, title: "Outbound Sales Infrastructure", description: "Multi-channel outreach systems built to consistently fill your pipeline with qualified decision-makers.", slug: "b2b-outbound-sales" },
  { cls: "card-2", icon: Handshake, title: "Full-Cycle Deal Closing", description: "In-house consultants who own the sales conversation from first call to signed contract.", slug: "full-cycle-deal-closing" },
  { cls: "card-3", icon: Database, title: "CRM Architecture & Automation", description: "Purpose-built systems that remove manual work and keep every lead moving.", slug: "crm-architecture", active: true },
  { cls: "card-4", icon: TrendingUp, title: "SEO & Content Growth", description: "Organic strategies engineered for compounding, long-term pipeline.", slug: "seo-organic-growth" },
  { cls: "card-5", icon: MonitorPlay, title: "Paid Media & Creative", description: "Ad campaigns and creative assets built and edited by our in-house design team.", slug: "brand-creative-solutions" },
  { cls: "card-6", icon: Code, title: "Website Design & Development", description: "Build a High-Performing Website That Turns Visitors Into Customers", slug: "custom-web-software" },
  { cls: "card-7", icon: Users, title: "One Accountable Growth Team", description: "Sales, tech and creative under one roof, with no hand-offs between vendors.", slug: "revenue-sales-systems" },
];

const ABOUT_FEATURE_CARDS: FeatureCardItem[] = [
  {
    cls: "card-1",
    icon: Rocket,
    title: "Demand Generation and B2B Sales",
    description:
      "Targeted outreach, pipeline management, and full cycle closing handled by native English speaking consultants trained to run high ticket deals from first touch to signed contract.",
    slug: "b2b-outbound-sales",
  },
  {
    cls: "card-2",
    icon: Workflow,
    title: "CRM Architecture and Workflow Automation",
    description:
      "We design and optimize Salesforce, Zoho, and HubSpot environments, automating lead routing so nothing, and no opportunity, falls through the cracks.",
    slug: "crm-architecture",
  },
  {
    cls: "card-3",
    icon: Database,
    title: "Tech Enabled Operations",
    description:
      "Our in house engineering team builds the backend systems that keep the sales floor fast, data accurate, and scalable as client volume grows.",
    slug: "crm-architecture",
    active: true,
  },
  {
    cls: "card-4",
    icon: Search,
    title: "SEO Sprints and Content Growth",
    description:
      "Technical SEO audits, keyword clustering, and content strategy built to help client brands dominate organic search in competitive global markets.",
    slug: "seo-organic-growth",
  },
  {
    cls: "card-5",
    icon: Palette,
    title: "Brand and Asset Design",
    description:
      "Premium capability statements, pitch decks, and whitepapers that make client brands look, and close, like the market leader they're becoming.",
    slug: "brand-creative-paid-media",
  },
];

const ArrowIcon = (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2483 6.64957L0 6.64957L0 5.25684L16.2483 5.25684V6.64957Z" fill="#0F0B19" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.5522 5.25635C12.2769 5.25635 9.60059 8.13661 9.60059 11.2079V11.9043H10.9933V11.2079C10.9933 8.87605 13.0755 6.64908 15.5522 6.64908H16.2482V5.25635H15.5522Z" fill="#0F0B19" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.5512 6.64802C12.276 6.64802 9.59961 3.76772 9.59961 0.696366V0L10.9923 0V0.696366C10.9923 3.02834 13.0746 5.25529 15.5512 5.25529H16.2472V6.64802H15.5512Z" fill="#0F0B19" />
  </svg>
);

function Card({ card, isStatic = false }: { card: FeatureCardItem; isStatic?: boolean }) {
  return (
    <div className={`feature-card group/feature ${card.cls}${card.active ? " active" : ""} relative! z-[99]! max-w-[340px]! overflow-hidden! rounded-[26px]! border! border-white/24! bg-[#1B1919]! p-[30px]! min-[1700px]:p-10! transition-all! duration-[400ms]! ease-out! before:absolute! before:inset-0! before:rounded-[26px]! before:bg-[var(--theme-color1)]! before:-z-[1]! before:scale-y-0! before:origin-bottom! before:transition-transform! before:duration-500! [&.active]:before:scale-y-100! [&.active]:before:origin-top! motion-reduce:transition-none! ${isStatic ? "flex! flex-col! flex-[0_1_320px]! mb-0!" : "flex! flex-col! w-full! h-full! mx-auto! mb-[30px]!"} ${card.cls === "card-3" ? "min-[1499px]:z-[5]!" : card.cls === "card-2" || card.cls === "card-4" ? "min-[1499px]:z-[2]!" : "min-[1499px]:z-[1]!"}`}>
      <div className="size-[103px]! leading-[103px]! text-center! rounded-full! bg-white/8! group-[.active]/feature:bg-[#121419]! [&>svg]:mb-5! group-hover/feature:[&>svg]:animate-[wobble_1.5s_ease-in-out]!">
        <card.icon size={48} strokeWidth={1} />
      </div>
      <div className={`mt-[35px]! ${isStatic ? "flex! flex-col! flex-1!" : ""}`}>
        <h4 className="mb-[15px]! max-w-[200px]! font-medium! group-[.active]/feature:text-[#0F0B19]!">{card.title}</h4>
        <p className={`text-[#d9d9d9]! group-[.active]/feature:text-[#0F0B19]! ${isStatic ? "flex-1!" : ""}`}>{card.description}</p>
        <Link to={`/service-details/${card.slug}`} className="inline-block! size-[45px]! rounded-full! leading-10! bg-transparent! text-[var(--theme-color1)]! text-center! border! border-[rgba(225,219,209,0.25)]! mt-[30px]! group-[.active]/feature:border-[#0F0B19]! [&>svg]:-rotate-45! [&>svg]:transition-transform! [&>svg]:duration-[400ms]! hover:[&>svg]:rotate-0! [&_path]:fill-[var(--theme-color1)]! group-[.active]/feature:[&_path]:fill-[#090401]!">
          {ArrowIcon}
        </Link>
      </div>
    </div>
  );
}

export interface FeatureSectionProps {
  id?: string;
  variant?: "slider" | "static";
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  cards?: FeatureCardItem[];
  ctaText?: string;
  ctaLink?: string;
}

/**
 * "Our features" section. The homepage renders it as a Swiper carousel
 * (`.feature-slider-home1`); the About page renders 5 capabilities as a
 * static grid inside `.feature-wrapper`.
 */
export default function FeatureSection({
  id,
  variant = "slider",
  eyebrow = "Our Features",
  title,
  description,
  cards,
  ctaText = "More Features",
  ctaLink = "/services",
}: FeatureSectionProps = {}) {
  const isStatic = variant === "static";
  const resolvedTitle =
    title ??
    (isStatic ? (
      <>
        Turning Companies Into <span>Category Leaders</span>
      </>
    ) : (
      <>
        The Complete Engine <br />
        <span>Behind Your Growth</span>
      </>
    ));

  const resolvedDescription =
    description ??
    (isStatic
      ? "Blupeak operates across three pillars: Demand Generation, Digital Infrastructure, and Search and Creative Execution, giving clients one accountable partner instead of a patchwork of vendors."
      : undefined);

  const resolvedCards = cards ?? (isStatic ? ABOUT_FEATURE_CARDS : DEFAULT_SLIDER_CARDS);
  const resolvedId = id ?? (isStatic ? "our-features" : undefined);

  return (
    <section
      id={resolvedId}
      className={`relative! bg-[#131212]! pt-20! min-[992px]:pt-[100px]! min-[1200px]:pt-[130px]! pb-[300px]! max-[575px]:px-3! before:absolute! before:top-[57%]! before:left-1/2! before:size-[455px]! before:bg-[var(--theme-color1)]! before:blur-[127.85px]! before:-translate-x-1/2! before:-translate-y-1/2! before:z-[1]! before:opacity-30! ${isStatic ? "overflow-hidden!" : ""}`}
    >
      <div className="absolute! right-0! top-0! hidden! min-[1400px]:block!">
        <svg width="1920" height="1158" viewBox="0 0 1919 1158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1 110.832C733.864 -37.7086 1154.2 -36.6358 1919 112.217V1146H-1V110.832Z" fill="#D9F45F" />
          <path d="M-1 118.703C733.864 -31.41 1154.2 -31.7253 1919 118.703V1158H-1V118.703Z" fill="#131212" />
        </svg>
      </div>

      <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
        <div className="flex! flex-wrap! -mx-3! justify-center! mb-[60px]!">
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-8/12! min-[992px]:w-9/12!">
            <div className="relative! text-center!">
              <div className="mb-[5px]! [&>svg]:text-[var(--theme-color1)]! [&>svg]:-mt-0.5! [&>svg]:mr-[5px]! [&>span]:text-white! [&>span]:text-sm! [&>span]:font-normal! [&>span]:leading-normal! [&>span]:uppercase!">
                <Star />
                <span>{eyebrow}</span>
              </div>
              <h2 className="text-anim text-white! text-[35px]! leading-[40px]! tracking-[-1.5px]! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]! [&>span]:text-[var(--theme-color1)]! [&>span]:font-normal! [&>span]:italic! [&>span]:font-[family-name:var(--style-font)]!">
                {resolvedTitle}
              </h2>
              {resolvedDescription && (
                <p className="text-anim max-w-[760px]! mx-auto! mt-[18px]! mb-0! text-base! leading-[1.7]! text-[#a0a6a0]! text-center!">
                  {resolvedDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className={`relative! flex! justify-center! ${isStatic ? "flex-wrap! items-stretch! gap-6! mt-10!" : "items-center! flex-wrap! gap-[30px]! mt-0! min-[1500px]:flex-nowrap! min-[1500px]:gap-0! min-[1500px]:mt-[170px]!"}`}>
          {variant === "slider" ? (
            <Swiper
              className="feature-slider-home1 w-full! [&_.swiper-wrapper]:items-stretch! [&_.swiper-slide]:flex! [&_.swiper-slide]:justify-center! [&_.swiper-slide]:items-stretch! [&_.swiper-slide]:h-auto!"
              slidesPerView={5}
              spaceBetween={20}
              speed={600}
              loop
              breakpoints={{
                320: { slidesPerView: 1 },
                520: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                1440: { slidesPerView: 5 },
              }}
            >
              {[...resolvedCards, resolvedCards[0], resolvedCards[1]].map((card, i) => (
                <SwiperSlide key={i}>
                  <Card card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            resolvedCards.map((card, i) => <Card key={i} card={card} isStatic />)
          )}
        </div>
        <div className="relative! z-[99]! max-w-[180px]! mx-auto! mt-0! mb-[-180px]! min-[1500px]:-mt-[60px]! text-center!">
          <Link to={ctaLink} className="group/circle relative! flex! items-center! justify-center! size-[180px]! min-w-[180px]! rounded-full! bg-[#1B1919]! text-[#d9d9d9]! text-base! font-semibold! text-center! mt-[50px]! before:absolute! before:left-1/2! before:top-1/2! before:size-2.5! before:rounded-full! before:bg-[rgba(217,244,95,0.35)]! before:-translate-x-1/2! before:-translate-y-1/2! before:opacity-0! before:transition-all! before:duration-500! hover:before:w-full! hover:before:h-full! hover:before:opacity-100! after:absolute! after:left-1/2! after:top-1/2! after:size-[50px]! after:rounded-full! after:bg-[var(--theme-color1)]! after:-translate-x-1/2! after:-translate-y-1/2! after:opacity-0! after:transition-all! after:duration-[1800ms]! hover:after:w-full! hover:after:h-full! hover:after:opacity-100! wow fadeInUp" data-wow-delay=".5s">
            <span className="relative! z-[9]! group-hover/circle:text-[var(--headings-color)]!">
              <InterfaceIcon name="arrow-right" className="block! text-[22px]! -rotate-45!" /> {ctaText === "More Features" ? (
                <>
                  More <br className="block!" />
                  Features
                </>
              ) : (
                ctaText
              )}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
