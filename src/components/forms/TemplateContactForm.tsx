import { useWeb3Forms } from "../../lib/web3forms";

type Props = {
  namePlaceholder?: string;
  phonePlaceholder?: string;
  messageRows?: number;
  buttonLabel?: string;
  showReset?: boolean;
  buttonWrapClass?: string;
  subject?: string;
};

/**
 * The `#contact_form` used on the Contact and Team Details pages.
 * Submits leads through Web3Forms (see src/lib/web3forms.ts).
 */
export default function TemplateContactForm({
  namePlaceholder = "Enter Name",
  phonePlaceholder = "Enter Phone",
  messageRows = 7,
  buttonLabel = "Send message",
  showReset = false,
  buttonWrapClass = "mb-5 theme-btn-main",
  subject = "New lead from Bluepeak Solution website",
}: Props) {
  const { status, submit } = useWeb3Forms();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(e.currentTarget);
  };

  return (
    <form id="contact_form" name="contact_form" onSubmit={onSubmit}>
      <input type="hidden" name="subject" value={subject} />
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <input name="name" className="form-control" type="text" placeholder={namePlaceholder} />
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
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="form_subject"
              className="form-control required"
              type="text"
              placeholder="Enter Subject"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-3">
            <input
              name="form_phone"
              className="form-control"
              type="text"
              placeholder={phonePlaceholder}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          className="form-control required"
          rows={messageRows}
          placeholder="Enter Message"
        />
      </div>
      <div className={buttonWrapClass}>
        <input name="botcheck" className="form-control" type="hidden" value="" />
        <button
          type="submit"
          className="theme-btn btn-style-one transform"
          data-loading-text="Please wait..."
          disabled={status.state === "submitting"}
        >
          <span className="btn-title">
            {status.state === "submitting" ? "Please wait..." : buttonLabel}
          </span>
        </button>
        {showReset && (
          <button type="reset" className="theme-btn btn-style-one transform">
            <span className="btn-title">Reset</span>
          </button>
        )}
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
