import { pageClasses } from "../styles/pageUtilities";
import InterfaceIcon from "../components/common/InterfaceIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";
import { getService, SERVICES } from "../lib/services";

const SLIDER = [0, 1, 2];

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
      <section className="services-details pt-[120px]! pb-[0px]!">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3!">
            {/* Sidebar */}
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[992px]:w-4/12!">
              <div className={pageClasses("service-sidebar")}>
                <div className="sidebar-widget service-sidebar-single">
                  <div className={pageClasses("sidebar-service-list")}>
                    <ul>
                      {SERVICES.map((item) => (
                        <li key={item.slug} className={item.slug === service.slug ? "current" : undefined}>
                          <Link to={`/services/${item.slug}`} className={item.slug === service.slug ? "current" : undefined}>
                            <InterfaceIcon name="angle-right"  />
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={pageClasses("service-details-help")}>
                    <div className={pageClasses("help-shape-1")} />
                    <div className={pageClasses("help-shape-2")} />
                    <h2 className={pageClasses("help-title")}>
                      Contact with <br />
                      us for any <br />
                      advice
                    </h2>
                    <div className={pageClasses("help-icon")}>
                      <InterfaceIcon name="phone"  />
                    </div>
                    <div className={pageClasses("help-contact")}>
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:01849415421">018-4941-5421</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-8/12! min-[992px]:w-8/12!">
              <div className={pageClasses("services-details__content")}>
                <h3 className="mt-[24px]!">{service.title}</h3>
                <p className="text">{service.intro}</p>
                <div className="content mt-[40px]!">
                  <div className="text">
                    <h3>What&apos;s included</h3>
                    <ul className="feature-list">
                      {service.included.map((item) => (
                        <li className="single-item" key={item}>
                          <InterfaceIcon name="check" className="icon-box"  />
                          <span className={pageClasses("title")}>{item}</span>
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
                    {SLIDER.map((i) => (
                      <SwiperSlide key={i}>
                        <p className="text">
                          Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur
                          temporibus doloribus hic conse quatur copy typing refreshing
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="faq-content mt-[48px]!">
                  <h3 className="mb-[16px]!">Frequently Asked Question</h3>
                  <p className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est
                    qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                  <Accordion
                    items={FAQ}
                    defaultOpen={1}
                    className={pageClasses("wow fadeInUp p-[0px]! mt-[40px]!")}
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
