import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import HomeServicesList from "../components/sections/HomeServicesList";
import TextReveal from "../components/common/TextReveal";
import PageEyebrow from "../components/common/PageEyebrow";
import { usePageMetadata } from "../hooks/usePageMetadata";

const focusRing = "focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-4!";

export default function Services() {
  usePageMetadata(
    "Our Services | Blupeak Solutions Sales & Marketing Agency",
    "Explore Blupeak Solutions services: sales strategy, digital marketing, SEO, automation and creative design built to generate leads and grow your revenue.",
  );

  return (
    <>
      <main className="bg-[#000000]! text-white! selection:bg-[#D9F45F]! selection:text-[#111310]!" data-services-page>
        <section
          aria-labelledby="services-title"
          className="mx-auto! max-w-[1424px]! px-5! pt-32! pb-12! sm:px-8! sm:pt-40! sm:pb-16! lg:px-16! lg:pt-44!"
        >
          <nav aria-label="Breadcrumb" className="mb-8! sm:mb-12!">
            <ol className="m-0! flex! list-none! items-center! gap-3! p-0! text-sm!">
              <li>
                <Link to="/" className={`text-[#b9beb6]! underline-offset-4! hover:text-[#D9F45F]! hover:underline! ${focusRing}`}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} className="text-[#747c6e]!" /></li>
              <li aria-current="page" className="text-[#D9F45F]!">Services</li>
            </ol>
          </nav>

          <div className="grid! items-end! gap-8! lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]! lg:gap-16!">
            <div>
              <PageEyebrow>Our Services</PageEyebrow>
              <h1 id="services-title" className="m-0! max-w-[900px]! font-[family-name:var(--heading-font-family)]! text-[35px]! leading-[40px]! font-normal! tracking-[-1.5px]! text-white! text-balance! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!">
                <TextReveal
                  text="B2B Growth Services Built Around Your Revenue Goals"
                  emphasis={{ text: "Your Revenue Goals", className: "font-[family-name:var(--style-font)]! font-normal! text-[#D9F45F]! italic!" }}
                />
              </h1>
            </div>
            <div className="max-w-[42ch]! lg:pb-2!">
              <p className="m-0! text-base! leading-[1.75]! text-[#b9beb6]! sm:text-lg!">
                Three pillars, one in-house team: demand generation, digital infrastructure and
                creative execution, built and run under one roof.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="services-list-title" className="mx-auto! max-w-[1424px]! px-5! pb-16! sm:px-8! sm:pb-24! lg:px-16!">
          <div className="flex! items-center! justify-between! gap-4! pt-6!">
            <h2 id="services-list-title" className="m-0! text-lg! leading-normal! font-medium! tracking-[-0.02em]! text-white! sm:text-xl!">Our Services</h2>
            <span className="text-sm! text-[#b9beb6]!">One in-house team.</span>
          </div>
          <HomeServicesList />

          <div className="mt-12! flex! flex-col! items-start! justify-between! gap-6! rounded-2xl! bg-[#D9F45F]! p-7! sm:mt-16! sm:p-10! lg:flex-row! lg:items-center! lg:p-12!">
            <h2 className="m-0! text-[clamp(2rem,3.5vw,3rem)]! leading-[1.12]! font-semibold! tracking-[-0.035em]! text-[#111310]!">Let’s talk growth.</h2>
            <Link to="/contact" className="inline-flex! min-h-14! w-full! items-center! justify-center! gap-4! rounded-full! bg-[#111310]! px-6! py-4! text-sm! font-semibold! text-[#D9F45F]! transition-colors! hover:bg-[#28321c]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#111310]! focus-visible:outline-offset-4! sm:w-auto! sm:text-base!">
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
