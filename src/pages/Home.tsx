import { pageClasses } from "../styles/pageUtilities";
import InterfaceIcon from "../components/common/InterfaceIcon";
import { lazy, Suspense, useEffect, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ScrollSmoother } from "../lib/gsap";
import Star from "../components/common/Star";
import HeroGrowthText from "../components/common/HeroGrowthText";
import CountUp from "../components/common/CountUp";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";
import Footer from "../components/layout/Footer";
import HomeContactForm from "../components/forms/HomeContactForm";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";
import FoundationSection from "../components/sections/FoundationSection";
import ClientsSection from "../components/sections/ClientsSection";
import HomeServicesList from "../components/sections/HomeServicesList";
import TeamSection from "../components/sections/TeamSection";

const MagicRings = lazy(() => import("../components/common/MagicRings"));

const FAQ_LEFT: AccordionEntry[] = [
  { no: "01.", question: "What services does Blupeak offer?", answer: "We run five pillars in-house: Revenue & Sales Systems, Brand & Creative Solutions, SEO & Organic Growth, Custom Web & Software, and AI & Workflow Automation. Everything your growth engine needs sits under one team." },
  { no: "02.", question: "How do you approach a new client engagement?", answer: "We start with a discovery consultation to map your ideal customer, build the outbound and CRM infrastructure around it, then deploy our sales consultants to run the pipeline, with reporting visibility from day one.", wowDelay: ".2s" },
  { no: "03.", question: "What industries do you specialize in?", answer: "We specialize in SaaS, professional services, home services, and healthcare. Our systems are built to adapt to high-ticket B2B sales cycles across sectors.", wowDelay: ".4s" },
  { no: "04.", question: "How long does it take to see results?", answer: "Outbound infrastructure and CRM builds are typically live within the first few weeks, with pipeline momentum building from there. Realistic onboarding and ramp milestones are mapped during discovery.", wowDelay: ".6s" },
];

const FAQ_RIGHT: AccordionEntry[] = [
  { no: "05.", question: "Do you only handle sales, or tech and creative too?", answer: "Across all five pillars. Blupeak is a unified agency. The same internal team that fills your pipeline also builds your custom web & software, runs your SEO & organic growth, handles AI & workflow automation, and produces your brand and creative assets.", wowDelay: ".2s" },
  { no: "06.", question: "What is your pricing model?", answer: "We offer tailored retainer, performance-based, or hybrid models. We will walk through the right model for your goals during a growth consultation.", wowDelay: ".2s" },
  { no: "07.", question: "Do you offer ongoing support after launch?", answer: "Yes. Our team continuously optimizes outreach, CRM workflows and campaigns after launch rather than handing off and disappearing.", wowDelay: ".4s" },
  { no: "08.", question: "Do you work with startups or only established brands?", answer: "Both. We tailor engagement scope to company stage, from early-stage teams building their first outbound engine to established brands scaling an existing one.", wowDelay: ".6s" },
];

/*
const NEWS = [
  { img: "news1-1.jpg", title: "How to Build a High-Ticket Deal Pipeline Without Hiring In-House", delay: ".3s" },
  { img: "news1-2.jpg", title: "CRM Automation: The Edge B2B Sales Teams Need", delay: ".5s" },
  { img: "news1-3.jpg", title: "Why Full-Cycle Sales Consultants Outperform Cold Outreach Alone", delay: ".7s" },
];
*/

const COUNTERS = [
  { stop: "100", suffix: "+", label: "Businesses Supported With Growth Strategies" },
  { stop: "500", suffix: "+", label: "Marketing Campaigns Strategically Managed" },
  { stop: "10", suffix: "K+", label: "Qualified Leads Generated Through Campaigns" },
  { stop: "95", suffix: "%+", label: "Client-Focused Growth & Retention Commitment" },
];

/* Banner rendering is disabled below; keep its content inactive as well.
const marqueeGroup = (
  <div className="marquee-group">
    <div className="text">B2B GROWTH AGENCY</div>
    <div className="text">REVENUE ARCHITECTURE</div>
    <div className="text">TECH-ENABLED EXECUTION</div>
    <div className="text">DEMAND GENERATION</div>
    <div className="text">FULL-CYCLE CLOSING</div>
    <div className="text">CRM AUTOMATION</div>
  </div>
);
*/

