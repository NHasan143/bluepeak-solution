import { pageClasses } from "../styles/pageUtilities";
import TextReveal from "../components/common/TextReveal";
import Footer from "../components/layout/Footer";
import TeamSection from "../components/sections/TeamSection";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function Team() {
  usePageMetadata(
    "Meet Our Team | Blupeak Solutions Sales & Marketing Experts",
    "Meet the Blupeak Solutions team of sales, marketing, SEO, software and automation specialists dedicated to helping your business grow and succeed online.",
  );

  return (
    <>
      <main className="bg-white! text-[#261d1a]! selection:bg-[var(--theme-color-coral)]! selection:text-[#261d1a]!" data-team-page>
        <section aria-labelledby="team-title" className="mx-auto! max-w-[1424px]! px-5! pt-30! pb-12! sm:px-8! sm:pt-32! sm:pb-16! lg:px-16!">
          <h1 id="team-title" className="m-0! max-w-full! font-[family-name:var(--heading-font-family)]! text-[35px]! leading-[40px]! font-normal! tracking-[-0.03em]! text-[#261d1a]! text-balance! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[clamp(36px,4.2vw,60px)]! min-[768px]:leading-[1.1]!">
            <TextReveal
              text="Meet the Blupeak Solutions Team Driving Your Business Growth"
              className="min-[768px]:whitespace-nowrap!"
              lineBreakBefore="Your Business Growth"
              emphasis={{ text: "Your Business Growth", className: "font-[family-name:var(--style-font)]! font-normal! text-[#FF593E]! italic!" }}
            />
          </h1>
        </section>

        <TeamSection tone="light" showHeading={false} className={pageClasses("team-section-five section-padding pt-0! pb-4! sm:pb-6! [&_[data-team-member]]:pb-4! sm:[&_[data-team-member]]:pb-6!")} />
      </main>

      <Footer padded />
    </>
  );
}
