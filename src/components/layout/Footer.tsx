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
 * Inner pages render it with `padded` (adds `pt-120`), matching the original.
 */
export default function Footer({
  padded = false,
  tagline = "Through disciplined execution and in house expertise, Blupeak exists to turn ambitious companies into category leaders.",
}: {
  padded?: boolean;
  tagline?: string;
}) {
  return (
    <footer className={`footer-section blupeak-footer${padded ? " pt-120" : ""}`}>
      <div className="footer-ellipse1 d-none d-xxl-block">
        <img src="/images/icons/footer1-1ellipse.png" alt="img" />
      </div>
      <div className="footer-ellipse2 d-none d-xxl-block">
        <img src="/images/icons/footer1-2ellipse.png" alt="img" />
      </div>

      <div className="footer-area">
        <div className="footer-shape1">
          <img src="/images/icons/footer1-shape-1.png" alt="img" />
        </div>
        <div className="footer-shape tm-gsap-animate-circle d-none d-xxl-block">
          <img src="/images/icons/footer-shape1-1.png" alt="" />
        </div>
        <div className="container">
          <div className="footer-widget-wrapper blupeak-footer-grid">
            <div className="row">
              <div
                className="col-xl-4 col-lg-5 col-md-8 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="footer-widgwet-items">
                  <div className="widget-head">
                    <Link to="/" className="footer-logo" aria-label="Blupeak home">
                      <img src="/images/logo.png" alt="Blupeak" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>{tagline}</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="footer-widgwet-items">
                  <div className="widget-head">
                    <h4 className="widget-title font-weight-700">Quick Links</h4>
                  </div>
                  <ul className="list-area">
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
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="footer-widgwet-items">
                  <div className="widget-head">
                    <h4 className="widget-title font-weight-700">Our Services</h4>
                  </div>
                  <ul className="list-area">
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
                className="col-xl-2 col-lg-4 col-md-6 col-sm-6 ps-xxl-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="footer-widgwet-items">
                  <div className="widget-head">
                    <h4 className="widget-title font-weight-700">Legal</h4>
                  </div>
                  <ul className="list-area">
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
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p className="wow fadeInLeft" data-wow-delay=".5s">
                &copy; Copyright Reserved by Blupeak
              </p>
              <ul className="footer-social-icons wow fadeInRight" data-wow-delay=".5s" style={{ display: 'flex', gap: '16px', listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                  <a href="#" aria-label="Facebook" style={{ color: '#a9afa4', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d9ef54'} onMouseLeave={(e) => e.currentTarget.style.color = '#a9afa4'}>
                    <FacebookIcon size={24} />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" style={{ color: '#a9afa4', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#d9ef54'} onMouseLeave={(e) => e.currentTarget.style.color = '#a9afa4'}>
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
