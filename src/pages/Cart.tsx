import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";

const ITEMS = [
  { img: "1.jpg", name: "Winter Black Jacket", size: "Medium", price: "$36.00", qty: 1 },
  { img: "2.jpg", name: "Swan Crop V-Neck Tee", size: "Small", price: "$115.00", qty: 2 },
  { img: "3.jpg", name: "Blue Solid Casual Shirt", size: "Large", price: "$68.00", qty: 3 },
];

function QtyBox({ initial }: { initial: number }) {
  const [q, setQ] = useState(initial);
  return (
    <div className="product-details__quantity">
      <div className="quantity-box">
        <button type="button" className="sub" onClick={() => setQ((v) => Math.max(1, v - 1))}>
          <i className="fa fa-minus" />
        </button>
        <input
          type="number"
          value={q}
          onChange={(e) => setQ(Math.max(1, Number(e.target.value) || 1))}
        />
        <button type="button" className="add" onClick={() => setQ((v) => Math.min(999, v + 1))}>
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <>
      <PageTitle title="Cart" crumb="Cart" />

      <section>
        <div className="container pt-120 pb-100">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th />
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ITEMS.map((it, i) => (
                        <tr key={i} className="cart_item">
                          <td className="product-remove">
                            <a title="Remove this item" className="remove" href="#">
                              ×
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img alt="product" src={`/images/resource/products/${it.img}`} />
                            </a>
                          </td>
                          <td className="product-name">
                            <Link to="/product-details">{it.name}</Link>
                            <ul className="variation">
                              <li className="variation-size">
                                Size: <span>{it.size}</span>
                              </li>
                            </ul>
                          </td>
                          <td className="product-price">
                            <span className="amount">{it.price}</span>
                          </td>
                          <td className="product-quantity">
                            <QtyBox initial={it.qty} />
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{it.price}</span>
                          </td>
                        </tr>
                      ))}
                      <tr className="cart_item">
                        <td colSpan={3}>
                          <form
                            className="row g-3 coupon-form"
                            onSubmit={(e) => e.preventDefault()}
                          >
                            <div className="col-auto">
                              <input
                                type="text"
                                name="coupon_code"
                                className="input-text form-control mr-1"
                                id="coupon_code"
                                defaultValue=""
                                placeholder="Coupon code"
                              />
                            </div>
                            <div className="col-auto">
                              <button
                                type="submit"
                                className="apply-button"
                                name="apply_coupon"
                                value="Apply Coupon"
                              >
                                <span className="btn-title">Apply Coupon</span>
                              </button>
                            </div>
                          </form>
                        </td>
                        <td colSpan={2}>&nbsp;</td>
                        <td>
                          <button type="button" className="theme-btn btn-style-one">
                            <span className="btn-title">Update Cart</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-12 mt-30">
                <div className="row">
                  <div className="col-md-5">
                    <h4>Calculate Shipping</h4>
                    <form className="form" action="#" onSubmit={(e) => e.preventDefault()}>
                      <div className="mb-10">
                        <select className="form-control" defaultValue="">
                          <option value="">Select Country</option>
                          <option>Australia</option>
                          <option>UK</option>
                          <option>USA</option>
                        </select>
                      </div>
                      <div className="mb-10">
                        <input type="text" className="form-control" placeholder="State/country" />
                      </div>
                      <div className="mb-10">
                        <input type="text" className="form-control" placeholder="Postcod/zip" />
                      </div>
                      <div className="mb-30">
                        <button type="button" className="theme-btn btn-style-one">
                          <span className="btn-title">Update Totals</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-2" />
                  <div className="col-md-5">
                    <h4>Cart Totals</h4>
                    <table className="table table-bordered cart-total">
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>$180.00</td>
                        </tr>
                        <tr>
                          <td>Shipping and Handling</td>
                          <td>$70.00</td>
                        </tr>
                        <tr>
                          <td>Order Total</td>
                          <td>$250.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link className="theme-btn btn-style-one" to="/checkout">
                      <span className="btn-title">Proceed to Checkout</span>{" "}
                    </Link>
                  </div>
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
