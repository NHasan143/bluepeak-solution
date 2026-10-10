import { pageClasses } from "../styles/pageUtilities";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Star from "../components/common/Star";
import AboutSection from "../components/sections/AboutSection";
import ClientsSection from "../components/sections/ClientsSection";
import FeatureSection from "../components/sections/FeatureSection";
import { usePageMetadata } from "../hooks/usePageMetadata";

const SERVICES2 = [
  {
    title: "Outbound Demand Generation",
    slug: "b2b-outbound-sales",
    description:
      "Highly targeted cold call and email campaigns designed to reach decision makers and set warm, qualified appointments.",
    delay: ".3s",
    active: true,
  },
  {
    title: "Full Cycle B2B Closing",
    slug: "full-cycle-deal-closing",
    description:
      "Elite sales consultants run discovery calls, handle objections, and close high ticket deals on your behalf, working with the same drive as an in house team.",
    delay: ".5s",
  },
  {
    title: "CRM and Automation Architecture",
    slug: "crm-architecture",
    description:
      "Complex CRM builds and workflow automations that eliminate manual entry and keep your pipeline moving without friction.",
    delay: ".7s",
  },
  {
    title: "SEO and Organic Growth",
    slug: "seo-organic-growth",
    description:
      "Keyword clustering, technical SEO, and content strategy that compounds, built to dominate search rather than just chase rankings.",
    delay: ".3s",
  },
  {
    title: "Digital Advertising and Creative",
    slug: "brand-creative-paid-media",
    description:
      "Paid media management alongside high converting video and graphic creative, produced by our in house design bench.",
    delay: ".5s",
  },
];

export default function About() {
  usePageMetadata(
    "About Blupeak Solutions | Sales, Marketing & Growth Agency",
    "Learn about Blupeak Solutions, a sales, marketing and growth agency helping businesses boost revenue with SEO, automation and proven creative strategies.",
  );

  return (
    <>
      {/* Section 1 & Section 2: Hero / Intro Stats Block & Two Column Feature Highlight */}
      <AboutSection
        id="about-us"
        pageHeader={
          <nav aria-label="Breadcrumb" className="mb-8! text-left! sm:mb-12!">
            <ol className="m-0! flex! list-none! items-center! gap-3! p-0! text-sm!">
              <li>
                <Link to="/" className="text-[#b9beb6]! underline-offset-4! hover:text-[#D9F45F]! hover:underline! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-4!">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} className="text-[#747c6e]!" /></li>
              <li aria-current="page" className="text-[#D9F45F]!">About Us</li>
            </ol>
          </nav>
        }
      />

      {/* Section 3: "Our Features" / Capabilities Grid */}
      <FeatureSection id="our-features" variant="static" />

      {/* Section 4: Trust Band */}
      <ClientsSection heading={false} showObject={false}>
        <div className="relative! text-center! mb-0!">
          <div className="mb-[5px]! [&>svg]:text-[var(--theme-color1)]! [&>svg]:-mt-0.5! [&>svg]:mr-[5px]! [&>span]:text-white! [&>span]:text-sm! [&>span]:font-normal! [&>span]:leading-normal! [&>span]:uppercase!">
            <Star />
            <span>Growth Standards Built for Global Brands</span>
          </div>
          <h2 className="text-anim max-w-[880px]! mx-auto! mt-6! mb-0! text-[clamp(22px,3.2vw,34px)]! leading-[1.45]! font-medium! text-white! tracking-[-1.5px]!">
            Blupeak's team brings 6+ years of combined experience across sales, technology,
            and search, applied in service of every client we work with.
          </h2>
        </div>
      </ClientsSection>

      {/* Section 5: "Our Services" / Services Grid */}
      <section className={pageClasses("service-section-2 fix section-bg section-padding pb-[70px]!")}>
        <div className="service-ellipse">
          <img src="/images/icons/service2-1ellipse.png" alt="img" />
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! items-end!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-7/12!">
              <div className={pageClasses("section-title mb-[0px]!")}>
                <div className="sub-title text-left!">
                  <Star variant="lime" color="#BAFF39" />
                  <span>Our Services</span>
                </div>
                <h2 className={pageClasses("title text-anim")}>
                  Revenue Architecture, <span className="min-[1200px]:block!">Built In House</span>
                </h2>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-5/12!">
              <p className={pageClasses("service-text wow fadeInUp")} data-wow-delay=".3s">
                From first outreach to closed deal to the tech and content that keep the pipeline full,
                Blupeak runs your growth engine as one internal team, not a patchwork of vendors.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto! w-full! max-w-[1760px]! px-[22px]! min-[1200px]:px-[60px]! mt-[80px]!">
          {SERVICES2.map((s, i) => (
            <div
              key={i}
              className={pageClasses(`service-list-style1${s.active ? " active" : ""} wow fadeInUp`)}
              data-wow-delay={s.delay}
            >
              <h4 className={pageClasses("title")}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </h4>

              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Footer Tagline */}
      <Footer padded tagline="Through disciplined execution and in house expertise, Blupeak exists to turn ambitious companies into category leaders." />
    </>
  );
}
