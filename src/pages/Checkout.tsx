import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";

const ORDER = [
  { img: "1.jpg", name: "Headphone", qty: 2, total: "$36.00" },
  { img: "2.jpg", name: "Lagage", qty: 3, total: "$115.00" },
  { img: "3.jpg", name: "Watch", qty: 1, total: "$68.00" },
];

const BANK_TEXT =
  "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.";

const PAYMENT: AccordionEntry[] = [
  {
    question: "Credir Card / Debit Card",
    answer: (
      <div className="payment-info">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <div className="field-input mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name on the Card" required />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <div className="field-input mb-3">
              <input type="text" className="form-control" name="number" placeholder="Card Number" required />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 column">
            <div className="field-input mb-3">
              <input type="text" className="form-control" name="date" placeholder="Expiry Date" required />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 column">
            <div className="field-input mb-3">
              <input type="text" className="form-control" name="code" placeholder="Security Code" required />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 column">
            <div className="field-input message-btn">
              <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait...">
                <span className="btn-title">Make Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  { question: "Direct Bank Transfer", answer: <div className="payment-info"><p>{BANK_TEXT}</p></div> },
  { question: "Cheque Payment", answer: <div className="payment-info"><p>{BANK_TEXT}</p></div> },
  { question: "Other Payment", answer: <div className="payment-info"><p>{BANK_TEXT}</p></div> },
];

const COUNTRIES = ["Select Country", "Australia", "UK", "USA"];

export default function Checkout() {
  return (
    <>
      <PageTitle title="Checkout" crumb="Shop" />

      <section>
        <div className="container pt-70 pb-100">
          <div className="section-content">
            <form id="checkout-form" action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="row mt-30">
                <div className="col-md-6">
                  <div className="billing-details">
                    <h3 className="mb-30">Billing Details</h3>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="checkuot-form-fname">First Name</label>
                        <input id="checkuot-form-fname" type="text" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="checkuot-form-lname">Last Name</label>
                        <input id="checkuot-form-lname" type="text" className="form-control" placeholder="Last Name" />
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label htmlFor="checkuot-form-cname">Company Name</label>
                          <input id="checkuot-form-cname" type="text" className="form-control" placeholder="Company Name" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="checkuot-form-email">Email Address</label>
                          <input id="checkuot-form-email" type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="checkuot-form-address">Address</label>
                          <input id="checkuot-form-address" type="text" className="form-control" placeholder="Street address" />
                        </div>
                        <div className="mb-3">
                          <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="checkuot-form-city">City</label>
                        <input id="checkuot-form-city" type="text" className="form-control" placeholder="City" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label>State/Province</label>
                        <select className="form-control" defaultValue="Select Country">
                          {COUNTRIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="checkuot-form-zip">Zip/Postal Code</label>
                        <input id="checkuot-form-zip" type="text" className="form-control" placeholder="Zip/Postal Code" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label>Country</label>
                        <select className="form-control" defaultValue="Select Country">
                          {COUNTRIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>Additional information</h3>
                  <label htmlFor="order_comments">
                    Order notes&nbsp;<span className="optional">(optional)</span>
                  </label>
                  <textarea
                    id="order_comments"
                    className="form-control"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    rows={3}
                  />
                </div>
                <div className="col-md-12 mt-30">
                  <h3>Your order</h3>
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ORDER.map((o, i) => (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img alt="product" src={`/images/resource/products/${o.img}`} />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">{o.name}</a> x {o.qty}
                          </td>
                          <td>
                            <span className="amount">{o.total}</span>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>&nbsp;</td>
                        <td>$180.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>&nbsp;</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>&nbsp;</td>
                        <td>$250.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-12 mt-60">
                  <div className="payment-method">
                    <h3>Choose a Payment Method</h3>
                    <Accordion
                      items={PAYMENT}
                      defaultOpen={0}
                      iconClass="lnr-icon-chevron-down"
                      itemWow=""
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ShopFooter />
    </>
  );
}
