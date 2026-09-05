import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";

const REVIEW =
  "Exceeded all expectations with their exceptional service and expertise. Their dedication and professionalism made the entire process seamless and rewarding. I highly recommend them for outstanding results!";

const SLIDES = [
  { name: "Annette Black", role: "Admin" },
  { name: "Annette Black", role: "Admin" },
  { name: "Annette Black", role: "Admin" },
];

export default function Testimonial() {
  return (
    <>
      <PageTitle title="Testimonial" crumb="Testimonial" />

      <section className="testimonial-wrapper testimonial-one section-padding pb-10">
        <div className="bg-shape d-none d-xxl-block">
          <img src="/images/icons/testi-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="testimonial-one__clints-box mt-0 mb-4 mb-lg-0">
                <div className="image">
                  <img src="/images/resource/testi2-1.png" alt="" />
                  <img className="shape-1" src="/images/icons/testi2-shape1.png" alt="" />
                </div>
                <div className="rating">
                  <h3 className="num">4.7</h3>
                  <div className="star">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                  </div>
                  <p>
                    From 3k Members, <br />
                    Reviewed by Google
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="testimonial-one__slider-box mt-0">
                <div className="testi-shape">
                  <img src="/images/icons/testi2-shape2.png" alt="" />
                </div>
                <Swiper
                  className="testimonial-slider"
                  modules={[Autoplay, Navigation]}
                  loop
                  speed={2000}
                  spaceBetween={30}
                  autoplay={{ delay: 1000, disableOnInteraction: false }}
                  navigation={{ nextEl: ".array-prev", prevEl: ".array-next" }}
                >
                  {SLIDES.map((s, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonial-one__single-card">
                        <div className="quata">
                          <img src="/images/icons/quote-icon2.png" alt="" />
                        </div>
                        <p className="text">{REVIEW}</p>
                        <div className="clints-info">
                          <h5 className="name">{s.name}</h5>
                          <span>{s.role}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fas fa-long-arrow-left" />
                  </button>
                  <button className="array-next">
                    <i className="fas fa-long-arrow-right" />
                  </button>
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
