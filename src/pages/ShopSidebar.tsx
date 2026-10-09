import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";
import ProductGrid from "../components/sections/ProductGrid";

const CATEGORIES = [
  "Cloud Solution",
  "Cyber Data",
  "SEO Marketing",
  "UI/UX Design",
  "Web Development",
  "Artifical Intelligence",
];

const POPULAR = [
  { name: "Best Headset", price: "$45.00" },
  { name: "Quality Battery", price: "$34.00" },
  { name: "Smart Watch", price: "$29.00" },
];

export default function ShopSidebar() {
  const [range, setRange] = useState<[number, number]>([10, 60]);

  return (
    <>
      <PageTitle title="Shop" crumb="Products" />

      <section className="featured-products">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="shop-sidebar">
                <div className="sidebar-search">
                  <form
                    action="#"
                    method="post"
                    className="search-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-group">
                      <input type="search" name="search-field" placeholder="Search..." required />
                      <button>
                        <i className="lnr lnr-icon-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h5 className="widget-title">Categories</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      {CATEGORIES.map((c, i) => (
                        <li key={i}>
                          <Link to="/product-details">{c}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget price-filters">
                  <div className="widget-title">
                    <h5 className="widget-title">Filter by Price</h5>
                  </div>
                  <div className="range-slider clearfix">
                    <div className="price-range-slider">
                      <input
                        type="range"
                        min={10}
                        max={99}
                        value={range[1]}
                        onChange={(e) =>
                          setRange([range[0], Number(e.target.value)])
                        }
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="clearfix">
                      <p>Price:</p>
                      <div className="title" />
                      <div className="input">
                        <input
                          type="text"
                          className="property-amount"
                          name="field-name"
                          readOnly
                          value={`${range[0]} - $${range[1]}`}
                        />
                      </div>
                      <input type="submit" value="Filter" />
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h5 className="widget-title">Popular Products</h5>
                  </div>
                  <div className="post-inner">
                    {POPULAR.map((p, i) => (
                      <div key={i} className="post">
                        <Link to="/product-details">{p.name}</Link>
                        <span className="price">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="mt-5 mt-lg-0">
                <ProductGrid colClass="col-lg-4 col-md-6 col-sm-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShopFooter />
    </>
  );
}
