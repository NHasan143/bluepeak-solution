import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import ServicesPageList from "../components/sections/ServicesPageList";
import TextReveal from "../components/common/TextReveal";
import { usePageMetadata } from "../hooks/usePageMetadata";

const focusRing = "focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-white! focus-visible:outline-offset-4!";

export default function Services() {
  usePageMetadata(
    "Our Services | Blupeak Solutions Sales & Marketing Agency",
    "Explore Blupeak Solutions services: sales strategy, digital marketing, SEO, automation and creative design built to generate leads and grow your revenue.",
  );

  return (
    <>
      <main className="bg-white! text-[#261d1a]! selection:bg-[var(--theme-color-coral)]! selection:text-[#261d1a]!" data-services-page>
        <section
          aria-labelledby="services-title"
          className="mx-auto! max-w-[1424px]! px-5! pt-30! pb-8! sm:px-8! sm:pt-32! sm:pb-10! lg:px-16!"
        >
          <h1 id="services-title" className="m-0! max-w-full! font-[family-name:var(--heading-font-family)]! text-[35px]! leading-[40px]! font-normal! tracking-[-0.03em]! text-[#261d1a]! text-balance! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[clamp(36px,5.2vw,60px)]! min-[768px]:leading-[1.1]!">
            <TextReveal
              text="B2B Growth Services Built Around our Revenue Goals"
              className="min-[768px]:whitespace-nowrap!"
              lineBreakBefore="our Revenue Goals"
              emphasis={{ text: "our Revenue Goals", className: "font-[family-name:var(--style-font)]! font-normal! text-[#FF593E]! italic!" }}
            />
          </h1>
        </section>

        <section aria-labelledby="services-list-title" className="mx-auto! max-w-[1424px]! px-5! pb-10! sm:px-8! sm:pb-12! lg:px-16!">
          <div className="flex! items-center! justify-between! gap-4! pt-6!">
            <h2 id="services-list-title" className="m-0! font-[family-name:var(--heading-font-family)]! text-lg! leading-normal! font-medium! tracking-[-0.02em]! text-[#261d1a]! sm:text-xl!">Our Services</h2>
            <span className="text-sm! text-[#66544e]!">One in-house team.</span>
          </div>
          <ServicesPageList />

          <div className="mt-10! flex! flex-col! items-start! justify-between! gap-5! rounded-2xl! bg-[#064C44]! p-5! md:mt-16! md:gap-6! md:p-10! lg:flex-row! lg:items-center! lg:p-12!">
            <h2 className="m-0! font-[family-name:var(--heading-font-family)]! text-[28px]! md:text-[clamp(2rem,3.5vw,3rem)]! leading-[1.12]! font-normal! tracking-[-0.03em]! text-white!">Let’s talk growth.</h2>
            <Link to="/contact" className={`relative! z-10! inline-flex! min-h-12! w-full! items-center! justify-center! gap-2! rounded-full! bg-[var(--theme-color-coral)]! px-3! py-3! text-xs! leading-6! whitespace-nowrap! min-[370px]:text-sm! md:min-h-14! md:gap-4! md:px-6! md:py-4! md:text-base! font-semibold! text-[#261d1a]! text-center! cursor-pointer! transition-colors! duration-300! hover:bg-[#f24c32]! motion-reduce:transition-none! md:w-auto! ${focusRing}`}>
              Book a Growth Consultation
              <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" className="size-4! shrink-0! md:size-5!" />
            </Link>
          </div>
        </section>
      </main>
      <Footer padded />
    </>
  );
}
