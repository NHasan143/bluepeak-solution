import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";
import { useWeb3Forms } from "../lib/web3forms";

const GALLERY = [
  "product-details.png",
  "product-details2.png",
  "product-details3.png",
];

const RELATED = [
  { img: "1.jpg", name: "Headphone", tags: "pantry fruit" },
  { img: "2.jpg", name: "Lagage", tags: "dairy meat fruit" },
  { img: "3.jpg", name: "Watch", tags: "pantry fruit vagetables" },
  { img: "8.jpg", name: "SD Card", tags: "dairy pantry meat vagetables" },
];

function ReviewForm() {
  const { status, submit } = useWeb3Forms();
  return (
    <form
      id="contact_form"
      name="contact_form"
      onSubmit={(e) => {
        e.preventDefault();
        void submit(e.currentTarget);
      }}
    >
      <input type="hidden" name="subject" value="New product review from Bluepeak Solution" />
      <div className="mb-3">
        <textarea
          name="message"
          className="form-control required"
          rows={7}
          placeholder="Enter Message"
        />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <input name="name" className="form-control" type="text" placeholder="Enter Name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="email"
              className="form-control required email"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 column">
        <div className="review-box clearfix">
          <p>Your Review</p>
          <ul className="rating clearfix">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <i className="far fa-star" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 column">
        <div className="form-group clearfix">
          <div className="custom-controls-stacked">
            <label className="custom-control material-checkbox">
              <input type="checkbox" className="material-control-input" />
              <span className="material-control-indicator" />
              <span className="description">
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <input name="botcheck" className="form-control" type="hidden" value="" />
        <button
          type="submit"
          className="theme-btn btn-style-one"
          data-loading-text="Please wait..."
          disabled={status.state === "submitting"}
        >
          <span className="btn-title">
            {status.state === "submitting" ? "Please wait..." : "Submit Comment"}
          </span>
        </button>
      </div>
      {status.state === "success" && (
        <div className="alert alert-success" role="alert">
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div className="alert alert-danger" role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}

export default function ProductDetails() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "reviews">("desc");

  return (
    <>
      <PageTitle title="Product Deatils" crumb="Shop" />

      <section className="product-details pt-120">
        <div className="container pb-70">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="bxslider">
                <div className="slider-content">
                  <figure className="image-box">
                    <a
                      href={`/images/resource/products/${GALLERY[active]}`}
                      className="lightbox-image"
                    >
                      <img src={`/images/resource/products/${GALLERY[active]}`} alt="" />
                    </a>
                  </figure>
                  <div className="slider-pager">
                    <ul className="thumb-box">
                      {GALLERY.map((img, i) => (
                        <li key={i}>
                          <a
                            className={i === active ? "active" : undefined}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(i);
                            }}
                          >
                            <figure>
                              <img src={`/images/resource/products/${img}`} alt="" />
                            </figure>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 product-info">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  Backpack <span>$76.00</span>
                </h3>
              </div>
              <div className="product-details__reveiw">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fa fa-star" />
                ))}
                <span>2 Customer Reviews</span>
              </div>
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo
                  venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque
                  neque.
                </p>
                <p className="product-details__content-text2">
                  <strong>REF.</strong> 4231/406 <br />
                  Available in store
                </p>
              </div>

              <div className="product-details__quantity">
                <h3 className="product-details__quantity-title">Choose quantity</h3>
                <div className="quantity-box">
                  <button
                    type="button"
                    className="sub"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  />
                  <button
                    type="button"
                    className="add"
                    onClick={() => setQty((q) => Math.min(999, q + 1))}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>

              <div className="product-details__buttons">
                <div className="product-details__buttons-1">
                  <Link to="/checkout" className="theme-btn btn-style-one">
                    <span className="btn-title">Add to Cart</span>
                  </Link>
                </div>
                <div className="product-details__buttons-2">
                  <Link to="/product-details" className="theme-btn btn-style-one">
                    <span className="btn-title">Add to Wishlist</span>
                  </Link>
                </div>
              </div>
              <div className="product-details__social">
                <div className="title mt-10">
                  <h3>Share with friends</h3>
                </div>
                <ul className="social-icon-one product-share">
                  <li>
                    <a href="#">
                      <i className="fa fa-x" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-description">
        <div className="container pt-0 pb-90">
          <div className="product-discription">
            <div className="tabs-box">
              <div className="tab-btn-box text-center">
                <ul className="tab-btns tab-buttons clearfix">
                  <li
                    className={`tab-btn${tab === "desc" ? " active-btn" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Description
                  </li>
                  <li
                    className={`tab-btn${tab === "reviews" ? " active-btn" : ""}`}
                    onClick={() => setTab("reviews")}
                  >
                    Reviews
                  </li>
                </ul>
              </div>
              <div className="tabs-content">
                <div className={`tab${tab === "desc" ? " active-tab" : ""}`} id="tab-1">
                  <div className="text">
                    <h3 className="product-description__title">Description</h3>
                    <p className="product-description__text1">
                      Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                      many variations of passages of Lorem Ipsum available, but the majority have
                      alteration in some injected or words which don't look even slightly believable.
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrang hidden in the middle of text.
                    </p>
                    <div className="product-description__list">
                      <ul className="list-unstyled">
                        <li>
                          <p>
                            <span className="fa fa-arrow-right" /> Nam at elit nec neque suscipit
                            gravida.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fa fa-arrow-right" /> Aenean egestas orci eu maximus
                            tincidunt.
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="fa fa-arrow-right" /> Curabitur vel turpis id tellus
                            cursus laoreet.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p className="product-description__text2">
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                      as necessary, making this the first true generator on the Internet. It uses a
                      dictionary of over 200 Latin words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <div className={`tab${tab === "reviews" ? " active-tab" : ""}`} id="tab-2">
                  <div className="customer-comment">
                    <div className="row clearfix">
                      {[
                        { img: "testi1-1.png", name: "Jon D. William", date: "10 Jan, 2023 . 4:00 pm" },
                        { img: "testi1-2.png", name: "Aleesha Brown", date: "12 Feb, 2023 . 8:00 pm" },
                      ].map((c, i) => (
                        <div key={i} className="col-lg-6 col-md-6 col-sm-12 comment-column">
                          <div className="single-comment-box">
                            <div className="inner-box">
                              <figure className="comment-thumb">
                                <img src={`/images/resource/${c.img}`} alt="" />
                              </figure>
                              <div className="inner">
                                <ul className="rating clearfix">
                                  {Array.from({ length: 5 }).map((_, j) => (
                                    <li key={j}>
                                      <i className="fas fa-star" />
                                    </li>
                                  ))}
                                </ul>
                                <h5>
                                  {c.name}, <span>{c.date}</span>
                                </h5>
                                <p>
                                  Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des
                                  mauris commodo.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="comment-box">
                    <h3>Add Your Comments</h3>
                    <ReviewForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product">
        <div className="container pt-0 pb-90">
          <h3>Related Products</h3>
          <div className="row clearfix">
            <div className="col">
              <div className="mixitup-gallery">
                <div className="filter-list row">
                  {RELATED.map((p, i) => (
                    <div
                      key={i}
                      className={`product-block all mix ${p.tags} col-lg-3 col-md-6 col-sm-12`}
                    >
                      <div className="inner-box">
                        <div className="image">
                          <Link to="/product-details">
                            <img src={`/images/resource/products/${p.img}`} alt="" />
                          </Link>
                        </div>
                        <div className="content">
                          <h4>
                            <Link to="/product-details">{p.name}</Link>
                          </h4>
                          <span className="price">$32.00</span>
                          <span className="rating">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <i key={j} className="fa fa-star" />
                            ))}
                          </span>
                        </div>
                        <div className="icon-box">
                          <Link to="/product-details" className="ui-btn like-btn">
                            <i className="fa fa-heart" />
                          </Link>
                          <Link to="/checkout" className="ui-btn add-to-cart">
                            <i className="fa fa-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShopFooter />
    </>
  );
}
