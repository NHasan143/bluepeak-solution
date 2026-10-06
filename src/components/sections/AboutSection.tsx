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
                A Tech-Enabled Growth Agency <span>Built to Scale Businesses Worldwide</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-top-counter">
              <div className="year-box">
                <p>Team Experience</p>
                <h2 className="year-title">6+</h2>
              </div>
              <div className="count-box">
                <p>Core Growth Pillars</p>
                <h2 className="title">
                  <span className="count-text" data-speed="3000" data-stop="89" data-lag="0">
                    3
                  </span>
                  +
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-left-style-1">
              <p>
                Blupeak Solutions is not a staffing pool or a placement service. We are a unified
                growth agency. Our internal specialists in sales, marketing and engineering work
                inside one Dhaka-based digital operations hub, running outbound pipeline, full-cycle
                closing, CRM automation, SEO and creative production as one accountable team.
              </p>
              <div className="counter-left">
                <div className="count-box">
                  <h2 className="title">
                    <span className="count-text" data-speed="3000" data-stop="100" data-lag="0">
                      100
                    </span>
                    %
                  </h2>
                  <p>100% In-House Execution</p>
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
                  True growth isn’t rented by the hour. It’s built by a team that treats your
                  pipeline as its own.
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
                    <h4 className="title">Full-Cycle B2B Sales</h4>
                    <p>Our internal consultants run discovery calls, handle objections and close high-ticket B2B deals on behalf of our clients, start to finish.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/images/icons/about-icon1-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">Tech-Enabled Operations</h4>
                    <p>Our engineering team builds the CRM architecture and automations that give every campaign an edge in the market.</p>
                  </div>
                </li>
              </ul>
              <Link to="/about" className="theme-btn btn-style-four">
                <span className="btn-title">More About Us</span>
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
