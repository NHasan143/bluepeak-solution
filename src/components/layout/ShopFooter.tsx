import { Link } from "react-router-dom";

/** `main-footer footer-style-one` — used by the shop pages. */
export default function ShopFooter() {
  return (
    <footer className="main-footer footer-style-one">
      <div className="widgets-section">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="footer-column col-lg-5">
                <div className="footer-widget about-widget wow fadeInLeft">
                  <h1 className="title">Let’s Talk</h1>
                  <div className="widget-content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
                      <br className="d-none d-xl-block" />
                      elit sed diam nonummy.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-2">
                <div className="footer-widget links-widget col wow fadeInLeft" data-wow-delay="100ms">
                  <h5 className="widget-title">Quick Link</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <Link to="/team">Our Team</Link>
                      </li>
                      <li>
                        <a href="#">Our Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-5">
                <div className="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                  <h5 className="text">Get the latest inspiration &amp; insights</h5>
                  <div className="subscribe-form-one">
                    <form method="post" action="#" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group" style={{ position: "relative" }}>
                        <label htmlFor="email" className="sr-only">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="email"
                          defaultValue=""
                          placeholder="Email Address"
                          required
                        />
                        <button type="submit" className="theme-btn" aria-label="Submit email">
                          <i className="icon flaticon-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="footer-widget col wow fadeInLeft" data-wow-delay="400ms">
                    <h5 className="widget-title">Address</h5>
                    <div className="widget-content">
                      <div className="text">
                        4140 Parker Rd. Allentown, <br className="d-none d-lg-block" />
                        New Mexico 31134
                      </div>
                    </div>
                  </div>
                  <div className="footer-widget col wow fadeInLeft" data-wow-delay="400ms">
                    <h5 className="widget-title">Support</h5>
                    <div className="widget-content">
                      <div className="text">
                        <a href="mailto:info@blupeaksolutions.com">info@blupeaksolutions.com</a> <br className="d-none d-lg-block" />
                        <a href="tel:01849415421">018-4941-5421</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner-container justify-content-center">
              <div className="copyright-text">© Copyright Reserved by Bluepeak Solution</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
