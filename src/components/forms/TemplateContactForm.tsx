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
  tone?: "dark" | "light";
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
  buttonWrapClass = "mb-12! theme-btn-main",
  subject = "New lead from Bluepeak Solution website",
  variant = "template",
  tone = "dark",
}: Props) {
  const { status, submit, reset } = useWeb3Forms();
  const fieldId = useId();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(e.currentTarget);
  };

  if (variant === "tailwind") {
    const light = tone === "light";
    const focusClass = `focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-offset-2! ${light ? "focus-visible:outline-[#C3422A]!" : "focus-visible:outline-[#FF593E]!"}`;
    const inputClass = `block! min-h-14! w-full! rounded-xl! border! border-solid! px-5! py-4! text-base! leading-6! shadow-none! transition-colors! motion-reduce:transition-none! ${focusClass} ${light ? "border-[#94837c]! bg-[#faf8f7]! text-[#261d1a]! caret-[#C3422A]! placeholder:text-[#66544e]! hover:border-[#C3422A]! focus:border-[#C3422A]! focus:bg-white!" : "border-[#3b4135]! bg-white/[0.06]! text-white! caret-[#FF593E]! placeholder:text-[#b9beb6]! focus:border-[#FF593E]!"}`;
    const labelClass = `mb-2! block! text-sm! font-medium! ${light ? "text-[#261d1a]!" : "text-[#b9beb6]!"}`;
    const noticeClass = status.state === "success"
      ? light ? "border-[#C3422A]/30! bg-[#fff1ed]! text-[#783b2b]!" : "border-[#064C44]/50! bg-[#064C44]/20! text-[#4ef0d0]!"
      : light ? "border-[#C3422A]/40! bg-[#fff1ed]! text-[#9d3020]!" : "border-[#ffabab]/50! bg-[#ffabab]/10! text-[#ffabab]!";
    const fields = [
      { name: "name", label: "Name", type: "text", placeholder: namePlaceholder, autoComplete: "name", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "Enter Email", autoComplete: "email", required: true },
      { name: "form_subject", label: "Subject", type: "text", placeholder: "Enter Subject", required: true },
      { name: "form_phone", label: "Phone", type: "tel", placeholder: phonePlaceholder, autoComplete: "tel" },
    ];
    return (
      <form id="contact_form" name="contact_form" onSubmit={onSubmit} aria-busy={status.state === "submitting"} className="m-0!">
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="botcheck" value="" />
        <div className="grid! gap-5! sm:grid-cols-2!">
          {fields.map(({ label, name, ...attributes }) => (
            <div key={name} className="min-w-0!">
              <label htmlFor={`${fieldId}-${name}`} className={labelClass}>
                {label}{attributes.required && <span aria-hidden="true" className={light ? "text-[#C3422A]!" : "text-[#FF593E]!"}> *</span>}
              </label>
              <input id={`${fieldId}-${name}`} name={name} className={pageClasses(inputClass)} {...attributes} />
            </div>
          ))}
        </div>
        <div className="mt-5!">
          <label htmlFor={`${fieldId}-message`} className={labelClass}>
            Message<span aria-hidden="true" className={light ? "text-[#C3422A]!" : "text-[#FF593E]!"}> *</span>
          </label>
          <textarea id={`${fieldId}-message`} name="message" className={`${inputClass} min-h-[200px]! resize-y!`} rows={messageRows} placeholder="Enter Message" required />
        </div>
        <div className="mt-6! flex! flex-wrap! gap-3!">
          <button type="submit" disabled={status.state === "submitting"} className={`inline-flex! min-h-14! items-center! justify-center! rounded-full! border-0! px-8! py-4! text-base! font-semibold! transition-colors! ${light ? "bg-[var(--theme-color-coral)]! text-[#261d1a]! hover:bg-[#f24c32]!" : "bg-[#064C44]! text-white! hover:bg-[#043630]!"} ${focusClass} disabled:cursor-wait! disabled:opacity-60! motion-reduce:transition-none!`}>
            {status.state === "submitting" ? "Please wait..." : buttonLabel}
          </button>
          {showReset && <button type="reset" onClick={reset} className={`inline-flex! min-h-14! items-center! justify-center! rounded-full! border! border-solid! bg-transparent! px-8! py-4! text-base! font-semibold! transition-colors! ${focusClass} motion-reduce:transition-none! ${light ? "border-[#C3422A]! text-[#C3422A]! hover:bg-[#fff1ed]!" : "border-[#3b4135]! text-white! hover:border-[#FF593E]! hover:text-[#FF593E]!"}`}>Reset</button>}
        </div>
        {(status.state === "success" || status.state === "error") && (
          <div role="alert" className={`mt-5! rounded-xl! border! border-solid! p-4! text-base! leading-relaxed! ${noticeClass}`}>
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
            <input name="name" className={pageClasses("field-input")} type="text" placeholder={namePlaceholder} />
          </div>
        </div>
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input
              name="email"
              className={pageClasses("field-input required email")}
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
              className={pageClasses("field-input required")}
              type="text"
              placeholder="Enter Subject"
            />
          </div>
        </div>
        <div className="w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[576px]:w-6/12!">
          <div className="mb-[16px]!">
            <input
              name="form_phone"
              className={pageClasses("field-input")}
              type="text"
              placeholder={phonePlaceholder}
            />
          </div>
        </div>
      </div>
      <div className="mb-[16px]!">
        <textarea
          name="message"
          className={pageClasses("field-input required")}
          rows={messageRows}
          placeholder="Enter Message"
        />
      </div>
      <div className={pageClasses(buttonWrapClass)}>
        <input name="botcheck" className={pageClasses("field-input")} type="hidden" value="" />
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
        <div className={pageClasses("form-notice form-notice-success")} role="alert">
          {status.message}
        </div>
      )}
      {status.state === "error" && (
        <div className={pageClasses("form-notice form-notice-error")} role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}
