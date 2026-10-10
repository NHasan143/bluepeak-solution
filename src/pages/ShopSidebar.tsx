import InterfaceIcon from "../components/common/InterfaceIcon";
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
        <div className="mx-auto! w-full! max-w-[1320px]! px-[15px]!">
          <div className="flex! flex-wrap! -mx-3! clearfix">
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-3/12! min-[768px]:w-full! min-[576px]:w-full!">
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
                        <InterfaceIcon name="search"  />
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
                          <Link to="/product-details"><InterfaceIcon name="angle-right" className="absolute! left-0! top-[6px]! text-[10px]!" />{c}</Link>
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
            <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-9/12! min-[768px]:w-full! min-[576px]:w-full! content-side">
              <div className="mt-[48px]! min-[992px]:mt-[0px]!">
                <ProductGrid colClass="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-4/12! min-[768px]:w-6/12! min-[576px]:w-full!" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShopFooter />
    </>
  );
}
