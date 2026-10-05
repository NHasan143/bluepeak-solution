import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Star from "../common/Star";

const CARDS = [
  { cls: "card-1", icon: "feature-icon1.png", title: "Demand Generation and B2B Sales", description: "Targeted outreach, pipeline management, and full cycle closing handled by native English speaking consultants trained to run high ticket deals.", slug: "b2b-outbound-sales" },
  { cls: "card-2", icon: "feature-icon2.png", title: "CRM Architecture and Workflow Automation", description: "We design and optimize Salesforce, Zoho, and HubSpot environments, automating lead routing so no opportunity falls through the cracks.", slug: "crm-architecture" },
  { cls: "card-3", icon: "feature-icon3.png", title: "Tech Enabled Operations", description: "Our in house engineering team builds the backend systems that keep the sales floor fast, data accurate, and scalable.", slug: "tech-enabled-operations", active: true },
  { cls: "card-4", icon: "feature-icon4.png", title: "SEO Sprints and Content Growth", description: "Technical SEO audits, keyword clustering, and content strategy built to help client brands dominate organic search.", slug: "seo-organic-growth" },
  { cls: "card-5", icon: "feature-icon5.png", title: "Brand and Asset Design", description: "Premium capability statements, pitch decks, and whitepapers that make client brands look and close like the market leader.", slug: "brand-creative-paid-media" },
];

const ArrowIcon = (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2483 6.64957L0 6.64957L0 5.25684L16.2483 5.25684V6.64957Z" fill="#0F0B19" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.5522 5.25635C12.2769 5.25635 9.60059 8.13661 9.60059 11.2079V11.9043H10.9933V11.2079C10.9933 8.87605 13.0755 6.64908 15.5522 6.64908H16.2482V5.25635H15.5522Z" fill="#0F0B19" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.5512 6.64802C12.276 6.64802 9.59961 3.76772 9.59961 0.696366V0L10.9923 0V0.696366C10.9923 3.02834 13.0746 5.25529 15.5512 5.25529H16.2472V6.64802H15.5512Z" fill="#0F0B19" />
  </svg>
);

function Card({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div className={`feature-card ${card.cls}${card.active ? " active" : ""}`}>
      <div className="icon">
        <img src={`/images/icons/${card.icon}`} alt="img" />
      </div>
      <div className="content">
        <h4 className="title">{card.title}</h4>
        <p>{card.description}</p>
        <Link to={`/service-details/${card.slug}`} className="arrow-icon">
          {ArrowIcon}
        </Link>
      </div>
    </div>
  );
}

/**
 * "Our features" section. The homepage renders it as a Swiper carousel
 * (`.feature-slider-home1`); the About page renders the same cards as a
 * static grid inside `.feature-wrapper`.
 */
export default function FeatureSection({
  variant = "slider",
}: {
  variant?: "slider" | "static";
}) {
  return (
    <section
      className={`feature-section1 section-padding${variant === "static" ? " overflow-hidden" : ""}`}
    >
      <div className="feature-shape">
        <svg width="1920" height="1158" viewBox="0 0 1919 1158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1 110.832C733.864 -37.7086 1154.2 -36.6358 1919 112.217V1146H-1V110.832Z" fill="#D9F45F" />
          <path d="M-1 118.703C733.864 -31.41 1154.2 -31.7253 1919 118.703V1158H-1V118.703Z" fill="#131212" />
        </svg>
      </div>

      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-xl-7">
            <div className="section-title text-center">
              <div className="sub-title">
                <Star />
                <span>Our Features</span>
              </div>
              <h2 className="title text-anim">
                Turning Companies <br />
                Into <span>Category Leaders</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-container">
        <div className="feature-wrapper">
          {variant === "slider" ? (
            <Swiper
              className="feature-slider-home1"
              modules={[Pagination]}
              slidesPerView={5}
              spaceBetween={20}
              speed={600}
              loop
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                520: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                1440: { slidesPerView: 5 },
              }}
            >
              {[...CARDS, CARDS[0], CARDS[1]].map((card, i) => (
                <SwiperSlide key={i}>
                  <Card card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            CARDS.map((card, i) => <Card key={i} card={card} />)
          )}
        </div>
        <div className="feature-button">
          <Link to="/services" className="circle-box wow fadeInUp" data-wow-delay=".5s">
            <span>
              <i className="fa-solid fa-arrow-right" /> More <br className="d-block" />
              Features
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
