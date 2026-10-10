import InterfaceIcon from "../components/common/InterfaceIcon";
import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import TemplateContactForm from "../components/forms/TemplateContactForm";

const INFO_LEFT = [
  { title: "Email", value: "info@blupeaksolutions.com" },
  { title: "Phone", value: "018-4941-5421" },
  { title: "Website", value: "www.yourdomain.com" },
];
const INFO_RIGHT = [
  { title: "Blod Group", value: "AB+" },
  { title: "Age", value: "25 Years" },
  { title: "Address", value: "121 King Street, Melbourne" },
];
const SKILLS = [
  { title: "Scalable Solutions", percent: "80%" },
  { title: "Automation Features", percent: "70%" },
  { title: "24/7 Support", percent: "90%" },
];

export default function TeamDetails() {
  return (
    <>
      <PageTitle title="Team Details" crumb="Team Details" />

      <section className="team-details pt-[120px]! pb-[0px]!">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]! pb-[0px]!">
          <div className="team-details__top pb-[70px]!">
            <div className="flex! flex-wrap! -mx-3!">
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-5/12! min-[992px]:w-6/12!">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    <div className="team-details__big-text">12 years of experience</div>
                  </div>
                </div>
              </div>
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-7/12! min-[992px]:w-6/12!">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="team-details__top-name">
                      Sarah Lee{" "}
                      <span className="text-theme-colored1">/ Managing Director &amp; CEO</span>
                    </h3>
                    <p className="team-details__text-1 mb-[0px]!">
                      Web designing in a powerful way of just not an only professions, however, in a
                      passion for our Company. We have to a tendency to believe the idea that smart
                      looking of any website is the first impression on visitors.
                    </p>
                    <p className="team-details__text-2">
                      Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium
                      doloremque
                    </p>
                    <div className="info-outer-box">
                      <div className="info-left">
                        {INFO_LEFT.map((it, i) => (
                          <div
                            key={i}
                            className={`team-details-contact${i < 2 ? " mb-[30px]!" : ""}`}
                          >
                            <h5 className="title">{it.title}</h5>
                            <div className="text">
                              <span>{it.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="info-right">
                        {INFO_RIGHT.map((it, i) => (
                          <div
                            key={i}
                            className={`team-details-contact${i < 2 ? " mb-[30px]!" : ""}`}
                          >
                            <h5 className="title">{it.title}</h5>
                            <div className="text">
                              <span>{it.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="team-details__social">
                      <a href="#">
                        <InterfaceIcon name="x"  />
                      </a>
                      <a href="#">
                        <InterfaceIcon name="facebook"  />
                      </a>
                      <a href="#">
                        <InterfaceIcon name="pinterest"  />
                      </a>
                      <a href="#">
                        <InterfaceIcon name="instagram"  />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-details__bottom">
            <h4 className="team-details__bottom-left-title">Short Biography</h4>
            <p className="team-details__bottom-left-text">
              Web designing in a powerful way of just not an only professions, however, in a passion
              for our Company. We have to a tendency to believe the idea that smart looking of any
              website is the first impression on visitors.Sed ut perspiciatis unde omnis natus error
              sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae
              abillo inventore veritatis et quasi architecto beatae There are many variations
            </p>
            <div className="flex! flex-wrap! -mx-3!">
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-6/12! min-[992px]:w-6/12!">
                <div className="team-details__bottom-left">
                  <h4 className="team-details__bottom-left-title">Contact Us</h4>
                  <p className="team-details__bottom-left-text">
                    Bring to the table win-win survival strategies to ensure proactive domination
                    going forward, a new normal that has evolved simply
                  </p>
                  <TemplateContactForm
                    namePlaceholder="Your Full Name"
                    phonePlaceholder="Your Budget"
                    messageRows={5}
                    buttonLabel="Send Message"
                    buttonWrapClass="mb-3 theme-btn-main text-center"
                  />
                </div>
              </div>
              <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-6/12! min-[992px]:w-6/12!">
                <div className="team-details__bottom-right">
                  <h4 className="team-details__bottom-left-title">Expertise &amp; Skills</h4>
                  <p className="team-details__bottom-left-text">
                    Bring to the table win-win at survival strategies win to ensure with proactiv
                    other domination going with forward, a new normal that has evolved from
                    generation X is on the runway heading towards a streamled solution survival
                    strategies ensure adipisci impedit ab cloud
                  </p>
                  <div className="team-details__progress">
                    {SKILLS.map((s, i) => (
                      <div key={i} className="team-details__progress-single">
                        <h4 className="team-details__progress-title">{s.title}</h4>
                        <div className={`bar${i === SKILLS.length - 1 ? " marb-0" : ""}`}>
                          <div className="bar-inner count-bar" data-percent={s.percent}>
                            <div className="count-text">{s.percent}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
