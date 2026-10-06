import { lazy, Suspense, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ScrollSmoother } from "../lib/gsap";
import Star from "../components/common/Star";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";
import Footer from "../components/layout/Footer";
import HomeContactForm from "../components/forms/HomeContactForm";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";
import ClientsSection from "../components/sections/ClientsSection";
import ServiceList from "../components/sections/ServiceList";

const MagicRings = lazy(() => import("../components/common/MagicRings"));

const FAQ_LEFT: AccordionEntry[] = [
  { no: "01.", question: "What services does Blupeak offer?", answer: "We run three pillars in-house: demand generation and full-cycle B2B sales, digital infrastructure and CRM automation, and SEO and creative execution. Everything your growth engine needs sits under one team." },
  { no: "02.", question: "How do you approach a new client engagement?", answer: "We start with a discovery consultation to map your ideal customer, build the outbound and CRM infrastructure around it, then deploy our sales consultants to run the pipeline, with reporting visibility from day one.", wowDelay: ".2s" },
  { no: "03.", question: "What industries do you specialize in?", answer: "Our systems are built to adapt to high-ticket B2B sales cycles across sectors, including SaaS, professional services, home services and healthcare.", wowDelay: ".4s" },
  { no: "04.", question: "How long does it take to see results?", answer: "Outbound infrastructure and CRM builds are typically live within the first few weeks, with pipeline momentum building from there. We will set a realistic onboarding and ramp timeline during your consultation.", wowDelay: ".6s" },
];

const FAQ_RIGHT: AccordionEntry[] = [
  { no: "05.", question: "Do you only handle sales, or tech and creative too?", answer: "All three. Blupeak is a unified agency. The same internal team that fills your pipeline also builds your CRM automations and produces your brand and ad creative.", wowDelay: ".2s" },
  { no: "06.", question: "What is your pricing model?", answer: "We will walk through the right retainer, performance-based or hybrid model for your goals during a growth consultation.", wowDelay: ".2s" },
  { no: "07.", question: "Do you offer ongoing support after launch?", answer: "Yes. Our team continuously optimizes outreach, CRM workflows and campaigns after launch rather than handing off and disappearing.", wowDelay: ".4s" },
  { no: "08.", question: "Do you work with startups or only established brands?", answer: "Both. We tailor engagement scope to company stage, from early-stage teams building their first outbound engine to established brands scaling an existing one.", wowDelay: ".6s" },
];

const SKILLS = [
  { icon: "wa-sketch.png", count: "CRM", title: "Salesforce" },
  { icon: "wa-photoshop.png", count: "CRM", title: "HubSpot", delay: ".2s" },
  { icon: "wa-figma.png", count: "CRM", title: "Zoho", delay: ".4s", active: true },
  { icon: "wa-invision.png", count: "OUTBOUND", title: "Outreach & Dialers", delay: ".6s" },
  { icon: "wa-xd.png", count: "AUTOMATION", title: "Zapier & Make", delay: ".8s" },
  { icon: "wa-Illustration.png", count: "VISIBILITY", title: "Analytics Dashboards", delay: ".9s" },
];

const NEWS = [
  { img: "news1-1.jpg", title: "How to Build a High-Ticket Deal Pipeline Without Hiring In-House", delay: ".3s" },
  { img: "news1-2.jpg", title: "CRM Automation: The Edge B2B Sales Teams Need", delay: ".5s" },
  { img: "news1-3.jpg", title: "Why Full-Cycle Sales Consultants Outperform Cold Outreach Alone", delay: ".7s" },
];

const COUNTERS = [
  { stop: "6", start: "6", suffix: "+", label: "Combined Team Experience" },
  { stop: "3", start: "3", suffix: "", label: "Core Growth Pillars, One Team", rotate: true },
  { stop: "100", start: "100", suffix: "%", label: "In-House Execution", rotate: true },
  { stop: "0", start: "Global", suffix: "", label: "Clients Welcome, No Region Restriction" },
];

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

