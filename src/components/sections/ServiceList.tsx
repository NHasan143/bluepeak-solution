import { Link } from "react-router-dom";

export const HOME_SERVICES = [
  { title: "Brand Strategy & Positioning", delay: ".2s" },
  { title: "Social Media Marketing ", delay: ".4s" },
  { title: "Digital Transformation Consulting", delay: ".6s" },
  { title: "Market & Competitor Research", delay: ".8s" },
  { title: "Campaign Strategy & Planning", delay: ".9s" },
];

/** `.service-wrapper` list — shared by the homepage and the Services page. */
export default function ServiceList({
  items = HOME_SERVICES,
}: {
  items?: { title: string; delay?: string }[];
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
              <Link to="/service-details">{s.title}</Link>
            </h4>
          </div>
          <div
            className="hover-image d-none d-lg-block bg-cover"
            style={{ backgroundImage: 'url("/images/resource/service-image1-1.jpg")' }}
          />
          <Link to="/service-details" className="icon">
            <img src="/images/icons/arrow-icon.png" alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}
