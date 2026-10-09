import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../../lib/services";

const HOME_SERVICES = [
  ...SERVICES.map((service, index) => ({
    title: service.title,
    slug: service.slug,
    delay: `.${index + 2}s`,
  })),
];

/** `.service-wrapper` list — shared by the homepage and the Services page. */
export default function ServiceList({
  items = HOME_SERVICES,
}: {
  items?: { title: string; slug?: string; delay?: string }[];
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
          <Link to={`/service-details/${s.slug ?? "b2b-outbound-sales"}`} className="icon">
            <ArrowUpRight size={32} aria-hidden="true" />
          </Link>
        </div>
      ))}
    </div>
  );
}
