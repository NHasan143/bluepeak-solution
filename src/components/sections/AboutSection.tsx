import { Link } from "react-router-dom";
import Star from "../common/Star";

export interface AboutSectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  stat1Label?: string;
  stat1Value?: string;
  stat2Label?: string;
  stat2Value?: string;
  stat2Sub?: string;
  bodyParagraph?: string;
  stat3Label?: string;
  stat3Value?: string;
  pullQuote?: string;
  feature1Title?: string;
  feature1Desc?: string;
  feature2Title?: string;
  feature2Desc?: string;
  ctaText?: string;
  ctaLink?: string;
}

/** The "About Us" block used across pages with customizable content. */
export default function AboutSection({
  id,
  eyebrow = "About Blupeak",
  title,
  stat1Label = "Combined Team Experience",
  stat1Value = "6+ Years",
  stat2Label = "Core Service Pillars",
  stat2Value = "3",
  stat2Sub = "(Sales, Tech, Creative)",
  bodyParagraph = "Blupeak Solutions unifies sales, marketing, engineering, SEO and automation into one growth engine built to accelerate revenue.",
  stat3Label = "Delivery Model: 100% In House",
  stat3Value = "100",
  pullQuote = "Real growth isn't outsourced. It's built in partnership, with a team that treats your pipeline as its own.",
  feature1Title = "Full Cycle B2B Sales",
  feature1Desc = "Our internal consultants run the entire pipeline in house, from targeted outreach to discovery calls to closing high value deals, working as an extension of your revenue team.",
  feature2Title = "Tech Enabled Growth Infrastructure",
  feature2Desc = "We architect the CRM systems, automations, and SEO foundations that give your sales floor an edge, backed by our own engineering and search specialists.",
  ctaText = "More About Blupeak",
  ctaLink,
}: AboutSectionProps = {}) {
  const isHome = id === "home-about";
  const resolvedTitle =
    title ??
    (isHome ? (
      <>
        A Tech-Enabled Growth Agency <span>Built to Scale Businesses Worldwide</span>
      </>
    ) : (
      <>
        The Growth Engine Behind <span>Ambitious Global Brands</span>
      </>
    ));

  const resolvedCtaLink = ctaLink ?? (isHome ? "/about" : "#our-features");

  return (
    <section id={id} className="about-section fix section-padding">
      <div className="about-shape1 tm-gsap-animate-circle d-none d-xxl-block">
        <img src="/images/icons/about-shape1-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4 mb-60">
          <div className="col-xl-8 col-lg-7">
            <div className="section-title mb-0">
              <div className="sub-title text-left">
                <Star variant="lime" />
                <span>{eyebrow}</span>
              </div>
              <h2 className="title text-anim" data-reveal-on={isHome ? "desktop" : undefined}>
                {resolvedTitle}
              </h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-top-counter">
              <div className="year-box">
                <p>{stat1Label}</p>
                <h2 className="year-title">{stat1Value}</h2>
              </div>
              <div className="count-box">
                <p>{stat2Label}</p>
                <h2 className="title">
                  <span className="count-text" data-speed="3000" data-stop={stat2Value} data-lag="0">
                    {stat2Value}
                  </span>
                </h2>
                {stat2Sub && <span className="stat-sub-text">{stat2Sub}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-left-style-1">
              <p>{bodyParagraph}</p>
              <div className="counter-left">
                <div className="count-box">
                  <h2 className="title">
                    <span className="count-text" data-speed="3000" data-stop={stat3Value} data-lag="0">
                      {stat3Value}
                    </span>
                    %
                  </h2>
                  <p>{stat3Label}</p>
                </div>
                <div className="line" />
                <div className="client-image">
                  <img src="/images/resource/about-1-1.jpg" alt="img" className="icon-1" />
                  <img src="/images/resource/about-1-2.jpg" alt="img" className="icon-2" />
                  <img src="/images/resource/about-1-3.jpg" alt="img" className="icon-3" />
                  <img src="/images/resource/about-1-4.jpg" alt="img" className="icon-4" />
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
            <div className="about-image-style-1 fix">
              <img
                data-speed=".8"
                src="/images/about/about-1-5.jpg"
                alt="Blupeak Solutions team"
                width={491}
                height={486}
              />
              <div className="about-info">
                <div className="icon">
                  <img src="/images/icons/quote-icon.png" alt="img" />
                </div>
                <p>{pullQuote}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".7s">
            <div className="about-counter-item-1">
              <ul>
                <li>
                  <div className="icon">
                    <img src="/images/icons/about-icon1-1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">{feature1Title}</h4>
                    <p>{feature1Desc}</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/images/icons/about-icon1-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">{feature2Title}</h4>
                    <p>{feature2Desc}</p>
                  </div>
                </li>
              </ul>
              {resolvedCtaLink.startsWith("#") ? (
                <a href={resolvedCtaLink} className="theme-btn btn-style-four">
                  <span className="btn-title">{ctaText}</span>
                  <span className="dot-box">
                    <span className="dot-item" />
                  </span>
                </a>
              ) : (
                <Link to={resolvedCtaLink} className="theme-btn btn-style-four">
                  <span className="btn-title">{ctaText}</span>
                  <span className="dot-box">
                    <span className="dot-item" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
