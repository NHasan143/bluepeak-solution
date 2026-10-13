import { pageClasses } from "../../styles/pageUtilities";
import InterfaceIcon from "../common/InterfaceIcon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "../common/Star";
import { Send, Handshake, Database, ChartNoAxesCombined, Clapperboard, CodeXml, UsersRound, Workflow, Search, Palette, Rocket, ArrowUpRight, type LucideIcon } from "lucide-react";

export interface FeatureCardItem {
  cls: string;
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const DEFAULT_SLIDER_CARDS: FeatureCardItem[] = [
  { cls: "card-1", icon: Send, title: "Outbound Sales Infrastructure", description: "Multi-channel outreach systems built to consistently fill your pipeline with qualified decision-makers.", slug: "b2b-outbound-sales" },
  { cls: "card-2", icon: Handshake, title: "Full-Cycle Deal Closing", description: "In-house consultants who own the sales conversation from first call to signed contract.", slug: "full-cycle-deal-closing" },
  { cls: "card-3", icon: Workflow, title: "CRM Architecture & Automation", description: "Purpose-built systems that remove manual work and keep every lead moving.", slug: "crm-architecture" },
  { cls: "card-4", icon: ChartNoAxesCombined, title: "SEO & Content Growth", description: "Organic strategies engineered for compounding, long-term pipeline.", slug: "seo-organic-growth" },
  { cls: "card-5", icon: Clapperboard, title: "Paid Media & Creative", description: "Ad campaigns and creative assets built and edited by our in-house design team.", slug: "brand-creative-solutions" },
  { cls: "card-6", icon: CodeXml, title: "Website Design & Development", description: "Build a High-Performing Website That Turns Visitors Into Customers", slug: "custom-web-software" },
  { cls: "card-7", icon: UsersRound, title: "One Accountable Growth Team", description: "Sales, tech and creative under one roof, with no hand-offs between vendors.", slug: "revenue-sales-systems" },
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

function Card({ card, isStatic = false, tone = "dark" }: { card: FeatureCardItem; isStatic?: boolean; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <div
      className={`feature-card group/feature ${card.cls} relative! isolate! z-[99]! flex! flex-col! max-w-[340px]! overflow-hidden! rounded-2xl! border! ${light ? "border-solid! border-[#eaded9]! bg-[#faf8f7]!" : "border-white/12! bg-[#1B1919]!"} px-[30px]! py-6! min-[1700px]:px-10! min-[1700px]:py-8! transition-[translate,box-shadow,border-color]! duration-300! ease-[cubic-bezier(0.16,1,0.3,1)]! hover:border-[var(--theme-color-coral)]! focus-within:border-[var(--theme-color-coral)]! motion-safe:hover:-translate-y-1! ${light ? "hover:shadow-[0_12px_24px_rgba(38,29,26,0.08)]! focus-within:shadow-[0_12px_24px_rgba(38,29,26,0.08)]!" : "hover:shadow-[0_12px_24px_rgba(0,0,0,0.32)]! focus-within:shadow-[0_12px_24px_rgba(0,0,0,0.32)]!"} motion-safe:focus-within:-translate-y-1! motion-reduce:translate-y-0! motion-reduce:transition-none! ${isStatic ? "flex-[0_1_320px]! mb-0!" : "w-full! h-full! mx-auto! mb-[30px]!"}`}
    >
      <div className={`feature-icon relative! z-[1]! grid! size-[72px]! shrink-0! place-items-center! rounded-2xl! border! border-[rgba(255,89,62,0.22)]! ${light ? "bg-[#fff1ed]!" : "bg-[#241c1a]!"} text-[var(--theme-color-coral)]!`} aria-hidden="true">
        <card.icon size={32} strokeWidth={1.75} />
      </div>
      <div className="relative! z-[1]! mt-6! flex! flex-col! flex-1! min-w-0!">
        <h4 className={`mb-3! max-w-[200px]! font-medium! ${light ? "text-[#261d1a]!" : "text-white!"}`}>{card.title}</h4>
        <p className={`m-0! flex-1! ${light ? "text-[#66544e]!" : "text-[#d9d9d9]!"}`}>{card.description}</p>
        <div className={`mt-5! pt-3! border-t! ${light ? "border-[#eaded9]!" : "border-white/10!"}`}>
          <Link to={`/services/${card.slug}`} aria-label={`Explore ${card.title}`} className={`flex! items-center! justify-between! gap-4! min-h-11! text-sm! font-medium! ${light ? "text-[#261d1a]!" : "text-white!"} rounded-sm! focus-visible:outline-2! focus-visible:outline-[var(--theme-color-coral)]! focus-visible:outline-offset-4!`}>
            <span>Explore service</span>
            <ArrowUpRight size={20} strokeWidth={1.75} className="shrink-0! text-[var(--theme-color-coral)]!" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface FeatureSectionProps {
  id?: string;
  variant?: "slider" | "static";
  tone?: "dark" | "light";
  eyebrow?: string;
  title?: React.ReactNode;
  animateTitle?: boolean;
  animateDescription?: boolean;
  showEyebrow?: boolean;
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
  tone = "dark",
  eyebrow = "Our Features",
  title,
  animateTitle = true,
  animateDescription = true,
  showEyebrow = true,
  description,
  cards,
  ctaText = "More Features",
  ctaLink = "/services",
}: FeatureSectionProps = {}) {
  const isStatic = variant === "static";
  const light = tone === "light";
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
      className={`relative! ${light ? "bg-white!" : "bg-[#131212]!"} pt-20! min-[992px]:pt-[100px]! min-[1200px]:pt-[130px]! pb-[300px]! max-[575px]:px-3! before:absolute! before:top-[57%]! before:left-1/2! before:size-[455px]! before:bg-[var(--theme-color1)]! before:blur-[127.85px]! before:-translate-x-1/2! before:-translate-y-1/2! before:z-[1]! ${light ? "before:opacity-10!" : "before:opacity-30!"} ${isStatic ? "overflow-hidden!" : ""}`}
    >
      <div className="absolute! right-0! top-0! hidden! min-[1400px]:block!">
        <svg width="1920" height="1158" viewBox="0 0 1919 1158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1 110.832C733.864 -37.7086 1154.2 -36.6358 1919 112.217V1146H-1V110.832Z" fill="#064C44" />
          <path d="M-1 118.703C733.864 -31.41 1154.2 -31.7253 1919 118.703V1158H-1V118.703Z" fill={light ? "#ffffff" : "#131212"} />
        </svg>
      </div>

      <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
        <div className="flex! flex-wrap! -mx-3! justify-center! mb-[60px]!">
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-8/12! min-[992px]:w-9/12!">
            <div className="relative! text-center!">
              {showEyebrow && <div className="mb-[5px]! [&>svg]:text-[#FF593E]! [&>svg]:-mt-0.5! [&>svg]:mr-[5px]! [&>span]:text-white! [&>span]:text-sm! [&>span]:font-normal! [&>span]:leading-normal! [&>span]:uppercase!">
                <Star />
                <span className={light ? "text-[#66544e]!" : "text-white!"}>{eyebrow}</span>
              </div>}
              <h2 className={`${animateTitle ? "text-anim " : ""}${light ? "text-[#261d1a]!" : "text-white!"} text-[35px]! leading-[40px]! tracking-[-1.5px]! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]! [&>span]:text-[#FF593E]! [&>span]:font-normal! [&>span]:italic! [&>span]:font-[family-name:var(--style-font)]!`}>
                {resolvedTitle}
              </h2>
              {resolvedDescription && (
                <p className={`${animateDescription ? "text-anim " : ""}max-w-[760px]! mx-auto! mt-[18px]! mb-0! text-base! leading-[1.7]! ${light ? "text-[#66544e]!" : "text-[#a0a6a0]!"} text-center!`}>
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
              className="feature-slider-home1 w-full! box-border! px-3! py-6! min-[576px]:px-4! [&_.swiper-wrapper]:items-stretch! [&_.swiper-slide]:flex! [&_.swiper-slide]:justify-center! [&_.swiper-slide]:items-stretch! [&_.swiper-slide]:h-auto!"
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
              {resolvedCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <Card card={card} tone={tone} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            resolvedCards.map((card, i) => <Card key={i} card={card} isStatic tone={tone} />)
          )}
        </div>
        <div className="relative! z-[99]! max-w-[180px]! mx-auto! mt-0! mb-[-180px]! min-[1500px]:-mt-[60px]! text-center!">
          <Link to={ctaLink} className={pageClasses(`group/circle relative! flex! items-center! justify-center! size-[180px]! min-w-[180px]! rounded-full! ${light ? "bg-[#faf8f7]! border! border-[#eaded9]! text-[#261d1a]!" : "bg-[#1B1919]! text-[#d9d9d9]!"} text-base! font-semibold! text-center! mt-[50px]! before:absolute! before:left-1/2! before:top-1/2! before:size-2.5! before:rounded-full! before:bg-[rgba(255,89,62,0.35)]! before:-translate-x-1/2! before:-translate-y-1/2! before:opacity-0! before:transition-all! before:duration-500! hover:before:w-full! hover:before:h-full! hover:before:opacity-100! after:absolute! after:left-1/2! after:top-1/2! after:size-[50px]! after:rounded-full! after:bg-[#064C44]! after:-translate-x-1/2! after:-translate-y-1/2! after:opacity-0! after:transition-all! after:duration-[1800ms]! hover:after:w-full! hover:after:h-full! hover:after:opacity-100! wow fadeInUp`)} data-wow-delay=".5s">
            <span className="relative! z-[9]! group-hover/circle:text-white!">
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
