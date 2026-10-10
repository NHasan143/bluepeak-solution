import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";

const PROJECTS = [
  { title: "Business card design", col: "w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-7/12! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-7/12!", delay: ".3s", extra: "style-height" },
  { title: "Scrappy & Resourceful", col: "w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-5/12! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-5/12!", delay: ".5s", extra: "" },
  { title: "Showcase Your Process", col: "w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-full!", delay: ".3s", extra: "style-height" },
  { title: "Professional Onboarding", col: "w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-5/12! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-7/12!", delay: ".3s", extra: "style-height" },
  { title: "Targeted Cold Outreach", col: "w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-7/12! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-5/12!", delay: ".5s", extra: "style-height2" },
];

export default function Projects() {
  return (
    <>
      <PageTitle title="Protfolio" crumb="Protfolio" />

      <section className="case-study-section fix section-padding pb-[120px]!">
        <div className="project-shape tm-gsap-animate-circle hidden! min-[1400px]:block!">
          <img src="/images/icons/project-shape2-1.png" alt="img" />
        </div>
        <div className="project-ellipse hidden! min-[1400px]:block!">
          <img src="/images/icons/project2-1ellipse.png" alt="img" />
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6!">
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
