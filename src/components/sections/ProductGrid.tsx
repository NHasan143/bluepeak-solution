import { useState } from "react";
import { Link } from "react-router-dom";
import { SHOP_FILTERS, PRODUCTS, type Product } from "../../pages/shopData";

function ProductBlock({ p, colClass }: { p: Product; colClass: string }) {
  return (
    <div className={`product-block all mix ${p.tags.join(" ")} ${colClass}`}>
      <div className="inner-box">
        <div className="content">
          <h4>
            <Link to="/product-details">{p.name}</Link>
          </h4>
          <span className="price">{p.price}</span>
          <span className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fa fa-star" />
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
  );
}

/**
 * The MixItUp product gallery from shop-products.html, reimplemented with
 * React state instead of the jQuery mixitup plugin.
 */
export default function ProductGrid({
  colClass = "col-lg-3 col-md-6 col-sm-12",
}: {
  colClass?: string;
}) {
  const [filter, setFilter] = useState("all");
  const visible =
    filter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.tags.includes(filter));

  return (
    <div className="mixitup-gallery">
      <div className="filters clearfix">
        <ul className="filter-tabs filter-btns clearfix">
          {SHOP_FILTERS.map((f) => (
            <li
              key={f.key}
              className={`filter${filter === f.key ? " active" : ""}`}
              data-role="button"
              data-filter={f.key === "all" ? "all" : `.${f.key}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-list row">
        {visible.map((p, i) => (
          <ProductBlock key={p.name + i} p={p} colClass={colClass} />
        ))}
      </div>
    </div>
  );
}
