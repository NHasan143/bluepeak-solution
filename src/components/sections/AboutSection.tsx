import { Link } from "react-router-dom";
import Star from "../common/Star";

/** The "About Us" block shared verbatim by the homepage and the About page. */
export default function AboutSection({ id }: { id?: string }) {
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
                <span>About Blupeak</span>
              </div>
              <h2 className="title text-anim">
                The Growth Engine Behind <span>Ambitious Global Brands</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-top-counter">
              <div className="year-box">
                <p>Combined team experience</p>
                <h2 className="year-title">6+</h2>
              </div>
              <div className="count-box">
                <p>Core service pillars</p>
                <h2 className="title">
                  <span className="count-text" data-speed="3000" data-stop="89" data-lag="0">
                    3
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-left-style-1">
              <p>
                Blupeak Solutions is a Dhaka based, tech enabled growth agency built for one
                purpose: giving ambitious businesses an in house caliber team without the in house
                overhead. We run full cycle demand generation, digital infrastructure, and search
                and creative execution as a single, unified agency. Every specialist on our floor
                works under one roof, on one mission: scaling our clients' revenue.
              </p>
              <div className="counter-left">
                <div className="count-box">
                  <h2 className="title">
                    <span className="count-text" data-speed="3000" data-stop="10" data-lag="0">
                      100
                    </span>
                    %
                  </h2>
                  <p>Delivery model: 100% In House</p>
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
              <img data-speed=".8" src="/images/resource/about-1-5.jpg" alt="img" />
              <div className="about-info">
                <div className="icon">
                  <img src="/images/icons/quote-icon.png" alt="img" />
                </div>
                <p>
                  Real growth isn't outsourced. It's built in partnership, with a team that treats
                  your pipeline as its own.
                </p>
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
                    <h4 className="title">Full Cycle B2B Sales</h4>
                    <p>Our internal consultants run the entire pipeline in house, from targeted outreach to discovery calls to closing high value deals.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/images/icons/about-icon1-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">Tech Enabled Growth Infrastructure</h4>
                    <p>We architect the CRM systems, automations, and SEO foundations that give your sales floor an edge.</p>
                  </div>
                </li>
              </ul>
              <Link to="/about" className="theme-btn btn-style-four">
                <span className="btn-title">More About Blupeak</span>
                <span className="dot-box">
                  <span className="dot-item" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
