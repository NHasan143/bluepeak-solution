import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Star from "../components/common/Star";
import TemplateContactForm from "../components/forms/TemplateContactForm";

export default function Contact() {
  return (
    <>
      <PageTitle title="Contact Us" crumb="Contact" />

      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="section-title mb-30">
                <div className="sub-title">
                  <Star />
                  <span>Send us email</span>
                </div>
                <h2 className="title split-text split-in-right">Feel free to write</h2>
              </div>
              <TemplateContactForm showReset />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="section-title mb-30">
                  <div className="sub-title">
                    <Star />
                    <span>Need any help?</span>
                  </div>
                  <h2 className="title split-text split-in-right">Get in touch with us</h2>
                  <div className="text mt-3">
                    Lorem ipsum is simply free text available dolor sit amet consectetur notted
                    adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-phone-plus" />
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>Have any question?</h4>
                      <a href="tel:980089850">
                        <span>Free</span> +92 (020)-9850
                      </a>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-envelope1" />
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>Write email</h4>
                      <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-location" />
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>Visit anytime</h4>
                      <span>66 broklyn golden street. New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Location map"
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </section>

      <Footer padded />
    </>
  );
}
