import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";

const PROJECTS = [
  { title: "Business card design", col: "col-xl-7 col-lg-7", delay: ".3s", extra: "style-height" },
  { title: "Scrappy & Resourceful", col: "col-xl-5 col-lg-5", delay: ".5s", extra: "" },
  { title: "Showcase Your Process", col: "col-xl-12", delay: ".3s", extra: "style-height" },
  { title: "Professional Onboarding", col: "col-xl-5 col-lg-7", delay: ".3s", extra: "style-height" },
  { title: "Targeted Cold Outreach", col: "col-xl-7 col-lg-5", delay: ".5s", extra: "style-height2" },
];

export default function Projects() {
  return (
    <>
      <PageTitle title="Protfolio" crumb="Protfolio" />

      <section className="case-study-section fix section-padding pb-120">
        <div className="project-shape tm-gsap-animate-circle d-none d-xxl-block">
          <img src="/images/icons/project-shape2-1.png" alt="img" />
        </div>
        <div className="project-ellipse d-none d-xxl-block">
          <img src="/images/icons/project2-1ellipse.png" alt="img" />
        </div>
        <div className="container">
          <div className="row g-4">
            {PROJECTS.map((p, i) => (
              <div key={i} className={`${p.col} wow fadeInUp`} data-wow-delay={p.delay}>
                <div className={`case-study-items-2${p.extra ? ` ${p.extra}` : ""}`}>
                  <div className="content">
                    <ul>
                      <li>Banding</li>
                      <li>UI/UX</li>
                      <li>Design</li>
                    </ul>
                    <h4 className="title">
                      <Link to="/project-details">{p.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
