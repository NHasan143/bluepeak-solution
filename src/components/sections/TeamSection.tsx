import { Link } from "react-router-dom";
import Star from "../common/Star";
import TeamBlob, { TeamSocials } from "./TeamBlob";

export interface TeamMember {
  img: string;
  name: string;
  role: string;
  delay?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { img: "team5-1.png", name: "Wade Warren", role: "UX Designer", delay: ".3s" },
  { img: "team5-2.png", name: "Leslie Alexander", role: "UX Designer, Research", delay: ".5s" },
  { img: "team5-3.png", name: "Eleanor Pena", role: "UX Designer, Research", delay: ".7s" },
];

export interface TeamSectionProps {
  id?: string;
  showHeading?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
  members?: TeamMember[];
  className?: string;
}

/**
 * Team section showcasing the expert team members behind Blupeak's growth engine.
 */
export default function TeamSection({
  id = "team-section",
  showHeading = true,
  eyebrow = "Our Expert Team",
  title = (
    <>
      Meet the Team Behind <span>Your Digital Success</span>
    </>
  ),
  members = TEAM_MEMBERS,
  className = "team-section-five section-padding pb-90",
}: TeamSectionProps = {}) {
  return (
    <section id={id} className={className}>
      <div className="container">
        {showHeading && (
          <div className="section-title text-center mb-60">
            <div className="sub-title">
              <Star variant="lime" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="title text-anim">{title}</h2>
          </div>
        )}
        <div className="outer-box">
          <div className="row justify-content-center">
            {members.map((m, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="team-block-five style-2 wow fadeInUp" data-wow-delay={m.delay}>
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image">
                        <Link to="/team-details">
                          <img src={`/images/resource/${m.img}`} alt={m.name} />
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
  );
}
