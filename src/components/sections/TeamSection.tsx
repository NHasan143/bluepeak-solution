import { useState, useSyncExternalStore } from "react";
import { pageClasses } from "../../styles/pageUtilities";
import Star from "../common/Star";
import TextReveal from "../common/TextReveal";
import LinePagination from "../common/LinePagination";
import TeamBlob from "./TeamBlob";

export interface TeamMember {
  img?: string;
  name: string;
  role: string;
  delay?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { img: "ryan.webp", name: "Ryan Ponomarov", role: "Sales Director", delay: ".3s" },
  { img: "yeasin.webp", name: "Md Yeasin", role: "Inside Sales Representative", delay: ".3s" },
  { img: "redoan.webp", name: "Md Redoan", role: "Motion & Video Editor", delay: ".3s" },
  { img: "akib-reza.webp", name: "Akib Reza", role: "Web Developer", delay: ".3s" },
  { img: "tarek.webp", name: "Sumon Hawlader", role: "Digital Marketing Specialist", delay: ".3s" },
  { name: "Md Jonayed", role: "Business Analyst", delay: ".3s" },
];

function subscribeToTeamLayout(onChange: () => void) {
  const queries = [window.matchMedia("(min-width: 768px)"), window.matchMedia("(min-width: 992px)")];
  queries.forEach(query => query.addEventListener("change", onChange));
  return () => queries.forEach(query => query.removeEventListener("change", onChange));
}

function getTeamPageSize() {
  if (window.matchMedia("(min-width: 992px)").matches) return 3;
  return window.matchMedia("(min-width: 768px)").matches ? 2 : 1;
}

export interface TeamSectionProps {
  id?: string;
  showHeading?: boolean;
  tone?: "dark" | "light";
  eyebrow?: string;
  title?: string;
  members?: TeamMember[];
  paginated?: boolean;
  className?: string;
}

/**
 * Team section showcasing the expert team members behind Blupeak's growth engine.
 */
export default function TeamSection({
  id = "team-section",
  showHeading = true,
  tone = "dark",
  eyebrow = "Our Expert Team",
  title = "Meet the Team Behind Your Digital Success",
  members = TEAM_MEMBERS,
  paginated = false,
  className = "pt-20! min-[992px]:pt-[100px]! min-[1200px]:pt-[130px]! pb-[90px]!",
}: TeamSectionProps = {}) {
  const light = tone === "light";
  const cardGround = light ? "bg-[#faf8f7]!" : "bg-[#222222]!";
  const pageSize = useSyncExternalStore(subscribeToTeamLayout, getTeamPageSize, () => 3);
  const [pageStart, setPageStart] = useState(0);
  const pageCount = Math.max(1, Math.ceil(members.length / pageSize));
  const currentPage = Math.min(Math.floor(pageStart / pageSize), pageCount - 1);
  const visibleMembers = paginated ? members.slice(currentPage * pageSize, (currentPage + 1) * pageSize) : members;
  return (
    <section id={id} className={pageClasses(`relative! overflow-hidden! ${className}`)}>
      <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
        {showHeading && (
          <div className="relative! z-[2]! text-center! mb-[60px]!">
            <div className="mb-[5px]! [&>svg]:text-[var(--theme-color1)]! [&>svg]:-mt-0.5! [&>svg]:mr-[5px]! [&>span]:text-white! [&>span]:text-sm! [&>span]:font-normal! [&>span]:leading-normal! [&>span]:uppercase!">
              <Star variant="lime" />
              <span>{eyebrow}</span>
            </div>
            <h2 className={`${light ? "text-[#261d1a]!" : "text-white!"} text-[35px]! leading-[40px]! tracking-[-1.5px]! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!`}>
              <TextReveal
                text={title}
                emphasis={{
                  text: "Your Digital Success",
                  className: "text-[var(--theme-color-coral)]! font-normal! italic! font-[family-name:var(--style-font)]!",
                }}
              />
            </h2>
          </div>
        )}
        <div className="outer-box">
          <div id={`${id}-members`} data-team-members className="flex! flex-wrap! -mx-3! justify-center!">
            {visibleMembers.map(m => (
              <div key={m.name} data-team-member className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-4/12! min-[768px]:w-6/12!">
                <div className={pageClasses(`relative! z-[999]! mt-5! ${paginated ? "motion-safe:animate-[fadeIn_240ms_ease-out_both]!" : "wow fadeInUp"}`)} data-wow-delay={paginated ? undefined : m.delay}>
                  <div className="group/team-member relative! overflow-hidden! text-center! max-[1199px]:mb-2.5!">
                    <div className="relative!">
                      <figure aria-hidden={!m.img || undefined} className={`relative! z-[1]! block! overflow-hidden! rounded-[20px]! ${cardGround} mb-0! min-h-[400px]! min-[768px]:min-h-[460px]! min-[1200px]:min-h-[543px]!`}>
                        {m.img && (
                          <>
                            <img src={`/images/resource/${m.img}`} alt={m.name} className="absolute! bottom-0! left-1/2! -translate-x-1/2! w-[240px]! min-[768px]:w-[270px]! min-[1200px]:w-[337px]! max-w-[calc(100%-48px)]! h-auto! aspect-[337/495]! object-cover! object-bottom! z-[999]! grayscale! transition-[filter]! duration-500! group-hover/team-member:grayscale-0! group-focus-within/team-member:grayscale-0! motion-reduce:transition-none!" />
                            <TeamBlob />
                          </>
                        )}
                      </figure>
                    </div>
                    <div className="relative! mt-[15px]! min-[1200px]:mt-[30px]!">
                      <h4 className={`${light ? "text-[#261d1a]!" : "text-white!"} mb-0!`}>{m.name}</h4>
                      <span className={`${light ? "text-[#66544e]!" : "text-[var(--theme-color6)]!"} text-sm! transition-all! duration-300!`}>{m.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {paginated && pageCount > 1 && (
            <LinePagination
              label="Team pagination"
              labels={Array.from({ length: pageCount }, (_, page) => `Team page ${page + 1}`)}
              currentIndex={currentPage}
              controlsId={`${id}-members`}
              onSelect={page => setPageStart(page * pageSize)}
              tone={tone}
              status={`Showing ${visibleMembers.map(member => member.name).join(", ")}.`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
