import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Star from "../components/common/Star";
import GrowthServiceAccordion from "../components/sections/GrowthServiceAccordion";

export default function Services() {
  return (
    <>
      <PageTitle title="Services" crumb="Services" />

      <section className="service-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-4 mb-60 justify-content-between">
            <div className="col-lg-8">
              <div className="section-title mb-0">
                <div className="sub-title text-left">
                  <Star variant="lime" />
                  <span>Our Services</span>
                </div>
                <h2 className="title text-anim">
                  B2B Growth Services Built Around <span>Your Revenue Goals</span>
                </h2>
                <p className="growth-services-intro">
                  Three pillars, one in-house team: demand generation, digital infrastructure and
                  creative execution, built and run under one roof.
                </p>
              </div>
            </div>
          </div>

          <GrowthServiceAccordion />

          <div className="growth-services-cta">
            <Link to="/contact" className="theme-btn btn-style-one">
              <span className="btn-title">Book a Growth Consultation</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}