import { useWeb3Forms } from "../../lib/web3forms";

export default function HomeContactForm() {
  const { status, submit } = useWeb3Forms();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(e.currentTarget);
  };

  return (
    <form onSubmit={onSubmit} id="contact-form">
      <input type="hidden" name="subject" value="New lead from Bluepeak Solution website" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="row">
        <div className="form-group col-lg-6 col-md-6">
          <label htmlFor="fName">Name *</label>
          <input type="text" id="fName" name="name" placeholder="Your Full Name" required />
        </div>
        <div className="form-group col-lg-6 col-md-6">
          <label htmlFor="eAddress">Email Address *</label>
          <input type="email" id="eAddress" name="email" placeholder="Email Address" required />
        </div>
        <div className="form-group col-lg-6 col-md-6">
          <label htmlFor="ysubject">Subject*</label>
          <input type="text" id="ysubject" name="ysubject" placeholder="Your Subject" />
        </div>
        <div className="form-group col-lg-6 col-md-6">
          <label htmlFor="ybudget">Your Budget </label>
          <input type="text" id="ybudget" name="ybudget" placeholder="Write Your Budget Range" />
        </div>
        <div className="form-group col-lg-12">
          <label htmlFor="yMessage">Message </label>
          <textarea name="message" id="yMessage" placeholder="Your Message" rows={2} />
        </div>
        <div className="form-group col-lg-12">
          <button
            type="submit"
            className="theme-btn btn-style-four"
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
            <div className="alert alert-success mt-3" role="alert">
              {status.message}
            </div>
          )}
          {status.state === "error" && (
            <div className="alert alert-danger mt-3" role="alert">
              {status.message}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
