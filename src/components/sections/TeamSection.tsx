import { Link } from "react-router-dom";
import Star from "../common/Star";
import TeamBlob, { TeamSocials } from "./TeamBlob";

export interface TeamMember {
  img?: string;
  name: string;
  role: string;
  delay?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Wade Warren", role: "UX Designer", delay: ".3s" },
  { name: "Leslie Alexander", role: "UX Designer, Research", delay: ".5s" },
  { name: "Eleanor Pena", role: "UX Designer, Research", delay: ".7s" },
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
  className = "pt-20! min-[992px]:pt-[100px]! min-[1200px]:pt-[130px]! pb-[90px]!",
}: TeamSectionProps = {}) {
  return (
    <section id={id} className={`relative! overflow-hidden! ${className}`}>
      <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
        {showHeading && (
          <div className="relative! z-[2]! text-center! mb-[60px]!">
            <div className="mb-[5px]! [&>svg]:text-[var(--theme-color1)]! [&>svg]:-mt-0.5! [&>svg]:mr-[5px]! [&>span]:text-white! [&>span]:text-sm! [&>span]:font-normal! [&>span]:leading-normal! [&>span]:uppercase!">
              <Star variant="lime" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="text-anim text-white! text-[35px]! leading-[40px]! tracking-[-1.5px]! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]! [&>span]:text-[var(--theme-color1)]! [&>span]:font-normal! [&>span]:italic! [&>span]:font-[family-name:var(--style-font)]!">{title}</h2>
          </div>
        )}
        <div className="outer-box">
          <div className="flex! flex-wrap! -mx-3! justify-center!">
            {members.map((m, i) => (
              <div key={i} className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-4/12! min-[768px]:w-6/12!">
                <div className="relative! z-[999]! mt-5! wow fadeInUp" data-wow-delay={m.delay}>
                  <div className={`group/team relative! overflow-hidden! text-center! max-[1199px]:mb-2.5! ${m.img ? "" : "py-8! px-6! rounded-[20px]! bg-[#222222]!"}`}>
                    {m.img && (
                      <div className="relative!">
                        <figure className="relative! z-[1]! block! rounded-[20px]! bg-[#222222]! mb-0! min-h-[400px]! min-[768px]:min-h-[460px]! min-[1200px]:min-h-[543px]! transition-all! duration-300! before:absolute! before:inset-x-0! before:bottom-0! before:w-full! before:bg-[linear-gradient(360deg,#FD5B38_-6.39%,rgba(0,0,0,0)_106.33%)]! before:rounded-[20px]! before:z-[9999]! before:opacity-0! before:invisible! before:transition-all! before:duration-[400ms]! group-hover/team:before:h-[255px]! group-hover/team:before:opacity-100! group-hover/team:before:visible!">
                          <Link to="/team-details">
                            <img src={`/images/resource/${m.img}`} alt={m.name} className="absolute! bottom-0! left-1/2! -translate-x-1/2! w-[240px]! min-[768px]:w-[270px]! min-[1200px]:w-[337px]! max-w-[calc(100%-48px)]! h-auto! aspect-[337/495]! object-cover! object-bottom! transition-all! duration-300! z-[999]! group-hover/team:left-[calc(50%+25px)]!" />
                          </Link>
                          <TeamBlob />
                          <TeamSocials floating />
                        </figure>
                      </div>
                    )}
                    <div className={`relative! ${m.img ? "mt-[15px]! min-[1200px]:mt-[30px]!" : "mt-0! pt-0!"}`}>
                      <h4 className="text-white! mb-0! transition-all! duration-300! [&>a:hover]:text-[var(--theme-color1)]!">
                        <Link to="/team-details">{m.name}</Link>
                      </h4>
                      <span className="text-[var(--theme-color6)]! text-sm! transition-all! duration-300!">{m.role}</span>
                      {!m.img && <TeamSocials />}
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
