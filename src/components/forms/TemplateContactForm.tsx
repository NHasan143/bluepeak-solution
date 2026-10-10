import { pageClasses } from "../../styles/pageUtilities";
import { useId } from "react";
import { useWeb3Forms } from "../../lib/web3forms";

type Props = {
  namePlaceholder?: string;
  phonePlaceholder?: string;
  messageRows?: number;
  buttonLabel?: string;
  showReset?: boolean;
  buttonWrapClass?: string;
  subject?: string;
  variant?: "template" | "tailwind";
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
  variant = "template",
}: Props) {
  const { status, submit, reset } = useWeb3Forms();
  const fieldId = useId();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(e.currentTarget);
  };

  if (variant === "tailwind") {
    const inputClass = "block! min-h-14! w-full! rounded-xl! border! border-solid! border-[#3b4135]! bg-white/[0.06]! px-5! py-4! text-base! leading-6! text-white! caret-[#D9F45F]! shadow-none! placeholder:text-[#b9beb6]! transition-colors! focus:border-[#D9F45F]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-2! motion-reduce:transition-none!";
    const fields = [
      { name: "name", label: "Name", type: "text", placeholder: namePlaceholder, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", placeholder: "Enter Email", autoComplete: "email", required: true },
      { name: "form_subject", label: "Subject", type: "text", placeholder: "Enter Subject" },
      { name: "form_phone", label: "Phone", type: "tel", placeholder: phonePlaceholder, autoComplete: "tel" },
    ];
    return (
      <form id="contact_form" name="contact_form" onSubmit={onSubmit} aria-busy={status.state === "submitting"} className="m-0!">
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="botcheck" value="" />
        <div className="grid! gap-5! sm:grid-cols-2!">
          {fields.map(({ label, name, ...attributes }) => (
            <div key={name} className="min-w-0!">
              <label htmlFor={`${fieldId}-${name}`} className="mb-2! block! text-sm! font-medium! text-[#b9beb6]!">{label}{attributes.required ? " (required)" : ""}</label>
              <input id={`${fieldId}-${name}`} name={name} className={pageClasses(inputClass)} {...attributes} />
            </div>
          ))}
        </div>
        <div className="mt-5!">
          <label htmlFor={`${fieldId}-message`} className="mb-2! block! text-sm! font-medium! text-[#b9beb6]!">Message</label>
          <textarea id={`${fieldId}-message`} name="message" className={`${inputClass} min-h-[200px]! resize-y!`} rows={messageRows} placeholder="Enter Message" />
        </div>
        <div className="mt-6! flex! flex-wrap! gap-3!">
          <button type="submit" disabled={status.state === "submitting"} className="inline-flex! min-h-14! items-center! justify-center! rounded-full! border-0! bg-[#D9F45F]! px-8! py-4! text-base! font-semibold! text-black! transition-colors! hover:bg-[#e6fa94]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-4! disabled:cursor-wait! disabled:opacity-60! motion-reduce:transition-none!">
            {status.state === "submitting" ? "Please wait..." : buttonLabel}
          </button>
          {showReset && <button type="reset" onClick={reset} className="inline-flex! min-h-14! items-center! justify-center! rounded-full! border! border-solid! border-[#3b4135]! bg-transparent! px-8! py-4! text-base! font-semibold! text-white! transition-colors! hover:border-[#D9F45F]! hover:text-[#D9F45F]! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-4! motion-reduce:transition-none!">Reset</button>}
        </div>
        {(status.state === "success" || status.state === "error") && (
          <div role="alert" className={`mt-5! rounded-xl! border! border-solid! p-4! text-base! leading-relaxed! ${status.state === "success" ? "border-[#D9F45F]/50! bg-[#D9F45F]/10! text-[#D9F45F]!" : "border-[#ffabab]/50! bg-[#ffabab]/10! text-[#ffabab]!"}`}>
            {status.message}
          </div>
        )}
      </form>
    );
  }

  return (
    <form id="contact_form" name="contact_form" onSubmit={onSubmit}>
      <input type="hidden" name="subject" value={subject} />
      <div className="flex! flex-wrap! -mx-3!">
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input name="name" className={pageClasses("form-control")} type="text" placeholder={namePlaceholder} />
          </div>
        </div>
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input
              name="email"
              className={pageClasses("form-control required email")}
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex! flex-wrap! -mx-3!">
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input
              name="form_subject"
              className={pageClasses("form-control required")}
              type="text"
              placeholder="Enter Subject"
            />
          </div>
        </div>
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input
              name="form_phone"
              className={pageClasses("form-control")}
              type="text"
              placeholder={phonePlaceholder}
            />
          </div>
        </div>
      </div>
      <div className="mb-[16px]!">
        <textarea
          name="message"
          className={pageClasses("form-control required")}
          rows={messageRows}
          placeholder="Enter Message"
        />
      </div>
      <div className={pageClasses(buttonWrapClass)}>
        <input name="botcheck" className={pageClasses("form-control")} type="hidden" value="" />
        <button
          type="submit"
          className={pageClasses("theme-btn btn-style-one transform")}
          data-loading-text="Please wait..."
          disabled={status.state === "submitting"}
        >
          <span className="btn-title">
            {status.state === "submitting" ? "Please wait..." : buttonLabel}
          </span>
        </button>
        {showReset && (
          <button type="reset" className={pageClasses("theme-btn btn-style-one transform")}>
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
