import { pageClasses } from "../styles/pageUtilities";
import PageTitle from "../components/common/PageTitle";
import ShopFooter from "../components/layout/ShopFooter";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";

const ORDER = [
  { name: "Headphone", qty: 2, total: "$36.00" },
  { name: "Lagage", qty: 3, total: "$115.00" },
  { name: "Watch", qty: 1, total: "$68.00" },
];

const BANK_TEXT =
  "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.";

const PAYMENT: AccordionEntry[] = [
  {
    question: "Credir Card / Debit Card",
    answer: (
      <div className="payment-info">
        <div className="flex! flex-wrap! -mx-3! clearfix">
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12! min-[576px]:w-full! column">
            <div className="field-input mb-[16px]!">
              <input type="text" className={pageClasses("form-control")} name="name" placeholder="Name on the Card" required />
            </div>
          </div>
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12! min-[576px]:w-full! column">
            <div className="field-input mb-[16px]!">
              <input type="text" className={pageClasses("form-control")} name="number" placeholder="Card Number" required />
            </div>
          </div>
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-3/12! min-[768px]:w-6/12! min-[576px]:w-full! column">
            <div className="field-input mb-[16px]!">
              <input type="text" className={pageClasses("form-control")} name="date" placeholder="Expiry Date" required />
            </div>
          </div>
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-3/12! min-[768px]:w-6/12! min-[576px]:w-full! column">
            <div className="field-input mb-[16px]!">
              <input type="text" className={pageClasses("form-control")} name="code" placeholder="Security Code" required />
            </div>
          </div>
          <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-full! min-[576px]:w-full! column">
            <div className="field-input message-btn">
              <button type="submit" className={pageClasses("theme-btn btn-style-one")} data-loading-text="Please wait...">
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
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]! pt-[70px]! pb-[100px]!">
          <div className="section-content">
            <form id="checkout-form" action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex! flex-wrap! -mx-3! mt-[30px]!">
                <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                  <div className="billing-details">
                    <h3 className="mb-[30px]!">Billing Details</h3>
                    <div className="flex! flex-wrap! -mx-3!">
                      <div className="mb-[16px]! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                        <label htmlFor="checkuot-form-fname">First Name</label>
                        <input id="checkuot-form-fname" type="text" className={pageClasses("form-control")} placeholder="First Name" />
                      </div>
                      <div className="mb-[16px]! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                        <label htmlFor="checkuot-form-lname">Last Name</label>
                        <input id="checkuot-form-lname" type="text" className={pageClasses("form-control")} placeholder="Last Name" />
                      </div>
                      <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-full!">
                        <div className="mb-[16px]!">
                          <label htmlFor="checkuot-form-cname">Company Name</label>
                          <input id="checkuot-form-cname" type="text" className={pageClasses("form-control")} placeholder="Company Name" />
                        </div>
                        <div className="mb-[16px]!">
                          <label htmlFor="checkuot-form-email">Email Address</label>
                          <input id="checkuot-form-email" type="email" className={pageClasses("form-control")} placeholder="Email Address" />
                        </div>
                        <div className="mb-[16px]!">
                          <label htmlFor="checkuot-form-address">Address</label>
                          <input id="checkuot-form-address" type="text" className={pageClasses("form-control")} placeholder="Street address" />
                        </div>
                        <div className="mb-[16px]!">
                          <input type="text" className={pageClasses("form-control")} placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                      </div>
                      <div className="mb-[16px]! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                        <label htmlFor="checkuot-form-city">City</label>
                        <input id="checkuot-form-city" type="text" className={pageClasses("form-control")} placeholder="City" />
                      </div>
                      <div className="mb-[16px]! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                        <label>State/Province</label>
                        <select className={pageClasses("form-control")} defaultValue="Select Country">
                          {COUNTRIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-[16px]! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                        <label htmlFor="checkuot-form-zip">Zip/Postal Code</label>
                        <input id="checkuot-form-zip" type="text" className={pageClasses("form-control")} placeholder="Zip/Postal Code" />
                      </div>
                      <div className="mb-[16px]! w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                        <label>Country</label>
                        <select className={pageClasses("form-control")} defaultValue="Select Country">
                          {COUNTRIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-6/12!">
                  <h3>Additional information</h3>
                  <label htmlFor="order_comments">
                    Order notes&nbsp;<span className="optional">(optional)</span>
                  </label>
                  <textarea
                    id="order_comments"
                    className={pageClasses("form-control")}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    rows={3}
                  />
                </div>
                <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-full! mt-[30px]!">
                  <h3>Your order</h3>
                  <table className={pageClasses("table table-striped table-bordered tbl-shopping-cart")}>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ORDER.map((o, i) => (
                        <tr key={i}>
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
                        <td>$180.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>$250.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[768px]:w-full! mt-[60px]!">
                  <div className={pageClasses("payment-method")}>
                    <h3>Choose a Payment Method</h3>
                    <Accordion
                      items={PAYMENT}
                      defaultOpen={0}
                      icon="chevron"
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
