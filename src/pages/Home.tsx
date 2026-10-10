import InterfaceIcon from "../components/common/InterfaceIcon";
import { lazy, Suspense, useEffect, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ScrollSmoother } from "../lib/gsap";
import Star from "../components/common/Star";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";
import Footer from "../components/layout/Footer";
import HomeContactForm from "../components/forms/HomeContactForm";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";
import ClientsSection from "../components/sections/ClientsSection";
import HomeServicesList from "../components/sections/HomeServicesList";
import TeamSection from "../components/sections/TeamSection";

const MagicRings = lazy(() => import("../components/common/MagicRings"));

const FAQ_LEFT: AccordionEntry[] = [
  { no: "01.", question: "What services does Blupeak offer?", answer: "We run three pillars in-house: demand generation and full-cycle B2B sales, digital infrastructure and CRM automation, and SEO and creative execution. Everything your growth engine needs sits under one team." },
  { no: "02.", question: "How do you approach a new client engagement?", answer: "We start with a discovery consultation to map your ideal customer, build the outbound and CRM infrastructure around it, then deploy our sales consultants to run the pipeline, with reporting visibility from day one.", wowDelay: ".2s" },
  { no: "03.", question: "What industries do you specialize in?", answer: "We specialize in SaaS, professional services, home services, and healthcare. Our systems are built to adapt to high-ticket B2B sales cycles across sectors.", wowDelay: ".4s" },
  { no: "04.", question: "How long does it take to see results?", answer: "Outbound infrastructure and CRM builds are typically live within the first few weeks, with pipeline momentum building from there. Realistic onboarding and ramp milestones are mapped during discovery.", wowDelay: ".6s" },
];

