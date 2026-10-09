import { Link } from "react-router-dom";

export interface HomeServiceItem {
  num: string;
  title: string;
  desc: string;
  slug: string;
  tag?: string;
}

const HOME_SERVICES: HomeServiceItem[] = [
  {
    num: "01.",
    title: "Revenue & Sales Systems",
    desc: "Turn your sales process into a scalable system designed to attract, convert, and retain more customers.",
    slug: "revenue-sales-systems",
    tag: "Revenue Engine",
  },
  {
    num: "02.",
    title: "Brand & Creative Solutions",
    desc: "Build a distinctive brand identity with creative strategies that make your business memorable and market-ready.",
    slug: "brand-creative-solutions",
    tag: "Brand & Identity",
  },
  {
    num: "03.",
    title: "SEO & Organic Growth",
    desc: "Grow your search visibility, attract qualified traffic, and build sustainable organic growth with data-driven SEO.",
    slug: "seo-organic-growth",
    tag: "Search Authority",
  },
  {
    num: "04.",
    title: "Custom Web & Software Solutions",
    desc: "Create powerful websites and custom software solutions built around your business goals and customer needs.",
    slug: "custom-web-software",
    tag: "Web & Engineering",
  },
  {
    num: "05.",
    title: "AI & Workflow Automation",
    desc: "Automate repetitive workflows and integrate AI solutions to save time, improve efficiency, and scale smarter.",
    slug: "ai-workflow-automation",
    tag: "AI & Automation",
  },
];

export default function HomeServicesList() {
  return (
    <div className="home-services-showcase" aria-label="Our core growth services">
      <ul className="home-services-list">
        {HOME_SERVICES.map((service, index) => (
          <li key={service.slug} className="home-service-item wow fadeInUp" data-wow-delay={`.${index * 2 + 1}s`}>
            <Link
              to={`/service-details/${service.slug}`}
              className="home-service-row"
              aria-label={`${service.title} - ${service.desc}`}
            >
              <div className="home-service-indicator" aria-hidden="true" />

              <div className="home-service-header">
                <span className="home-service-num">{service.num}</span>
                <div className="home-service-title-wrap">
                  <h3 className="home-service-title">{service.title}</h3>
                  {service.tag && <span className="home-service-tag">{service.tag}</span>}
                </div>
              </div>

              <div className="home-service-body">
                <p className="home-service-desc">{service.desc}</p>
              </div>

              <div className="home-service-action">
                <span className="home-service-arrow-btn" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
