import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="">
      <div className="auto-container pt-70 pb-100">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-page__inner theme-btn-main">
              <div className="error-page__title-box">
                <img src="/images/resource/404.png" alt="" />
                <h3 className="error-page__sub-title mt-50">Page not found!</h3>
              </div>
              <p className="error-page__text">
                Sorry we can't find that page! The page you are looking <br />
                for was never existed.
              </p>
              <form
                className="error-page__form"
                role="search"
                aria-label="Search Form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="error-page__form-input">
                  <label htmlFor="error-search" className="visually-hidden">
                    Search
                  </label>
                  <input
                    type="search"
                    id="error-search"
                    name="s"
                    placeholder="Search here"
                    required
                    aria-required="true"
                  />
                  <button type="submit" aria-label="Submit Search">
                    <i className="lnr lnr-icon-magnifier" aria-hidden="true" />
                  </button>
                </div>
              </form>
              <Link to="/" className="theme-btn btn-style-one transform">
                <span className="btn-title">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
