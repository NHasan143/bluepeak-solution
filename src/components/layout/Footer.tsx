import { pageClasses } from "../../styles/pageUtilities";
import { Link } from "react-router-dom";

const FacebookIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/**
 * Default footer, shared by the homepage and every inner page.
 * Inner pages render it with `padded` (adds `pt-120!`), matching the original.
 */
export default function Footer({
  padded = false,
  tagline = "Through disciplined execution and in house expertise, Blupeak exists to turn ambitious companies into category leaders.",
}: {
  padded?: boolean;
  tagline?: string;
}) {
  return (
    <footer data-site-footer className={`relative! z-[9]! pb-[50px]! rounded-b-[30px]${padded ? " pt-[120px]!" : ""}`}>
      <div className="absolute! bottom-0! right-0! -z-[1]! hidden! min-[1400px]:block!">
        <img src="/images/icons/footer1-1ellipse.png" alt="img" />
      </div>
      <div className="absolute! top-0! left-0! -z-[1]! hidden! min-[1400px]:block!">
        <img src="/images/icons/footer1-2ellipse.png" alt="img" />
      </div>

      <div className="relative! z-[9]! overflow-hidden! rounded-[28px]! bg-[#10120f]! mx-[clamp(16px,5vw,100px)]!">
        <div className="absolute! bottom-[10%]! right-0! -z-[1]!">
          <img src="/images/icons/footer1-shape-1.png" alt="img" />
        </div>
        <div className="tm-gsap-animate-circle absolute! bottom-20! left-0! -z-[1]! hidden! min-[1400px]:block!">
          <img src="/images/icons/footer-shape1-1.png" alt="" />
        </div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          <div className="pt-[clamp(64px,8vw,104px)]! pb-[42px]! min-[768px]:pb-[76px]!">
            <div className="flex! flex-wrap! -mx-3!">
              <div
                className={pageClasses("w-full! px-3! min-[768px]:w-2/3! min-[992px]:w-5/12! min-[1200px]:w-1/3! wow fadeInUp")}
                data-wow-delay=".2s"
              >
                <div className="m-0!">
                  <div className="mb-[30px]!">
                    <Link to="/" aria-label="Blupeak home">
                      <img src="/images/logo.png" alt="Blupeak" className="max-w-[155px]!" />
                    </Link>
                  </div>
                  <div className="max-w-[315px]!">
                    <p className="text-[#a9afa4]! text-base! leading-[1.75]!">{tagline}</p>
                  </div>
                </div>
              </div>
              <div
                className={pageClasses("w-full! px-3! min-[576px]:w-1/2! min-[768px]:w-1/3! min-[992px]:w-1/4! min-[1200px]:pl-12! wow fadeInUp")}
                data-wow-delay=".4s"
              >
                <div className="m-0!">
                  <div className="mb-[30px]!">
                    <h4 className="text-[15px]! leading-[21px]! font-bold! tracking-[0.08em]! uppercase! text-[#f3f5ed]!">Quick Links</h4>
                  </div>
                  <ul className="list-none! p-0! ml-0! [&>li]:mb-[13px]! [&>li]:text-base! [&>li]:leading-[30.4px]! [&>li>a]:relative [&>li>a]:text-[#d9d9d9]! [&>li>a]:capitalize [&>li>a]:transition-[color,transform] [&>li>a]:duration-[180ms] [&>li>a:hover]:text-[#d9ef54]! [&>li>a:hover]:translate-x-1">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">What We Do</Link>
                    </li>
                    <li>
                      <Link to="/about">The Blupeak Advantage</Link>
                    </li>
                    <li>
                      <Link to="/team">Our Team</Link>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={pageClasses("w-full! px-3! min-[576px]:w-1/2! min-[992px]:w-1/3! min-[1200px]:w-1/4! min-[1200px]:pl-12! wow fadeInUp")}
                data-wow-delay=".6s"
              >
                <div className="m-0!">
                  <div className="mb-[30px]!">
                    <h4 className="text-[15px]! leading-[21px]! font-bold! tracking-[0.08em]! uppercase! text-[#f3f5ed]!">Our Services</h4>
                  </div>
                  <ul className="list-none! p-0! ml-0! [&>li]:mb-[13px]! [&>li]:text-base! [&>li]:leading-[30.4px]! [&>li>a]:relative [&>li>a]:text-[#d9d9d9]! [&>li>a]:capitalize [&>li>a]:transition-[color,transform] [&>li>a]:duration-[180ms] [&>li>a:hover]:text-[#d9ef54]! [&>li>a:hover]:translate-x-1">
                    <li>
                      <Link to="/service-details/revenue-sales-systems">Revenue &amp; Sales Systems</Link>
                    </li>
                    <li>
                      <Link to="/service-details/brand-creative-solutions">Brand &amp; Creative Solutions</Link>
                    </li>
                    <li>
                      <Link to="/service-details/seo-organic-growth">SEO &amp; Organic Growth</Link>
                    </li>
                    <li>
                      <Link to="/service-details/custom-web-software">Custom Web &amp; Software</Link>
                    </li>
                    <li>
                      <Link to="/service-details/ai-workflow-automation">AI &amp; Workflow Automation</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={pageClasses("w-full! px-3! min-[576px]:w-1/2! min-[992px]:w-1/3! min-[1200px]:w-1/6! min-[1400px]:pl-12! wow fadeInUp")}
                data-wow-delay=".8s"
              >
                <div className="m-0!">
                  <div className="mb-[30px]!">
                    <h4 className="text-[15px]! leading-[21px]! font-bold! tracking-[0.08em]! uppercase! text-[#f3f5ed]!">Legal</h4>
                  </div>
                  <ul className="list-none! p-0! ml-0! [&>li]:mb-[13px]! [&>li]:text-base! [&>li]:leading-[30.4px]! [&>li>a]:relative [&>li>a]:text-[#d9d9d9]! [&>li>a]:capitalize [&>li>a]:transition-[color,transform] [&>li>a]:duration-[180ms] [&>li>a:hover]:text-[#d9ef54]! [&>li>a:hover]:translate-x-1">
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-of-service">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#080a08]! rounded-b-[28px]! py-[23px]!">
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="flex! flex-wrap! flex-col! items-start! justify-center! gap-2.5! min-[768px]:flex-row! min-[768px]:items-center! min-[768px]:justify-between! min-[768px]:gap-0!">
              <p className={pageClasses("text-[#7e857a]! text-[13px]! wow fadeInLeft")} data-wow-delay=".5s">
                &copy; Copyright Reserved by Blupeak
              </p>
              <ul className={pageClasses("flex! gap-4! list-none! p-0! m-0! wow fadeInRight")} data-wow-delay=".5s">
                <li>
                  <a href="#" aria-label="Facebook" className="text-[#a9afa4]! hover:text-[#d9ef54]! transition-colors! duration-200!">
                    <FacebookIcon size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" className="text-[#a9afa4]! hover:text-[#d9ef54]! transition-colors! duration-200!">
                    <LinkedinIcon size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
