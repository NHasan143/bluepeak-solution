import InterfaceIcon from "../components/common/InterfaceIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";
import { useWeb3Forms } from "../lib/web3forms";

const RELATED = [
  { name: "Headphone", tags: "pantry fruit" },
  { name: "Lagage", tags: "dairy meat fruit" },
  { name: "Watch", tags: "pantry fruit vagetables" },
  { name: "SD Card", tags: "dairy pantry meat vagetables" },
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
      <div className="mb-[16px]!">
        <textarea
          name="message"
          className="form-control required"
          rows={7}
          placeholder="Enter Message"
        />
      </div>
      <div className="flex! flex-wrap! -mx-3!">
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input name="name" className="form-control" type="text" placeholder="Enter Name" />
          </div>
        </div>
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
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
      <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-full! min-[768px]:w-full! min-[576px]:w-full! column">
        <div className="review-box clearfix">
          <p>Your Review</p>
          <ul className="rating clearfix">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <InterfaceIcon name="star-outline"  />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-full! min-[768px]:w-full! min-[576px]:w-full! column">
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
      <div className="mb-[16px]!">
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
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "reviews">("desc");

  return (
    <>
      <PageTitle title="Product Deatils" crumb="Shop" />

      <section className="product-details pt-[120px]!">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]! pb-[70px]!">
          <div className="flex! flex-wrap! -mx-3!">
            <div className="shrink-0! px-3! [.gutter-row>&]:mt-6! w-full! product-info">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  Backpack <span>$76.00</span>
                </h3>
              </div>
              <div className="product-details__reveiw">
                {Array.from({ length: 5 }).map((_, i) => (
                  <InterfaceIcon key={i} name="star" className="min-h-[30.4px]!" />
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
                    <InterfaceIcon name="minus"  />
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
                    <InterfaceIcon name="plus"  />
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
                <div className="title mt-[10px]!">
                  <h3>Share with friends</h3>
                </div>
                <ul className="social-icon-one product-share">
                  <li>
                    <a href="#">
                      <InterfaceIcon name="x"  />
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
      </section>

      <section className="product-description">
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]! pt-[0px]! pb-[90px]!">
          <div className="product-discription">
            <div className="tabs-box">
              <div className="tab-btn-box text-center!">
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
                      <ul className="list-none! pl-0!">
                        <li>
                          <p>
                            <InterfaceIcon name="arrow-right"  /> Nam at elit nec neque suscipit
                            gravida.
                          </p>
                        </li>
                        <li>
                          <p>
                            <InterfaceIcon name="arrow-right"  /> Aenean egestas orci eu maximus
                            tincidunt.
                          </p>
                        </li>
                        <li>
                          <p>
                            <InterfaceIcon name="arrow-right"  /> Curabitur vel turpis id tellus
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
                    <div className="flex! flex-wrap! -mx-3! clearfix">
                      {[
                        { name: "Jon D. William", date: "10 Jan, 2023 . 4:00 pm" },
                        { name: "Aleesha Brown", date: "12 Feb, 2023 . 8:00 pm" },
                      ].map((c, i) => (
                        <div key={i} className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12! min-[576px]:w-full! comment-column">
                          <div className="single-comment-box">
                            <div className="inner-box">
                              <div className="inner">
                                <ul className="rating clearfix">
                                  {Array.from({ length: 5 }).map((_, j) => (
                                    <li key={j}>
                                      <InterfaceIcon name="star"  />
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
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]! pt-[0px]! pb-[90px]!">
          <h3>Related Products</h3>
          <div className="flex! flex-wrap! -mx-3! clearfix">
            <div className="flex-1! px-3!">
              <div className="mixitup-gallery">
                <div className="filter-list flex! flex-wrap! -mx-3!">
                  {RELATED.map((p, i) => (
                    <div
                      key={i}
                      className={`product-block all mix ${p.tags} w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-3/12! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-full!`}
                    >
                      <div className="inner-box">
                        <div className="content">
                          <h4>
                            <Link to="/product-details">{p.name}</Link>
                          </h4>
                          <span className="price">$32.00</span>
                          <span className="rating">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <InterfaceIcon key={j} name="star"  />
                            ))}
                          </span>
                        </div>
                        <div className="icon-box">
                          <Link to="/product-details" className="ui-btn like-btn">
                            <InterfaceIcon name="heart"  />
                          </Link>
                          <Link to="/checkout" className="ui-btn add-to-cart">
                            <InterfaceIcon name="cart"  />
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
