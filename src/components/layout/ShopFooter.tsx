import { pageClasses } from "../../styles/pageUtilities";
import InterfaceIcon from "../common/InterfaceIcon";
import { Link } from "react-router-dom";

/** `main-footer footer-style-one` — used by the shop pages. */
export default function ShopFooter() {
  return (
    <footer className="main-footer footer-style-one">
      <div className="widgets-section">
        <div className="footer-middle">
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="flex! flex-wrap! -mx-3!">
              <div className="footer-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-5/12!">
                <div className={pageClasses("footer-widget about-widget wow fadeInLeft")}>
                  <h1 className={pageClasses("title")}>Let’s Talk</h1>
                  <div className="widget-content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
                      <br className="hidden! min-[1200px]:block!" />
                      elit sed diam nonummy.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li>
                          <a href="#">
                            <InterfaceIcon name="twitter"  />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <InterfaceIcon name="facebook"  />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <InterfaceIcon name="pinterest"  />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <InterfaceIcon name="instagram"  />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-2/12!">
                <div className={pageClasses("footer-widget links-widget flex-1! px-3! wow fadeInLeft")} data-wow-delay="100ms">
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
              <div className="footer-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-5/12!">
                <div className={pageClasses("footer-widget subscribe-widget wow fadeInLeft")} data-wow-delay="200ms">
                  <h5 className="text">Get the latest inspiration &amp; insights</h5>
                  <div className="subscribe-form-one">
                    <form method="post" action="#" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group relative!" >
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
                        <button type="submit" className="inline-flex! gap-2! items-center! justify-center! text-center! whitespace-nowrap! transition-all! duration-300!" aria-label="Submit email">
                          <InterfaceIcon name="send" className="icon"  />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex! flex-wrap! -mx-3!">
                  <div className={pageClasses("footer-widget flex-1! px-3! wow fadeInLeft")} data-wow-delay="400ms">
                    <h5 className="widget-title">Address</h5>
                    <div className="widget-content">
                      <div className="text">
                        4140 Parker Rd. Allentown, <br className="hidden! min-[992px]:block!" />
                        New Mexico 31134
                      </div>
                    </div>
                  </div>
                  <div className={pageClasses("footer-widget flex-1! px-3! wow fadeInLeft")} data-wow-delay="400ms">
                    <h5 className="widget-title">Support</h5>
                    <div className="widget-content">
                      <div className="text">
                        <a href="mailto:info@blupeaksolutions.com">info@blupeaksolutions.com</a> <br className="hidden! min-[992px]:block!" />
                        <a href="tel:01849415421">018-4941-5421</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black! py-[22px]! rounded-b-[30px]!">
          <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
            <div className="inner-container justify-center!">
              <div className="copyright-text">© Copyright Reserved by Bluepeak Solution</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
