import { pageClasses } from "../styles/pageUtilities";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageEyebrow from "../components/common/PageEyebrow";
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
      <main className="bg-[#000000]! text-white! selection:bg-[#D9F45F]! selection:text-[#111310]!" data-team-page>
        <section aria-labelledby="team-title" className="mx-auto! max-w-[1424px]! px-5! pt-32! pb-12! sm:px-8! sm:pt-40! sm:pb-16! lg:px-16! lg:pt-44!">
          <nav aria-label="Breadcrumb" className="mb-8! sm:mb-12!">
            <ol className="m-0! flex! list-none! items-center! gap-3! p-0! text-sm!">
              <li>
                <Link to="/" className="text-[#b9beb6]! underline-offset-4! hover:text-[#D9F45F]! hover:underline! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-4!">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} className="text-[#747c6e]!" /></li>
              <li aria-current="page" className="text-[#D9F45F]!">Team</li>
            </ol>
          </nav>
          <PageEyebrow>Our Expert Team</PageEyebrow>
          <h1 id="team-title" className="m-0! max-w-[900px]! font-[family-name:var(--heading-font-family)]! text-[35px]! leading-[40px]! font-normal! tracking-[-1.5px]! text-white! text-balance! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!">
            <TextReveal
              text="Meet the Blupeak Solutions Team Driving Your Business Growth"
              emphasis={{ text: "Your Business Growth", className: "font-[family-name:var(--style-font)]! font-normal! text-[#D9F45F]! italic!" }}
            />
          </h1>
        </section>

        <TeamSection showHeading={false} className={pageClasses("team-section-five section-padding pt-0! pb-[0px]!")} />
      </main>

      <Footer padded />
    </>
  );
}
