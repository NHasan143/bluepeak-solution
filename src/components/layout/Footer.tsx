import { Link } from "react-router-dom";

/**
 * Default footer, shared by the homepage and every inner page.
 * Inner pages render it with `padded` (adds `pt-120`), matching the original.
 */
export default function Footer({ padded = false }: { padded?: boolean }) {
  return (
    <footer className={`footer-section${padded ? " pt-120" : ""}`}>
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
          <div className="footer-widget-wrapper">
            <div className="row">
              <div
                className="col-xl-4 col-lg-5 col-md-8 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="footer-widgwet-items">
                  <div className="widget-head">
                    <Link to="/" className="footer-logo">
                      <img src="/images/logo.png" alt="img" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Through critical analysis and creative inquiry, our mission
                      is to understand the complexities human.
                    </p>
                    <div className="social-icon">
                      <a href="#">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
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
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/projects">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/contact">contact us</Link>
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
                      <a href="#">Mobile &amp; App Design</a>
                    </li>
                    <li>
                      <a href="#">Branding &amp; Identity</a>
                    </li>
                    <li>
                      <a href="#">Consultation</a>
                    </li>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">System Creation</a>
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
                    <h4 className="widget-title font-weight-700">Stay with us</h4>
                  </div>
                  <div className="social-post">
                    <a href="#" className="mt-0">
                      Behance
                    </a>
                    <a href="#">Upwork</a>
                    <a href="#">Dribbble</a>
                    <a href="#">Fiverr</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p className="wow fadeInLeft" data-wow-delay=".5s">
                © Copyright Reserved by Bluepeak Solution
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#">Term of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