export default function Home() {
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
        <div className="container">
          <div className="hero-content">
            <div className="sub-title hero-eyebrow"><Star /><span>AI-Accelerated Growth Execution</span></div>
            <h1 className="hero-title">
              Build Your <span>Revenue Engine</span><br />
              With Blupeak Solutions
            </h1>
            <p className="hero-description">Blupeak Solutions is the tech-enabled B2B growth agency behind the sales, marketing and digital infrastructure of fast-scaling companies around the world. From the first cold outreach to the closed deal, our in-house team runs your revenue engine end to end, so you get agency-level results without building an internal team from scratch.</p>
            <div className="hero-actions">
              <Link to="/contact" className="theme-btn btn-style-one"><span className="btn-title">Book a Growth Consultation</span><i className="fa-solid fa-arrow-right" /></Link>
              <Link to="/services" className="hero-secondary-link">See What We Do <i className="fa-solid fa-arrow-right" /></Link>
            </div>
          </div>
          <div className="text-circle">
            <a href="#home-about" onClick={scrollToAbout} className="down-icon" aria-label="Explore About Us">
              <i className="fa-regular fa-arrow-down-long" />
            </a>
          </div>
        </div>
      </section>

      <AboutSection id="home-about" />

      {/* Services */}
      <section className="service-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-4 mb-60 justify-content-between">
            <div className="col-lg-8">
              <div className="section-title mb-0">
                <div className="sub-title text-left">
                  <Star variant="lime" />
                  <span>Our Service</span>
                </div>
                <h2 className="title text-anim">
                  We craft user-focused digital experiences <span>that elevate brands</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
              <div className="circle-area d-flex justify-content-end">
                <a href="#" className="circle-box">
                  <span>
                    More Services
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* Work / Marquee + Skills */}
      <section className="work-section">
        <div className="marquee anim-fade-move">
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
          {marqueeGroup}
        </div>

        <div className="skills-section section-padding pb-90">
          <div className="vec-shape d-none d-xxl-block">
            <img src="/images/icons/skill-shape1-1.png" alt="img" />
          </div>
          <div className="large-container">
            <div className="section-title text-center tech-stack-heading">
              <div className="sub-title"><Star /><span>Our Tech Stack</span></div>
              <h2 className="title text-anim">The Platforms Powering <span>Our Growth Execution</span></h2>
            </div>
            <div className="outer-box">
              <div className="row gx-50">
                {SKILLS.map((s, i) => (
                  <div
                    key={i}
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay={s.delay}
                  >
                    <div className="work-block work-block-active">
                      <div className={`inner-box${s.active ? " active" : ""}`}>
                        <span className="icon">
                          <img src={`/images/resource/${s.icon}`} alt="" />
                        </span>
                        <span className="count">{s.count}</span>
                        <h4 className="title">{s.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection variant="slider" />

      {/* Recognition / Milestones */}
      <section className="award-section1 section-padding">
        <div className="award1-ellipse1">
          <img src="/images/icons/award1-ellipse1.png" alt="img" />
        </div>
        <div className="shape1 d-none d-xxl-block">
          <img src="/images/icons/shape1-1.png" alt="" />
        </div>
        <div className="container">
          <div className="row g-4 mb-60 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-8">
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
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <p>
                Blupeak is a young agency, but the team behind it is not. Here is what actually backs up our work.
              </p>
            </div>
          </div>
          <div className="row g-4 align-items-end">
            <div className="col-lg-5">
              <div className="award-image1 text-center milestone-highlight">
                <strong>6+</strong>
                <span>years of combined,<br />hands-on experience</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="award-list-items-area">
                {[".3s", ".3s", ".5s", ".7s"].map((delay, i) => (
                  <div
                    key={i}
                    className={`award-list-items-items${i === 0 ? " active" : ""}${i === 3 ? " mb-0" : ""} wow fadeInUp`}
                    data-wow-delay={delay}
                  >
                    <div className="content-items">
                      <div className="content">
                        <h6>
                          {i === 0 ? "01" : `0${i + 1}`} <span>WHY IT MATTERS</span>
                        </h6>
                        <h4 className="title">{["Experienced specialists behind the agency.", "A team that has run real B2B growth systems.", "Every project handled in-house.", "Strategy, execution and reporting under one roof."][i]}</h4>
                      </div>
                      <span className="year">/ BLUPEAK</span>
                    </div>
                    <div
                      className="hover-image d-none d-md-block bg-cover"
                      style={{ backgroundImage: 'url("/images/resource/about-1-5.jpg")' }}
                    />
                    <Link to="/about" className="arrow-icon">
                      <i className="fa-solid fa-arrow-right" />
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
        <div className="container">
          <div className="row g-4 advance-wrap">
            {COUNTERS.map((c, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`counter-card-item${c.rotate ? " ratote-2" : ""} advance-item`}>
                  <div className="count-box">
                    <h2 className="title">
                      {c.start === "Global" ? c.start : <span className="count-text" data-speed="3000" data-stop={c.stop}>{c.start}</span>}
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
      <section className="faq-section fix section-bg-3 section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-60">
            <div className="sub-title">
              <Star />
              <span>FAQS</span>
            </div>
            <h2 className="title text-anim">
              Have Questions in Your Mind? <br className="d-none d-lg-block" />
              Get the <span>Answers Now</span>
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-box-style-1">
                <Accordion items={FAQ_LEFT} defaultOpen={0} />
              </div>
            </div>
            <div className="col-lg-6">
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
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="content-column col-lg-6 col-xl-5">
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
              <div className="form-column col-lg-6 col-xl-6">
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

      {/* News */}
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-30">
            <div className="sub-title">
              <Star variant="lime" />
              <span>Latest News</span>
            </div>
            <h2 className="title text-anim">
              Check Out Latest News <br className="d-none d-lg-block" />
              Updates <span>&amp; Articles</span>
            </h2>
          </div>
          <div className="row">
            {NEWS.map((n, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
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
                      Read More <i className="fa-regular fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="lets-project-section bg-cover"
        style={{ backgroundImage: 'url("/images/background/cta-bg1-1.jpg")' }}
      >
        <div className="container">
          <div className="lets-wrapper">
            <h2 className="title text-anim">Let’s Build Your Growth Engine</h2>
            <Link to="/contact" className="arrow-icon wow fadeInUp" data-wow-delay=".3s" aria-label="Book a Growth Consultation">
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
