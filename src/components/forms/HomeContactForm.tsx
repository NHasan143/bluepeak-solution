import { pageClasses } from "../../styles/pageUtilities";
import { useWeb3Forms } from "../../lib/web3forms";

export default function HomeContactForm() {
  const { status, submit } = useWeb3Forms();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(e.currentTarget);
  };

  return (
    <form onSubmit={onSubmit} id="contact-form">
      <input type="hidden" name="subject" value="New lead from Blupeak Solutions website" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden!"

        tabIndex={-1}
        autoComplete="off"
      />
      <div className="flex! flex-wrap! -mx-3!">
        <div className="form-group w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12!">
          <label htmlFor="fName">Name *</label>
          <input type="text" id="fName" name="name" placeholder="Your Full Name" required />
        </div>
        <div className="form-group w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12!">
          <label htmlFor="eAddress">Email Address *</label>
          <input type="email" id="eAddress" name="email" placeholder="Email Address" required />
        </div>
        <div className="form-group w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12!">
          <label htmlFor="ysubject">Subject*</label>
          <input type="text" id="ysubject" name="ysubject" placeholder="Your Subject" />
        </div>
        <div className="form-group w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12! min-[768px]:w-6/12!">
          <label htmlFor="ybudget">Your Budget </label>
          <input type="text" id="ybudget" name="ybudget" placeholder="Write Your Budget Range" />
        </div>
        <div className="form-group w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-full!">
          <label htmlFor="yMessage">Message </label>
          <textarea name="message" id="yMessage" placeholder="Your Message" rows={2} />
        </div>
        <div className="form-group w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-full!">
          <button
            type="submit"
            className={pageClasses("theme-btn btn-style-four")}
            name="submit-form"
            disabled={status.state === "submitting"}
          >
            <span className="btn-title">
              {status.state === "submitting" ? "Sending..." : "Send Message"}
            </span>
            <span className="dot-box">
              <span className="dot-item" />
            </span>
          </button>
          {status.state === "success" && (
            <div className="alert alert-success mt-[16px]!" role="alert">
              {status.message}
            </div>
          )}
          {status.state === "error" && (
            <div className="alert alert-danger mt-[16px]!" role="alert">
              {status.message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
