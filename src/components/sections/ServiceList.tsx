import { Link } from "react-router-dom";
import { SERVICES } from "../../lib/services";

export const HOME_SERVICES = [
  ...SERVICES.map((service, index) => ({
    title: service.title,
    slug: service.slug,
    delay: `.${index + 2}s`,
  })),
];

/** `.service-wrapper` list — shared by the homepage and the Services page. */
export default function ServiceList({
  items = HOME_SERVICES,
  showHoverImage = true,
}: {
  items?: { title: string; slug?: string; delay?: string }[];
  showHoverImage?: boolean;
}) {
  return (
    <div className="service-wrapper">
      {items.map((s, i) => (
        <div
          key={i}
          className={`service-items${i === 0 ? " active" : ""} wow fadeInUp`}
          data-wow-delay={s.delay}
        >
          <div className="content">
            <span>0{i + 1}.</span>
            <h4 className="title">
              <Link to={`/service-details/${s.slug ?? "b2b-outbound-sales"}`}>{s.title}</Link>
            </h4>
          </div>
          {showHoverImage && (
            <div
              className="hover-image d-none d-lg-block bg-cover"
              style={{ backgroundImage: 'url("/images/resource/service-image1-1.jpg")' }}
            />
          )}
          <Link to={`/service-details/${s.slug ?? "b2b-outbound-sales"}`} className="icon">
            <img src="/images/icons/arrow-icon.png" alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}
