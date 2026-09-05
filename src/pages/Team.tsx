import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import TeamBlob, { TeamSocials } from "../components/sections/TeamBlob";

const MEMBERS = [
  { img: "team5-1.png", name: "Wade Warren", role: "UX Designer", delay: ".3s" },
  { img: "team5-2.png", name: "Leslie Alexander", role: "UX Designer, Research", delay: ".5s" },
  { img: "team5-3.png", name: "Eleanor Pena", role: "UX Designer, Research", delay: ".7s" },
];

export default function Team() {
  return (
    <>
      <PageTitle title="Team" crumb="Team" />

      <section className="team-section-five section-padding pt-90 pb-0">
        <div className="container">
          <div className="outer-box">
            <div className="row">
              {MEMBERS.map((m, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="team-block-five style-2 wow fadeInUp" data-wow-delay={m.delay}>
                    <div className="inner-box text-center">
                      <div className="image-box">
                        <figure className="image">
                          <Link to="/team-details">
                            <img src={`/images/resource/${m.img}`} alt="Image" />
                          </Link>
                          <TeamBlob />
                          <TeamSocials />
                        </figure>
                      </div>
                      <div className="content-box">
                        <h4 className="name">
                          <Link to="/team-details">{m.name}</Link>
                        </h4>
                        <span className="designation">{m.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