const FAQ_RIGHT: AccordionEntry[] = [
  { no: "05.", question: "Do you only handle sales, or tech and creative too?", answer: "All three. Blupeak is a unified agency. The same internal team that fills your pipeline also builds your CRM automations and produces your brand and ad creative.", wowDelay: ".2s" },
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
  { stop: "100", start: "0", suffix: "+", label: "Businesses Supported With Growth Strategies" },
  { stop: "500", start: "0", suffix: "+", label: "Marketing Campaigns Strategically Managed", rotate: true },
  { stop: "10", start: "0", suffix: "K+", label: "Qualified Leads Generated Through Campaigns", rotate: true },
  { stop: "95", start: "0", suffix: "%+", label: "Client-Focused Growth & Retention Commitment" },
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
      {/* Hero */}
      <section className="hero-section hero-1 hero-rings">
        <div className="hero-rings-background" aria-hidden="true">
          <Suspense fallback={null}>
            <MagicRings speed={0.65} noiseAmount={0.025} followMouse
              mouseInfluence={0.08} parallax={0.015} hoverScale={1.04} />
          </Suspense>
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="hero-content">
            <div className="sub-title hero-eyebrow"><Star /><span>AI-Accelerated Growth Execution</span></div>
            <h1 className="hero-title">
              Build a Smarter <span>Growth Strategy</span><br />
              With Blupeak Solutions
            </h1>
            <p className="hero-description">Blupeak Solutions builds end-to-end B2B growth engines that turn cold outreach into qualified leads, closed deals, and scalable revenue.</p>
            <div className="hero-actions">
              <Link to="/contact" className="theme-btn btn-style-one"><span className="btn-title">Book a Growth Consultation</span><InterfaceIcon name="arrow-right"  /></Link>
              <Link to="/services" className="hero-secondary-link">See What We Do <InterfaceIcon name="arrow-right"  /></Link>
            </div>
          </div>
          <div className="text-circle">
            <a href="#home-about" onClick={scrollToAbout} className="down-icon" aria-label="Explore About Us">
              <InterfaceIcon name="arrow-down"  />
            </a>
          </div>
        </div>
      </section>

      <AboutSection id="home-about" bodyParagraph="Blupeak Solutions unifies sales, marketing, engineering, SEO and automation into one growth engine built to accelerate revenue." />

      {/* Services */}
      <section className="service-section fix section-padding section-bg">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! mb-[60px]! justify-between!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-8/12!">
              <div className="section-title mb-[0px]!">
                <div className="sub-title text-left">
                  <Star variant="lime" />
                  <span>Our Services</span>
                </div>
                <h2 className="title text-anim">
                  B2B Growth Services Built Around <span>Your Revenue Goals</span>
                </h2>
                <p className="growth-services-intro">
                  End-to-end revenue systems, brand creative, SEO, custom web, and AI automation built and run under one roof.
                </p>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-3/12! wow fadeInUp" data-wow-delay=".3s">
              <div className="circle-area flex! justify-end!">
                <Link to="/services" className="circle-box">
                  <span>
                    More Services
                    <InterfaceIcon name="arrow-right"  />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <HomeServicesList />
          <div className="growth-services-cta">
            <Link to="/contact" className="theme-btn btn-style-one">
              <span className="btn-title">Book a Growth Consultation</span>
              <InterfaceIcon name="arrow-right" aria-hidden="true"  />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
{/*       <section className="work-section">
        <div className="marquee anim-fade-move">
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
        </div>
      </section> */}

      {/* Team Section (Instead of Tech Stack) */}
      <TeamSection
        eyebrow="Our Expert Team"
        title={
          <>
            Meet the Team Behind <span>Your Digital Success</span>
          </>
        }
      />

      <FeatureSection variant="slider" />

      {/* Recognition / Milestones */}
      <section className="award-section1 section-padding">
        <div className="award1-ellipse1">
          <img src="/images/icons/award1-ellipse1.png" alt="img" />
        </div>
        <div className="shape1 hidden! min-[1400px]:block!">
          <img src="/images/icons/shape1-1.png" alt="" />
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! mb-[60px]! justify-between! items-center!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-6/12! min-[992px]:w-8/12!">
              <div className="section-title">
                <div className="sub-title">
                  <Star />
                  <span>Our Foundation</span>
                </div>
                <h2 className="title text-anim">
                  Built on Real Experience, <span>Not Empty Promises</span>
                </h2>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[992px]:w-4/12! wow fadeInUp" data-wow-delay=".3s">
              <p>
                Blupeak is a young agency, but the team behind it isn’t. Here is what actually backs that up.
              </p>
            </div>
          </div>
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! items-end!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-5/12!">
              <div className="flex! flex-col! justify-center! h-full! min-[992px]:px-[24px]!" style={{ minHeight: '300px' }}>
                <h2 style={{ fontSize: 'clamp(80px, 8vw, 120px)', lineHeight: '1', color: '#BAFF39', fontWeight: '800', marginBottom: '16px', letterSpacing: '-2px' }}>6+</h2>
                <h4 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#FFFFFF', fontWeight: '300', lineHeight: '1.2', letterSpacing: '0.5px' }}>
                  Years of combined, <br />hands-on experience
                </h4>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-7/12!">
              <div className="award-list-items-area">
                {[".3s", ".3s", ".5s", ".7s"].map((delay, i) => (
                  <div
                    key={i}
                    className={`award-list-items-items${i === 0 ? " active" : ""}${i === 3 ? " mb-0" : ""} wow fadeInUp`}
                    data-wow-delay={delay}
                  >
                    <div className="content-items">
                      <div className="content">

                        <h4 className="title">
                          {[
                            "6+ years of combined, hands-on experience across our sales, tech and creative team",
                            "A team built from people who have run outbound, closing and CRM systems for growing B2B companies before",
                            "Every project handled by our own in-house specialists, never subcontracted out",
                            "One accountable team covering strategy, execution and reporting for each client, start to finish",
                          ][i]}
                        </h4>
                      </div>
                      <img
                        className="foundation-image"
                        src="/images/resource/about-3-2.jpg"
                        alt="Blupeak team"
                      />
                    </div>
                    <div
                      className="hover-image hidden! min-[768px]:block! bg-cover"
                      style={{ backgroundImage: 'url("/images/resource/about-1-5.jpg")' }}
                    />
                    <Link to="/about" className="arrow-icon">
                      <InterfaceIcon name="arrow-right"  />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* Counters */}
      <section className="counter-section section-padding">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! advance-wrap">
            {COUNTERS.map((c, i) => (
              <div key={i} className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-3/12! min-[992px]:w-3/12! min-[768px]:w-6/12! min-[576px]:w-6/12!">
                <div className={`counter-card-item${c.rotate ? " ratote-2" : ""} advance-item`}>
                  <div className="count-box">
                    <h2 className="title">
                      <span className="count-text" data-speed="3000" data-stop={c.stop}>{c.start}</span>
                      {c.suffix}
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
      <section className="faq-section fix section-bg-3 section-padding pt-[0px]!">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="section-title text-center! mb-[60px]!">
            <div className="sub-title">
              <Star />
              <span>FAQS</span>
            </div>
            <h2 className="title text-anim">
              Have Questions in Your Mind? <br className="hidden! min-[992px]:block!" />
              Get the <span>Answers Now</span>
            </h2>
          </div>
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12!">
              <div className="faq-box-style-1">
                <Accordion items={FAQ_LEFT} defaultOpen={0} />
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12!">
              <div className="faq-box-style-1">
                <Accordion items={FAQ_RIGHT} defaultOpen={-1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="contact-section style-four bg-cover"
        style={{ backgroundImage: 'url("/images/background/contact-bg1-1.jpg")' }}
      >
        <div className="outer-box">
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! justify-between!">
              <div className="content-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[1200px]:w-5/12!">
                <div className="inner-column">
                  <div className="section-title">
                    <div className="sub-title">
                      <Star />
                      <span>Get in touch</span>
                    </div>
                    <h2 className="title text-anim">
                      Success Is a Team Effort. <span>Let’s Achieve It Together</span>
                    </h2>
                  </div>
                  <div className="contact-info wow fadeInUp" data-wow-delay=".3s">
                    <h6 className="email"><a href="mailto:info@blupeaksolutions.com">info@blupeaksolutions.com</a></h6>
                    <h3 className="phone"><a href="tel:01849415421">018-4941-5421</a></h3>
                  </div>
                </div>
              </div>
              <div className="form-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[1200px]:w-6/12!">
                <div className="inner-column">
                  <div className="contact-form wow fadeInUp" data-wow-delay=".5s">
                    <div className="contact-line">
                      <img src="/images/icons/contact-line.png" alt="" />
                    </div>
                    <h3 className="get-title">Get In Touch</h3>
                    <HomeContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Commented out per request */}
      {/*
      <section className="news-section fix section-padding">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="section-title text-center! mb-[60px]!">
            <div className="sub-title">
              <Star variant="lime" />
              <span>Latest News</span>
            </div>
            <h2 className="title text-anim">
              Check Out Latest News, <br className="hidden! min-[992px]:block!" />
              Updates &amp; Articles
            </h2>
          </div>
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6!">
            {NEWS.map((n, i) => (
              <div
                key={i}
                className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[992px]:w-6/12! min-[768px]:w-6/12! wow fadeInUp"
                data-wow-delay={n.delay}
              >
                <div className="news-box-items">
                  <div className="thumb">
                    <img src={`/images/resource/${n.img}`} alt="img" />
                    <img src={`/images/resource/${n.img}`} alt="img" />
                    <span className="user-box">
                      <span>B2B Growth</span> / Blupeak
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <Link to="/blog-details">{n.title}</Link>
                    </h4>
                    <Link to="/blog-details" className="link-btn">
                      Read More <InterfaceIcon name="arrow-right"  />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Final CTA */}
      <section
        className="lets-project-section bg-cover"
        style={{ backgroundImage: 'url("/images/background/cta-bg1-1.jpg")' }}
      >
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="lets-wrapper">
            <h2 className="title text-anim">Let’s Build Your Growth Engine</h2>
            <Link to="/contact" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay=".3s">
              <span className="btn-title">Book a Growth Consultation</span>
              <InterfaceIcon name="arrow-right"  />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
