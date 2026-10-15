import { useState } from "react";
import { ArrowRight, Check, ChevronRight, Minus, Phone, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
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

const SLIDER = [0, 1, 2];

const FAQ_ANSWER =
  "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.";

const FAQ = [
  { no: "01.", question: "Is my technology allowed on tech?", answer: FAQ_ANSWER },
  { no: "02.", question: "How to soft launch your business?", answer: FAQ_ANSWER },
  { no: "03.", question: "How to turn visitors into contributors", answer: FAQ_ANSWER },
  { no: "04.", question: "How can i find my solutions?", answer: FAQ_ANSWER },
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

  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const image = imageForService(service.slug);
  const bounds = SERVICE_IMAGE_BOUNDS[service.slug];

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
            Services
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
                  Our Services
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
                {/* Header row: Primary Lockup Logo + Badge */}
                <div className="flex! items-center! justify-between! gap-3! pb-1!">
                  <img
                    src="/images/blupeak-dark-full.png"
                    alt="Blupeak Solutions"
                    className="w-[160px]! sm:w-[175px]! h-[32px]! sm:h-[35px]! object-cover! object-center!"
                  />
                  <span className="inline-flex! shrink-0! items-center! gap-1.5! rounded-full! border! border-[#064C44]/15! bg-[#064C44]/5! px-2.5! py-1! text-[11px]! font-bold! uppercase! tracking-[0.08em]! text-[#064C44]!">
                    <span className="size-1.5! rounded-full! bg-[var(--theme-color-coral)]!" aria-hidden="true" />
                    In-House
                  </span>
                </div>

                {/* Heading taking proper full width */}
                <h3 className="mt-5! mb-2! font-[family-name:var(--heading-font-family)]! text-[22px]! sm:text-[24px]! leading-[1.3]! font-medium! tracking-[-0.02em]! text-[#261d1a]!">
                  Contact with us for any advice
                </h3>

                <p className="m-0! text-sm! leading-[1.65]! text-[#66544e]!">
                  Get in touch with our specialists for direct guidance on scaling your revenue engine.
                </p>

                {/* Direct Phone Line - Clickable Card */}
                <a
                  href="tel:01849415421"
                  aria-label="Call 01849-415421"
                  className={`group/phone mt-5! flex! items-center! gap-4! rounded-xl! border! border-[#eaded9]! bg-white! p-4! transition-all! duration-200! hover:border-[#064C44]/40! hover:shadow-sm! no-underline! text-inherit! ${focusRing}`}
                >
                  <div className="flex! size-12! shrink-0! items-center! justify-center! rounded-full! border! border-[#064C44]/15! bg-[#064C44]/10! text-[#064C44]! group-hover/phone:bg-[#064C44]! group-hover/phone:text-white! transition-colors! duration-200!">
                    <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0!">
                    <span className="block! text-[11px]! font-bold! uppercase! tracking-[0.08em]! text-[#66544e]!">
                      Need help? Talk to an expert
                    </span>
                    <span className="block! text-lg! sm:text-xl! font-bold! tracking-tight! text-[#261d1a]! transition-colors! duration-200! group-hover/phone:text-[var(--theme-color-coral)]!">
                      01849-415421
                    </span>
                  </div>
                </a>

                {/* Consultation CTA Button */}
                <Link
                  to="/contact"
                  className={`mt-4! inline-flex! min-h-12! w-full! items-center! justify-center! gap-3! rounded-full! bg-[var(--theme-color-coral)]! px-5! py-3.5! text-sm! sm:text-base! font-semibold! text-[#261d1a]! text-center! transition-colors! duration-200! hover:bg-[#f24c32]! ${focusRing}`}
                >
                  <span>Contact Us</span>
                  <ArrowRight size={18} strokeWidth={2} aria-hidden="true" className="shrink-0!" />
                </Link>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="order-1! lg:order-2! lg:col-span-8! space-y-10!">
              {/* Featured Service Artwork Card */}
              {image && bounds && (
                <div className="relative! overflow-hidden! rounded-2xl! bg-[#064C44]! p-6! sm:p-8! text-white! shadow-sm!">
                  <div className="grid! grid-cols-1! md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]! gap-6! items-center!">
                    <div className="min-w-0!">
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
                <h3
                  id="included-title"
                  className="m-0! font-[family-name:var(--heading-font-family)]! text-2xl! sm:text-3xl! font-medium! tracking-[-0.02em]! text-[#261d1a]!"
                >
                  What&apos;s included
                </h3>

                <ul className="m-0! list-none! p-0! space-y-3!">
                  {service.included.map((item) => (
                    <li
                      key={item}
                      className="group! flex! items-start! gap-4! rounded-xl! border! border-[#eaded9]! bg-[#faf8f7]! p-4! sm:p-5! transition-all! duration-200! hover:border-[#064C44]/30! hover:bg-white! hover:shadow-sm!"
                    >
                      <span className="flex! size-8! shrink-0! items-center! justify-center! rounded-full! bg-[#064C44]/10! text-[#064C44]! transition-colors! duration-200! group-hover:bg-[#064C44]! group-hover:text-white! mt-0.5!">
                        <Check size={16} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm! sm:text-base! font-medium! leading-snug! text-[#261d1a]!">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Outcome Blockquote */}
                <blockquote className="relative! overflow-hidden! rounded-2xl! border! border-[#064C44]/20! bg-[#064C44]/5! p-6! sm:p-8! pl-7! sm:pl-9! mt-6!">
                  <span className="absolute! left-0! top-0! bottom-0! w-1.5! bg-[#064C44]!" aria-hidden="true" />
                  <p className="m-0! font-[family-name:var(--style-font)]! text-lg! sm:text-xl! font-normal! italic! leading-[1.6]! text-[#261d1a]!">
                    {service.outcome}
                  </p>
                </blockquote>
              </section>

              {/* Project Slider (Original Swiper from template, styled light) */}
              <section aria-label="Project slider" className="mt-8!">
                <Swiper
                  className="project-image-slider rounded-2xl! overflow-hidden!"
                  slidesPerView={2}
                  spaceBetween={24}
                  speed={600}
                  loop
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 2 },
                  }}
                >
                  {SLIDER.map((i) => (
                    <SwiperSlide key={i}>
                      <div className="rounded-xl! border! border-[#eaded9]! bg-[#faf8f7]! p-6! h-full!">
                        <p className="m-0! text-sm! sm:text-base! leading-relaxed! text-[#66544e]!">
                          Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur
                          temporibus doloribus hic conse quatur copy typing refreshing
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>

              {/* Frequently Asked Question (Original template section, styled light) */}
              <section aria-labelledby="service-faq-title" className="space-y-4! pt-4!">
                <h3
                  id="service-faq-title"
                  className="m-0! font-[family-name:var(--heading-font-family)]! text-2xl! sm:text-3xl! font-medium! tracking-[-0.02em]! text-[#261d1a]!"
                >
                  Frequently Asked Question
                </h3>
                <p className="mt-1! mb-5! text-sm! sm:text-base! leading-relaxed! text-[#66544e]!">
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est
                  qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>

                <div className="space-y-3!">
                  {FAQ.map((faq, index) => {
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
                              {faq.no}
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

          {/* Bottom Full-Width CTA Banner */}
          <div className="mt-14! flex! flex-col! items-start! justify-between! gap-6! rounded-2xl! bg-[#064C44]! p-7! sm:mt-20! sm:p-10! lg:flex-row! lg:items-center! lg:p-12! shadow-md!">
            <div className="min-w-0!">
              <h2 className="m-0! font-[family-name:var(--heading-font-family)]! text-[clamp(1.75rem,3vw,2.5rem)]! leading-[1.2]! font-normal! tracking-[-0.03em]! text-white!">
                Let’s talk growth.
              </h2>
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