export default function Home() {
  useEffect(() => {
    document.title = "Blupeak Solutions | Sales, Marketing & Growth Agency";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Grow revenue with Blupeak Solutions through sales, marketing, SEO, automation and creative solutions built to accelerate business growth."
      );
    }
  }, []);

  const scrollToAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById("home-about");
    if (!target) return;

    // Native hash jumps can scroll ScrollSmoother's fixed wrapper independently
    // of the document, leaving the hero unreachable when scrolling back up.
    event.preventDefault();
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, smooth, "top 100px");
    } else {
      target.scrollIntoView({ behavior: smooth ? "smooth" : "instant", block: "start" });
    }
  };

  return (
    <>
      <main data-home-page className={pageClasses("home-page pb-10! sm:pb-12!")}>
        {/* Hero */}
        <section className={pageClasses("hero-section hero-1 hero-rings")}>
          <div className={pageClasses("hero-rings-background")} aria-hidden="true">
            <Suspense fallback={null}>
              <MagicRings speed={0.65} noiseAmount={0.025} followMouse
                mouseInfluence={0.08} parallax={0.015} hoverScale={1.04} />
            </Suspense>
          </div>
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="hero-content">
              <div className={pageClasses("sub-title hero-eyebrow")}><Star /><span>AI-Accelerated Growth Execution</span></div>
              <h1 className="hero-title">
                Build a Smarter <HeroGrowthText /><br />
                With Blupeak Solutions
              </h1>
              <p className={pageClasses("hero-description")}>
                Blupeak Solutions builds end-to-end B2B growth engines that turn cold outreach into qualified leads, closed deals, and scalable revenue.
              </p>
              <div className={pageClasses("hero-actions")}>
                <Link to="/contact" className={pageClasses("theme-btn btn-style-one")}>
                  <span className="btn-title">Book a Growth Consultation</span>
                  <InterfaceIcon name="arrow-right" />
                </Link>
                <Link to="/services" className={pageClasses("hero-secondary-link")}>
                  See What We Do <InterfaceIcon name="arrow-right" />
                </Link>
              </div>
            </div>
            <div className="text-circle">
              <a href="#home-about" onClick={scrollToAbout} className="down-icon" aria-label="Explore About Us">
                <InterfaceIcon name="arrow-down" />
              </a>
            </div>
          </div>
        </section>

        <AboutSection
          id="home-about"
          tone="light"
          stat3Label="In House Delivery"
          bodyParagraph="Blupeak Solutions unifies sales, marketing, engineering, SEO and automation into one growth engine built to accelerate revenue."
        />

        {/* Services */}
        <section className={pageClasses("service-section fix section-padding section-bg bg-white! [&_.home-services-showcase]:mt-0!")}>
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! mb-8! sm:mb-10! min-[992px]:mb-[60px]! justify-between!">
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-8/12!">
                <div className={pageClasses("section-title mb-[0px]!")}>
                  <div className="sub-title text-left">
                    <Star variant="coral" />
                    <span>Our Services</span>
                  </div>
                  <h2 className={pageClasses("title text-anim text-[#261d1a]!")}>
                    B2B Growth Services Built Around <span>Your Revenue Goals</span>
                  </h2>
                  <p className={pageClasses("growth-services-intro")}>
                    End-to-end revenue systems, brand creative, SEO, custom web, and AI automation built and run under one roof.
                  </p>
                </div>
              </div>
            </div>

            <HomeServicesList tone="light" />
            <div className={`${pageClasses("growth-services-cta")} max-[767.98px]:justify-center!`}>
              <Link to="/contact" className="inline-flex! min-h-14! items-center! justify-center! gap-3! rounded-full! bg-[var(--theme-color-coral)]! px-8! py-4! text-base! font-semibold! text-[#261d1a]! transition-all! duration-300! hover:bg-[#f24c32]! focus-visible:outline-2! focus-visible:outline-[#064C44]! focus-visible:outline-offset-4!">
                <span>Book a Growth Consultation</span>
                <InterfaceIcon name="arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection tone="light" paginated />

        {/* Feature Section */}
        <FeatureSection
          variant="slider"
          tone="light"
          animateDescription={false}
          description="Blupeak Solutions brings sales, marketing, engineering, SEO, and automation together under one accountable team to build smarter systems, strengthen market presence, and accelerate sustainable business growth."
        />

        {/* Recognition / Milestones */}
        <FoundationSection />

        <ClientsSection tone="light" compact splitHeading />

        {/* Counters */}
        <section className={pageClasses("counter-section section-padding pt-12! sm:pt-16! bg-white!")}>
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! advance-wrap">
              {COUNTERS.map((c, i) => (
                <div key={i} className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-3/12! min-[992px]:w-3/12! min-[768px]:w-6/12! min-[576px]:w-6/12!">
                  <div className={pageClasses("counter-card-item advance-item")}>
                    <div>
                      <h2 className={pageClasses("title")}>
                        <CountUp value={Number(c.stop)} suffix={c.suffix} decimals={c.suffix === "K+" ? 1 : 0} />
                      </h2>
                      <p>{c.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={pageClasses("faq-section fix section-bg-3 section-padding pt-[0px]! bg-white!")}>
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className={pageClasses("section-title text-center! mb-[60px]!")}>
              <div className="sub-title">
                <Star variant="coral" />
                <span>FAQS</span>
              </div>
              <h2 className={pageClasses("title text-anim text-[#261d1a]!")}>
                Have Questions in Your Mind? <br className="hidden! min-[992px]:block!" />
                Get the <span>Answers Now</span>
              </h2>
            </div>
            <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6!">
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12!">
                <div className={pageClasses("faq-box-style-1")}>
                  <Accordion items={FAQ_LEFT} defaultOpen={0} />
                </div>
              </div>
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12!">
                <div className={pageClasses("faq-box-style-1")}>
                  <Accordion items={FAQ_RIGHT} defaultOpen={-1} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={pageClasses("contact-section style-four bg-white! pb-12! sm:pb-16! mb-0!")}>
          <div className="outer-box">
            <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
              <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! justify-between!">
                <div className="content-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[1200px]:w-5/12!">
                  <div className="inner-column">
                    <div className={pageClasses("section-title")}>
                      <div className="sub-title">
                        <Star variant="coral" />
                        <span>Get in touch</span>
                      </div>
                      <h2 className={pageClasses("title text-anim text-[#261d1a]!")}>
                        Success Is a Team Effort. <span>Let’s Achieve It Together</span>
                      </h2>
                    </div>
                    <div className={pageClasses("contact-info wow fadeInUp")} data-wow-delay=".3s">
                      <h6 className="email"><a href="mailto:contact@blupeaksolutions.com">contact@blupeaksolutions.com</a></h6>
                      <h3 className="phone"><a href="tel:01849415421">01849-415421</a></h3>
                    </div>
                  </div>
                </div>
                <div className="form-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[1200px]:w-6/12!">
                  <div className="inner-column">
                    <div className="relative! rounded-[28px]! bg-[#064C44]! p-8! sm:p-12! border! border-[#064C44]/20! shadow-[0_25px_60px_rgba(6,76,68,0.25)]! overflow-hidden! wow fadeInUp" data-wow-delay=".5s">
                      <div className="absolute! top-0! -left-1/3! pointer-events-none! opacity-20!">
                        <img src="/images/icons/contact-line.png" alt="" />
                      </div>
                      <div className="relative! z-10! mb-8!">
                        <span className="block! text-xs! font-bold! uppercase! tracking-[0.14em]! text-[var(--theme-color-coral)]! mb-2!">Let’s Connect</span>
                        <h3 className="m-0! text-[clamp(1.8rem,3vw,2.4rem)]! font-bold! leading-tight! text-white!">Get In Touch</h3>
                        <p className="mt-2! mb-0! text-sm! text-white! leading-relaxed!">Tell us about your project or growth goals. We’ll respond within 24 hours.</p>
                      </div>
                      <HomeContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mx-auto! max-w-[1424px]! px-5! sm:px-8! lg:px-16! max-[767.98px]:hidden!">
          <section data-home-final-cta className="relative! z-[99]! rounded-[28px]! bg-[#064C44]! py-10! sm:py-12! px-6! sm:px-12!">
            <div className="mx-auto! w-full! max-w-[1320px]!">
              <div className="flex! flex-col! items-center! justify-between! gap-6! sm:gap-8! text-center! min-[1280px]:flex-row! min-[1280px]:text-left!">
                <h2 className="m-0! min-w-0! text-[clamp(2rem,3.5vw,3rem)]! font-medium! leading-[1.12]! tracking-[-0.03em]! text-white! text-balance!">
                  Let’s Build Your Growth Engine
                </h2>
                <Link
                  to="/contact"
                  className="inline-flex! min-h-14! w-full! shrink-0! items-center! justify-center! gap-3! rounded-full! bg-[var(--theme-color-coral)]! px-5! py-4! text-base! font-semibold! text-[#261d1a]! transition-all! duration-300! hover:bg-[#f24c32]! focus-visible:outline-2! focus-visible:outline-white! focus-visible:outline-offset-4! sm:w-auto! sm:px-8! wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span>Book a Growth Consultation</span>
                  <InterfaceIcon name="arrow-right" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
