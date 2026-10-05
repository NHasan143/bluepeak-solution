import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";

const FEATURES = [
  "Business Consultation",
  "Up to 10 Support Hours/Month",
  "Network Monitoring",
  "Email & Software Setup",
  "Monthly Health Reports",
];

const PLANS = [
  { price: "399", tag: "Starter Plan", recommended: false },
  { price: "660", tag: "Professional Plan", recommended: true },
  { price: "990", tag: "Enterprise Plan", recommended: false },
];

export default function Pricing() {
  return (
    <>
      <PageTitle title="Pricing" crumb="Pricing" />

      <section className="pricing-section section-padding fix">
        <div className="pricing-1ellipse d-none d-xxl-block">
          <img src="/images/icons/pricing2-1ellipse.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {PLANS.map((plan, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6 ks_fade_anim" data-delay=".3">
                <div className={`pricing-block${plan.recommended ? " style-2 active" : ""}`}>
                  {plan.recommended && <div className="recommend">Recommended</div>}
                  <div className="price">
                    <sup>$</sup>
                    <span>{plan.price}</span>/ Yearly
                  </div>
                  <div className="tag">{plan.tag}</div>
                  <ul className="list">
                    {FEATURES.map((f, j) => (
                      <li key={j}>
                        <i className="fa-solid fa-check" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing" rel="nofollow" className="theme-btn-two large-btn">
                    <span>
                      <span className="text-1"> Get Started</span>
                      <span className="text-2"> Get Started</span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="inner">
            <div className="text-center">
              <div className="get-in-touch justify-content-center">
                Ready to Take the Next Step? Let’s Create Something Amazing Together.
                <Link to="/contact">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
