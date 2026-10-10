import { Link } from "react-router-dom";
import Star from "../common/Star";
import PageEyebrow from "../common/PageEyebrow";

export interface AboutSectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  pageHeader?: React.ReactNode;
  stat1Label?: string;
  stat1Value?: string;
  stat2Label?: string;
  stat2Value?: string;
  stat2Sub?: string;
  bodyParagraph?: string;
  stat3Label?: string;
  stat3Value?: string;
  pullQuote?: string;
  feature1Title?: string;
  feature1Desc?: string;
  feature2Title?: string;
  feature2Desc?: string;
  ctaText?: string;
  ctaLink?: string;
}

/** The "About Us" block used across pages with customizable content. */
export default function AboutSection({
  id,
  eyebrow = "About Blupeak",
  title,
  pageHeader,
  stat1Label = "Combined Team Experience",
  stat1Value = "6+ Years",
  stat2Label = "Core Service Pillars",
  stat2Value = "3",
  stat2Sub = "(Sales, Tech, Creative)",
  bodyParagraph = "Blupeak Solutions unifies sales, marketing, engineering, SEO and automation into one growth engine built to accelerate revenue.",
  stat3Label = "Delivery Model: 100% In House",
  stat3Value = "100",
  pullQuote = "Real growth isn't outsourced. It's built in partnership, with a team that treats your pipeline as its own.",
  feature1Title = "Full Cycle B2B Sales",
  feature1Desc = "Our internal consultants run the entire pipeline in house, from targeted outreach to discovery calls to closing high value deals, working as an extension of your revenue team.",
  feature2Title = "Tech Enabled Growth Infrastructure",
  feature2Desc = "We architect the CRM systems, automations, and SEO foundations that give your sales floor an edge, backed by our own engineering and search specialists.",
  ctaText = "More About Blupeak",
  ctaLink,
}: AboutSectionProps = {}) {
  const isHome = id === "home-about";
  const isPageHeader = Boolean(pageHeader);
  const Heading = isPageHeader ? "h1" : "h2";
  const resolvedTitle =
    title ??
    (isHome ? (
      <>
        A Tech-Enabled Growth Agency <span>Built to Scale Businesses Worldwide</span>
      </>
    ) : (
      <>
        The Growth Engine Behind <span>Ambitious Global Brands</span>
      </>
    ));

  const resolvedCtaLink = ctaLink ?? (isHome ? "/about" : "#our-features");

  return (
    <section id={id} className={`relative! overflow-hidden! pb-20! min-[992px]:pb-[100px]! min-[1200px]:pb-[130px]! ${isPageHeader ? "bg-black! pt-0!" : isHome ? "pt-8! min-[576px]:pt-20! min-[992px]:pt-[100px]! min-[1200px]:pt-[130px]!" : "pt-20! min-[992px]:pt-[100px]! min-[1200px]:pt-[130px]!"}`}>
      <div className="tm-gsap-animate-circle absolute! bottom-[50px]! left-0! hidden! min-[1700px]:block!">
        <img src="/images/icons/about-shape1-1.png" alt="img" />
      </div>
      <div
        className={isPageHeader ? "bg-[#000000]! pt-32! pb-12! sm:pt-40! sm:pb-16! lg:pt-44!" : undefined}
        data-about-page-header={isPageHeader ? "" : undefined}
        aria-labelledby={isPageHeader ? "about-page-title" : undefined}
      >
        <div className={isPageHeader ? "mx-auto! max-w-[1424px]! px-5! sm:px-8! lg:px-16!" : "mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!"}>
          {pageHeader}
          <div className={`flex! flex-wrap! -mx-3! gutter-row -mt-6!${isPageHeader ? "" : " mb-[60px]!"}`}>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-8/12! min-[992px]:w-7/12!">
              <div className={`relative! mb-0! ${isPageHeader ? "text-left!" : "max-[991px]:text-center!"}`}>
                {isPageHeader ? (
                  <PageEyebrow>{eyebrow}</PageEyebrow>
                ) : (
                  <div className="mb-[5px]! text-left! max-[991px]:inline-flex! max-[991px]:items-center! max-[991px]:justify-center! max-[991px]:w-full! [&>svg]:text-[var(--theme-color1)]! [&>svg]:-mt-0.5! [&>svg]:mr-[5px]! [&>span]:text-white! [&>span]:text-sm! [&>span]:font-normal! [&>span]:leading-normal! [&>span]:uppercase!">
                    <Star variant="lime" />
                    <span>{eyebrow}</span>
                  </div>
                )}
                <Heading
                  id={isPageHeader ? "about-page-title" : undefined}
                  className={isPageHeader
                    ? "text-anim text-[35px]! leading-[40px]! font-normal! tracking-[-1.5px]! text-white! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]! [&>span]:text-[var(--theme-color1)]! [&>span]:font-normal! [&>span]:italic! [&>span]:font-[family-name:var(--style-font)]! m-0! text-left!"
                    : "text-anim text-[35px]! leading-[40px]! font-normal! tracking-[-1.5px]! text-white! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]! [&>span]:text-[var(--theme-color1)]! [&>span]:font-normal! [&>span]:italic! [&>span]:font-[family-name:var(--style-font)]! max-[991px]:text-center! max-[991px]:mx-auto!"}
                  data-reveal-on={isHome ? "desktop" : undefined}
                >
                  {resolvedTitle}
                </Heading>
              </div>
            </div>
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[1200px]:w-4/12! min-[992px]:w-5/12! wow fadeInUp" data-wow-delay=".3s">
              <div className="flex! items-center! justify-end! max-[991px]:justify-center! max-[991px]:mt-[25px]! max-[991px]:mb-5! max-[575px]:w-full! max-[575px]:gap-0!">
                <div className="relative! z-[1]! flex! flex-col! items-center! justify-center! size-[130px]! min-[576px]:size-[165px]! shrink-0! rounded-full! bg-[#171816]! border! border-white/8! px-2! min-[576px]:px-3!">
                  <p className="text-[11px]! min-[576px]:text-[13px]! font-medium! text-[#a0a6a0]! mb-0.5! min-[576px]:mb-1! text-center! leading-[1.2]!">{stat1Label}</p>
                  <h2 className="text-2xl! min-[576px]:text-[32px]! font-bold! text-white! leading-none!">{stat1Value}</h2>
                </div>
                <div className="relative! z-[2]! flex! flex-col! items-center! justify-center! size-[155px]! min-[576px]:size-[205px]! shrink-0! rounded-full! bg-[var(--theme-color1)]! px-2.5! min-[576px]:px-[15px]! -ml-5! min-[576px]:-ml-[35px]! shadow-[-10px_0_25px_rgba(0,0,0,0.35)]!">
                  <p className="text-xs! min-[576px]:text-[15px]! font-semibold! text-black! mb-0.5! min-[576px]:mb-1! text-center! leading-[1.2]!">{stat2Label}</p>
                  <h2 className="text-[34px]! min-[576px]:text-[52px]! font-bold! text-black! leading-none!">
                    <span className="count-text" data-speed="3000" data-stop={stat2Value} data-lag="0">
                      {stat2Value}
                    </span>
                  </h2>
                  {stat2Sub && <span className="text-[10px]! min-[576px]:text-[11px]! font-semibold! text-black! text-center! leading-[1.2]! mt-0.5!">{stat2Sub}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
        <div className="flex! flex-wrap! -mx-3! gutter-row -mt-6! items-center!">
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-3/12! wow fadeInUp" data-wow-delay=".3s">
            <div className="min-[1200px]:mr-[30px]! max-[991px]:text-center! [&>p]:max-w-[335px]! max-[991px]:[&>p]:mx-auto!">
              <p>{bodyParagraph}</p>
              <div className="mt-[230px]! max-[991px]:mt-[30px]! max-[991px]:flex! max-[991px]:flex-col! max-[991px]:items-center!">
                <div className="flex! items-center! gap-4! pb-2.5! max-[991px]:justify-center!">
                  <h2 className="text-[45px]! min-[1400px]:text-[60px]!">
                    <span className="count-text" data-speed="3000" data-stop={stat3Value} data-lag="0">
                      {stat3Value}
                    </span>
                    %
                  </h2>
                  <p className="text-white! max-w-[75px]! min-[1400px]:max-w-[95px]!">{stat3Label}</p>
                </div>
                <div className="w-[303px]! h-0.5! bg-[linear-gradient(90deg,rgba(217,244,95,0.17)_3.24%,#D9F45F_48.44%,#0D0D0D_100%)]! max-[991px]:mx-auto!" />
              </div>
            </div>
          </div>
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-5/12! wow fadeInUp" data-wow-delay=".5s">
            <div className="relative! overflow-hidden! rounded-xl! h-[380px]! min-[576px]:h-[490px]! max-[991px]:mt-[15px]!">
              <img
                data-speed=".8"
                src="/images/about/about-1-5.jpg"
                alt="Blupeak Solutions team"
                width={491}
                height={486}
                className="rounded-xl! w-full! h-full! object-cover!"
              />
              <div className="absolute! rounded-[20px]! bg-[var(--theme-color1)]! left-[15px]! right-[15px]! bottom-[15px]! max-w-[calc(100%-30px)]! py-[18px]! px-5! min-[576px]:left-[30px]! min-[576px]:right-auto! min-[576px]:bottom-5! min-[576px]:max-w-[350px]! min-[576px]:py-[23px]! min-[576px]:px-[30px]!">
                <div className="icon">
                  <img src="/images/icons/quote-icon.png" alt="img" />
                </div>
                <p className="text-[var(--headings-color)]! font-medium! mt-[15px]!">{pullQuote}</p>
              </div>
            </div>
          </div>
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-4/12! wow fadeInUp" data-wow-delay=".7s">
            <div className="min-[1200px]:ml-[30px]! max-[991px]:mt-[30px]! text-left! max-[991px]:[&>.theme-btn]:flex! max-[991px]:[&>.theme-btn]:justify-center! max-[991px]:[&>.theme-btn]:mx-auto! max-[991px]:[&>.theme-btn]:w-fit!">
              <ul className="mb-12!">
                <li className="group/about-feature flex! gap-4! min-[576px]:gap-[15px]! min-[1200px]:gap-[25px]! [&:not(:last-child)]:border-b! [&:not(:last-child)]:border-white/11! [&:not(:last-child)]:mb-[25px]! [&:not(:last-child)]:pb-[25px]! min-[992px]:[&:not(:last-child)]:mb-[45px]! min-[992px]:[&:not(:last-child)]:pb-[45px]!">
                  <div className="max-w-[50px]! min-w-[50px]! w-full! h-[50px]! leading-[50px]! min-[576px]:max-w-[60px]! min-[576px]:min-w-0! min-[576px]:h-[60px]! min-[576px]:leading-[60px]! rounded-full! bg-[var(--theme-color1)]! text-center! max-[575px]:[&>img]:max-w-[26px]! group-hover/about-feature:[&>img]:animate-[wobble_1.5s_ease-in-out]!">
                    <img src="/images/icons/about-icon1-1.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="text-[18px]! mb-2! min-[576px]:text-base! min-[576px]:mb-[5px]! min-[1200px]:text-xl! min-[1200px]:mb-[15px]! font-medium!">{feature1Title}</h4>
                    <p className="max-[575px]:text-sm! max-[575px]:leading-[1.6]!">{feature1Desc}</p>
                  </div>
                </li>
                <li className="group/about-feature flex! gap-4! min-[576px]:gap-[15px]! min-[1200px]:gap-[25px]! [&:not(:last-child)]:border-b! [&:not(:last-child)]:border-white/11! [&:not(:last-child)]:mb-[25px]! [&:not(:last-child)]:pb-[25px]! min-[992px]:[&:not(:last-child)]:mb-[45px]! min-[992px]:[&:not(:last-child)]:pb-[45px]!">
                  <div className="max-w-[50px]! min-w-[50px]! w-full! h-[50px]! leading-[50px]! min-[576px]:max-w-[60px]! min-[576px]:min-w-0! min-[576px]:h-[60px]! min-[576px]:leading-[60px]! rounded-full! bg-[var(--theme-color1)]! text-center! max-[575px]:[&>img]:max-w-[26px]! group-hover/about-feature:[&>img]:animate-[wobble_1.5s_ease-in-out]!">
                    <img src="/images/icons/about-icon1-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="text-[18px]! mb-2! min-[576px]:text-base! min-[576px]:mb-[5px]! min-[1200px]:text-xl! min-[1200px]:mb-[15px]! font-medium!">{feature2Title}</h4>
                    <p className="max-[575px]:text-sm! max-[575px]:leading-[1.6]!">{feature2Desc}</p>
                  </div>
                </li>
              </ul>
              {resolvedCtaLink.startsWith("#") ? (
                <a href={resolvedCtaLink} className="theme-btn btn-style-four">
                  <span className="btn-title">{ctaText}</span>
                  <span className="dot-box">
                    <span className="dot-item" />
                  </span>
                </a>
              ) : (
                <Link to={resolvedCtaLink} className="theme-btn btn-style-four">
                  <span className="btn-title">{ctaText}</span>
                  <span className="dot-box">
                    <span className="dot-item" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
