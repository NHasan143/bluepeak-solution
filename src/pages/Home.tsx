import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Star from "../components/common/Star";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";
import Footer from "../components/layout/Footer";
import HomeContactForm from "../components/forms/HomeContactForm";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";
import ClientsSection from "../components/sections/ClientsSection";
import ServiceList from "../components/sections/ServiceList";

const MagicRings = lazy(() => import("../components/common/MagicRings"));

const FAQ_ANSWER =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem";

const FAQ_LEFT: AccordionEntry[] = [
  { no: "01.", question: "What services does your digital agency offer?", answer: FAQ_ANSWER },
  { no: "02.", question: "How do you approach a new project?", answer: FAQ_ANSWER, wowDelay: ".2s" },
  { no: "03.", question: "What industries do you specialize in?", answer: FAQ_ANSWER, wowDelay: ".4s" },
  { no: "04.", question: "How long does it take to complete a project?", answer: FAQ_ANSWER, wowDelay: ".6s" },
];

const FAQ_RIGHT: AccordionEntry[] = [
  { no: "05.", question: "Do you offer custom website or app development?", answer: FAQ_ANSWER, wowDelay: ".2s" },
  { no: "06.", question: "What is your pricing model or cost structure?", answer: FAQ_ANSWER, wowDelay: ".2s" },
  { no: "07.", question: "Can you help with ongoing support and maintenance?", answer: FAQ_ANSWER, wowDelay: ".4s" },
  { no: "08.", question: "Do you work with startups or only established brands?", answer: FAQ_ANSWER, wowDelay: ".6s" },
];

const SKILLS = [
  { icon: "wa-sketch.png", count: "90%", title: "Skatch" },
  { icon: "wa-photoshop.png", count: "80%", title: "Photoshop", delay: ".2s" },
  { icon: "wa-figma.png", count: "90%", title: "Figma", delay: ".4s", active: true },
  { icon: "wa-invision.png", count: "90%", title: "Invision", delay: ".6s" },
  { icon: "wa-xd.png", count: "85%", title: "XD", delay: ".8s" },
  { icon: "wa-Illustration.png", count: "75%", title: "Illustration", delay: ".9s" },
];

const NEWS = [
  { img: "news1-1.jpg", title: "The ultimate guide to content marketing for businesses", delay: ".3s" },
  { img: "news1-2.jpg", title: "Web3 marketing breakthroughs agency case study", delay: ".5s" },
  { img: "news1-3.jpg", title: "Innovative web3 marketing campaigns agency", delay: ".7s" },
];

const PROJECTS = [
  { img: "project1-1.jpg", title: "Product Advertisement" },
  { img: "project1-2.jpg", title: "Mock-up Design" },
  { img: "project-1-3.jpg", title: "Digital Branding" },
];

const COUNTERS = [
  { stop: "1500", start: "5", suffix: "", label: "Years of Experience" },
  { stop: "40", start: "5", suffix: "+", label: "Countries in Services", rotate: true },
  { stop: "30", start: "5", suffix: "%", label: "Increase in Productivity" },
  { stop: "20", start: "3", suffix: "k", label: "Project Completed", rotate: true },
];

const marqueeGroup = (
  <div className="marquee-group">
    <div className="text">web design</div>
    <div className="text">copywriting</div>
    <div className="text">WEB DESIGN</div>
  </div>
);

export default function Home() {
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
            <h1 className="hero-title">
              We Build Brands<br />
              <span>Digital</span> Results.
            </h1>
          </div>
          <div className="text-circle">
            <a href="#home-projects" className="down-icon" aria-label="Explore our projects">
              <i className="fa-regular fa-arrow-down-long" />
            </a>
          </div>
        </div>
      </section>

      <AboutSection />

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

      {/* Projects */}
      <section id="home-projects" className="project-section section-padding tm-panel-pin-area">
        <div className="project-shape tm-gsap-animate-circle d-none d-xxl-block">
          <img src="/images/icons/project-shape1-1.png" alt="img" />
        </div>
        <div className="project-ellipse d-none d-xl-block">
          <img src="/images/icons/project1-1ellipse.png" alt="img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="project-left mt-0 tm-panel-pin">
                <div className="section-title mb-40">
                  <div className="sub-title text-left">
                    <Star variant="lime" />
                    <span>Projects</span>
                  </div>
                  <h2 className="title text-anim">
                    Discover the artistry behind <span>our projects</span>
                  </h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout
                </p>
                <Link to="/projects" className="circle-box">
                  <span>
                    View portfolio
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              {PROJECTS.map((p, i) => (
                <div key={i} className={`case-block-three${i === 0 ? " mt-0" : ""} tm-panel-pin`}>
                  <div className="image">
                    <img src={`/images/resource/${p.img}`} alt="" />
                    <img src={`/images/resource/${p.img}`} alt="" />
                  </div>
                  <div className="tag-wrap">
                    <span className="tag">UI/UX Design</span>
                    <span className="tag">Branding</span>
                  </div>
                  <div className="info-title">
                    <h4 className="title">
                      <Link to="/project-details">{p.title}</Link>
                    </h4>
                    <Link to="/project-details" className="arrow-icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Awards */}
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
                  <span>Awwards</span>
                </div>
                <h2 className="title text-anim">
                  Our Achievements &amp; <span>Recognitions</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <p>
                This year marks 5 years of digital precision — bold thinking, and interfaces that
                just work.
              </p>
            </div>
          </div>
          <div className="row g-4 align-items-end">
            <div className="col-lg-5">
              <div className="award-image1 text-center">
                <img src="/images/resource/award1-1.png" alt="" />
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
                          X2 <span>FOR DISPLAY 2022</span>
                        </h6>
                        <h4 className="title">Brand of the year.</h4>
                      </div>
                      <span className="year">/ 2012</span>
                    </div>
                    <div
                      className="hover-image d-none d-md-block bg-cover"
                      style={{ backgroundImage: 'url("/images/resource/award1-1-hover.jpg")' }}
                    />
                    <Link to="/service-details" className="arrow-icon">
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
                      <span className="count-text" data-speed="3000" data-stop={c.stop}>
                        {c.start}
                      </span>
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
                      Success is a team effort <span>let’s achieve it together </span>
                    </h2>
                  </div>
                  <div className="contact-info wow fadeInUp" data-wow-delay=".3s">
                    <h6 className="email">needhelp@company.com</h6>
                    <h3 className="phone">(+123) 456789 00</h3>
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
              Update <span>&amp; Articales</span>
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
                      <span>UI Design</span> / admin
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

      {/* Let's start a project */}
      <section
        className="lets-project-section bg-cover"
        style={{ backgroundImage: 'url("/images/background/cta-bg1-1.jpg")' }}
      >
        <div className="container">
          <div className="lets-wrapper">
            <h2 className="title text-anim">Let’s Start a Project</h2>
            <Link to="/contact" className="arrow-icon wow fadeInUp" data-wow-delay=".3s">
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
