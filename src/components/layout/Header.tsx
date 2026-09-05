import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  const { pathname } = useLocation();
  const [sticky, setSticky] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // js/script.js headerStyle()
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSticky(y > 100);
      setFixed(y > 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // js/script.js: body.mobile-menu-visible
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", mobileOpen);
    return () => document.body.classList.remove("mobile-menu-visible");
  }, [mobileOpen]);

  // Close the mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`main-header header-style-one header-1${fixed ? " fixed-header" : ""}`}>
      {/* Header Lower */}
      <div className="header-lower">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="" title="Bluepeak Solution" />
              </Link>
            </div>
            <nav className="nav main-menu main-menu-wrap">
              <ul className="navigation">
                <Navigation />
              </ul>
            </nav>

            <div className="outer-box">
              <div className="ui-btn-outer">
                <p className="phone-number">
                  <img src="/images/icons/call.png" alt="" />
                  <a href="tel:01750050088">+0175-0050-088</a>
                </p>
                <Link to="/contact" className="theme-btn btn-style-four">
                  <span className="btn-title">Contact Us</span>
                  <span className="dot-box">
                    <span className="dot-item" />
                  </span>
                </Link>
              </div>
              <div
                className="mobile-nav-toggler"
                onClick={() => setMobileOpen(true)}
              >
                <i className="icon fa-regular fa-bars-staggered" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={() => setMobileOpen(false)} />
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="close-btn" onClick={() => setMobileOpen(false)}>
              <i className="icon fa fa-times" />
            </div>
          </div>

          <ul className="navigation clearfix">
            <Navigation mobile />
          </ul>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset" />
                <span className="title">Call Now</span>
                <a href="tel:+01750050088">+01 (7500) - 50088</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1" />
                <span className="title">Send Email</span>
                <a href="mailto:help@company.com">help@company.com</a>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock" />
                <span className="title">Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sticky Header */}
      <div
        className={`sticky-header${sticky ? " fixed-header animated slideInDown" : ""}`}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.png" alt="img" />
              </Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <Navigation />
                  </ul>
                </div>
              </nav>
              <div
                className="mobile-nav-toggler"
                onClick={() => setMobileOpen(true)}
              >
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
