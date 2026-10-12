import { useWeb3Forms } from "../../lib/web3forms";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";

export default function HomeContactForm() {
  const { status, submit } = useWeb3Forms();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(e.currentTarget);
  };

  const labelClass = "block! text-xs! sm:text-sm! font-semibold! text-white/95! mb-2! tracking-wide!";
  const inputClass =
    "block! w-full! rounded-xl! border! border-white/20! bg-[#032c27]/90! px-4! py-3.5! text-sm! sm:text-base! text-white! caret-[#FF593E]! placeholder:text-white/40! transition-all! duration-200! hover:border-white/40! focus:border-[#FF593E]! focus:bg-[#021f1b]! focus:outline-none! focus:ring-2! focus:ring-[#FF593E]/30! motion-reduce:transition-none!";

  return (
    <form onSubmit={onSubmit} id="contact-form" className="relative! z-10! m-0!">
      <input type="hidden" name="subject" value="New lead from Blupeak Solutions website" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden!"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid! grid-cols-1! sm:grid-cols-2! gap-5!">
        <div className="min-w-0!">
          <label htmlFor="fName" className={labelClass}>
            Name <span className="text-[#FF593E]! font-bold">*</span>
          </label>
          <input
            type="text"
            id="fName"
            name="name"
            placeholder="Your Full Name"
            required
            className={inputClass}
          />
        </div>

        <div className="min-w-0!">
          <label htmlFor="eAddress" className={labelClass}>
            Email Address <span className="text-[#FF593E]! font-bold">*</span>
          </label>
          <input
            type="email"
            id="eAddress"
            name="email"
            placeholder="name@company.com"
            required
            className={inputClass}
          />
        </div>

        <div className="min-w-0!">
          <label htmlFor="ysubject" className={labelClass}>
            Subject
          </label>
          <input
            type="text"
            id="ysubject"
            name="ysubject"
            placeholder="How can we help?"
            className={inputClass}
          />
        </div>

        <div className="min-w-0!">
          <label htmlFor="ybudget" className={labelClass}>
            Budget Range
          </label>
          <input
            type="text"
            id="ybudget"
            name="ybudget"
            placeholder="e.g. $5k - $15k"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2! min-w-0!">
          <label htmlFor="yMessage" className={labelClass}>
            Message <span className="text-[#FF593E]! font-bold">*</span>
          </label>
          <textarea
            name="message"
            id="yMessage"
            placeholder="Tell us about your project, target market, or growth goals..."
            rows={4}
            required
            className={`${inputClass} resize-y! min-h-[110px]!`}
          />
        </div>

        <div className="sm:col-span-2! pt-2!">
          <button
            type="submit"
            name="submit-form"
            disabled={status.state === "submitting"}
            className="group! relative! inline-flex! items-center! justify-center! gap-3! rounded-full! bg-white! px-8! py-4! text-base! font-bold! text-[#064C44]! shadow-lg! transition-all! duration-300! hover:bg-[#FF593E]! hover:text-white! hover:shadow-[0_8px_25px_rgba(255,89,62,0.35)]! focus-visible:outline-2! focus-visible:outline-white! focus-visible:outline-offset-2! disabled:opacity-60! disabled:cursor-not-allowed! cursor-pointer! w-full! sm:w-auto!"
          >
            {status.state === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin! shrink-0!" aria-hidden="true" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send
                  size={18}
                  className="shrink-0! transition-transform! duration-300! group-hover:translate-x-1! group-hover:-translate-y-0.5!"
                  aria-hidden="true"
                />
              </>
            )}
          </button>

          {status.state === "success" && (
            <div
              className="mt-4! flex! items-center! gap-3! rounded-xl! border! border-[#0d6e63]! bg-[#032c27]! p-4! text-sm! font-medium! text-white! shadow-md!"
              role="alert"
            >
              <Check size={20} className="text-[#FF593E]! shrink-0!" />
              <span>{status.message}</span>
            </div>
          )}

          {status.state === "error" && (
            <div
              className="mt-4! flex! items-center! gap-3! rounded-xl! border! border-red-500/40! bg-red-950/70! p-4! text-sm! font-medium! text-white! shadow-md!"
              role="alert"
            >
              <AlertCircle size={20} className="text-red-400! shrink-0!" />
              <span>{status.message}</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
