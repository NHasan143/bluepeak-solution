import InterfaceIcon from "../components/common/InterfaceIcon";
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

      <section className="testimonial-wrapper testimonial-one section-padding pb-[10px]!">
        <div className="bg-shape hidden! min-[1400px]:block!">
          <img src="/images/icons/testi-bg.png" alt="" />
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3!">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-3/12! min-[992px]:w-4/12! min-[768px]:w-full!">
              <div className="testimonial-one__clints-box mt-[0px]! mb-[24px]! min-[992px]:mb-[0px]!">
                <div className="image">
                  <img className="shape-1" src="/images/icons/testi2-shape1.png" alt="" />
                </div>
                <div className="rating">
                  <h3 className="num">4.7</h3>
                  <div className="star">
                    <InterfaceIcon name="star"  />
                    <InterfaceIcon name="star"  />
                    <InterfaceIcon name="star"  />
                    <InterfaceIcon name="star"  />
                    <InterfaceIcon name="star"  />
                  </div>
                  <p>
                    From 3k Members, <br />
                    Reviewed by Google
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-9/12! min-[992px]:w-8/12! min-[768px]:w-full!">
              <div className="testimonial-one__slider-box mt-[0px]!">
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
                    <InterfaceIcon name="arrow-left"  />
                  </button>
                  <button className="array-next">
                    <InterfaceIcon name="arrow-right"  />
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
