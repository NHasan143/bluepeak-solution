import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Star from "../components/common/Star";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";
import ClientsSection from "../components/sections/ClientsSection";

const SERVICES2 = [
  { title: "Digital marketing", delay: ".3s", active: true },
  { title: "Branding", delay: ".5s" },
  { title: "Product Strategy", delay: ".7s" },
  { title: "Consulting", delay: ".3s" },
  { title: "Motion design", delay: ".5s" },
];

export default function About() {
  return (
    <>
      <PageTitle title="About Us" crumb="About Us" />

      <AboutSection />
      <FeatureSection variant="static" />
      <ClientsSection />

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
                  Services <span className="d-xl-block">That Shouts</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-5">
              <p className="service-text wow fadeInUp" data-wow-delay=".3s">
                At Archfain, we bring your vision to life with innovative designs that seamlessly
                blend functionality, sustainability and aesthetics. With over 10 Years of expertise,
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
                <Link to="/service-details">{s.title}</Link>
              </h4>
              <div
                className="hover-image d-none d-lg-block bg-cover"
                style={{ backgroundImage: 'url("/images/resource/service-image2-1.png")' }}
              />
              <p>At Archfain, we bring your vision to life with innovative designs that</p>
            </div>
          ))}
        </div>
      </section>

      <Footer padded />
    </>
  );
}
