import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Star from "../components/common/Star";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";

const SERVICES2 = [
  { title: "Outbound Demand Generation", slug: "b2b-outbound-sales", description: "Highly targeted cold call and email campaigns designed to reach decision makers and set warm, qualified appointments.", delay: ".3s", active: true },
  { title: "Full Cycle B2B Closing", slug: "full-cycle-deal-closing", description: "Elite sales consultants run discovery calls, handle objections, and close high ticket deals on your behalf.", delay: ".5s" },
  { title: "CRM and Automation Architecture", slug: "crm-architecture", description: "Complex CRM builds and workflow automations that eliminate manual entry and keep your pipeline moving without friction.", delay: ".7s" },
  { title: "SEO and Organic Growth", slug: "seo-organic-growth", description: "Keyword clustering, technical SEO, and content strategy that compounds, built to dominate search rather than just chase rankings.", delay: ".3s" },
  { title: "Digital Advertising and Creative", slug: "brand-creative-paid-media", description: "Paid media management alongside high converting video and graphic creative, produced by our in house design bench.", delay: ".5s" },
];

export default function About() {
  return (
    <>
      <PageTitle title="About Us" crumb="About Us" />

      <AboutSection />
      <FeatureSection variant="static" />
      <section className="clients-section-1">
        <div className="clients-wrapper section-bg section-padding">
          <div className="container">
            <div className="section-title text-center">
              <div className="sub-title">
                <Star />
                <span>Growth Standards Built for Global Brands</span>
              </div>
              <p className="title text-anim">
                Blupeak's team brings 6+ years of combined experience across sales, technology,
                and search, applied in service of every client we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section-2 fix section-bg section-padding pb-70">
        <div className="service-ellipse">
          <img src="/images/icons/service2-1ellipse.png" alt="img" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-xl-7">
              <div className="section-title mb-0">
                <div className="sub-title text-left">
                  <Star variant="lime" color="#BAFF39" />
                  <span>Our Services</span>
                </div>
                <h2 className="title text-anim">
                  Revenue Architecture, <span className="d-xl-block">Built In House</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-5">
              <p className="service-text wow fadeInUp" data-wow-delay=".3s">
                From first outreach to closed deal to the tech and content that keep the pipeline full,
                Blupeak runs your growth engine as one internal team, not a patchwork of vendors.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-80">
          {SERVICES2.map((s, i) => (
            <div
              key={i}
              className={`service-list-style1${s.active ? " active" : ""} wow fadeInUp`}
              data-wow-delay={s.delay}
            >
              <h4 className="title">
                <Link to={`/service-details/${s.slug}`}>{s.title}</Link>
              </h4>
              <div
                className="hover-image d-none d-lg-block bg-cover"
                style={{ backgroundImage: 'url("/images/resource/service-image2-1.png")' }}
              />
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer padded />
    </>
  );
}
