import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";
import { getService, SERVICES } from "../lib/services";
 
const SLIDER = [
  { img: "service-d1.jpg" },
  { img: "service-d2.jpg" },
  { img: "service-d1.jpg" },
];
 
const FAQ_ANSWER =
  "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.";
 
const FAQ: AccordionEntry[] = [
  { no: "", question: "Is my technology allowed on tech?", answer: FAQ_ANSWER },
  { no: "", question: "How to soft launch your business?", answer: FAQ_ANSWER },
  { no: "", question: "How to turn visitors into contributors", answer: FAQ_ANSWER },
  { no: "", question: "How can i find my solutions?", answer: FAQ_ANSWER },
];
 
export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getService(slug);

  return (
    <>
      <PageTitle title={service.title} crumb="Services" />
 
      <section className="services-details pt-120 pb-0">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      {SERVICES.map((item) => (
                        <li key={item.slug} className={item.slug === service.slug ? "current" : undefined}>
                          <Link to={`/service-details/${item.slug}`} className={item.slug === service.slug ? "current" : undefined}>
                            <i className="fas fa-angle-right" />
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  <div className="service-details-help">
                    <div className="help-shape-1" />
                    <div className="help-shape-2" />
                    <h2 className="help-title">
                      Contact with <br />
                      us for any <br />
                      advice
                    </h2>
                    <div className="help-icon">
                      <span className="lnr-icon-phone-handset" />
                    </div>
                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:01849415421">018-4941-5421</a>
                    </div>
                  </div>
 
                  <div className="sidebar-widget service-sidebar-single mt-4">
                    <div
                      className="service-sidebar-single-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                      data-wow-duration="1200m"
                    >
                      <a href="#" className="theme-btn btn-style-one d-grid">
                        <span className="btn-title">
                          <span className="fas fa-file-pdf" /> download pdf file
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <div className="service-details-image fix">
                  <img data-speed=".8" src="/images/resource/service-details.jpg" alt="" />
                </div>
                <h3 className="mt-4">{service.title}</h3>
                <p className="text">{service.intro}</p>
                <div className="content mt-40">
                  <div className="text">
                    <h3>What&apos;s included</h3>
                    <ul className="feature-list">
                      {service.included.map((item) => (
                        <li className="single-item" key={item}>
                          <span className="icon-box fas fa-check" />
                          <span className="title">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <blockquote className="blockquote-one">
                      {service.outcome}
                    </blockquote>
                  </div>
                  <Swiper
                    className="project-image-slider"
                    slidesPerView={2}
                    spaceBetween={30}
                    speed={600}
                    loop
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      576: { slidesPerView: 1 },
                      768: { slidesPerView: 1 },
                      992: { slidesPerView: 2 },
                      1023: { slidesPerView: 2 },
                    }}
                  >
                    {SLIDER.map((s, i) => (
                      <SwiperSlide key={i}>
                        <div className="image">
                          <img className="w-100" src={`/images/resource/${s.img}`} alt="" />
                        </div>
                        <p className="text">
                          Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur
                          temporibus doloribus hic conse quatur copy typing refreshing
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="faq-content mt-5">
                  <h3 className="mb-3">Frequently Asked Question</h3>
                  <p className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est
                    qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                  <Accordion
                    items={FAQ}
                    defaultOpen={1}
                    className="wow fadeInUp p-0 mt-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <Footer padded />
    </>
  );
}
