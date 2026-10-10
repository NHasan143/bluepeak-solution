import InterfaceIcon from "../components/common/InterfaceIcon";
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
        <div className="pricing-1ellipse hidden! min-[1400px]:block!">
          <img src="/images/icons/pricing2-1ellipse.png" alt="" />
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3!">
            {PLANS.map((plan, i) => (
              <div key={i} className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[992px]:w-6/12! min-[768px]:w-6/12! ks_fade_anim" data-delay=".3">
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
                        <InterfaceIcon name="check"  />
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
            <div className="text-center!">
              <div className="get-in-touch justify-center!">
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
