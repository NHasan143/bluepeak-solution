import { useState } from "react";

/**
 * Lead submission via Web3Forms (https://web3forms.com).
 *
 * Put your access key in a `.env` file at the project root:
 *   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
 *
 * Until a key is set, submissions are rejected locally with a clear message
 * so the form is still testable.
 */
export const WEB3FORMS_ACCESS_KEY = import.meta.env
  .VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function useWeb3Forms() {
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });

  async function submit(form: HTMLFormElement) {
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({
        state: "error",
        message:
          "Form not configured yet — add VITE_WEB3FORMS_ACCESS_KEY to your .env file.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = (await res.json()) as { success: boolean; message: string };
      if (data.success) {
        setStatus({
          state: "success",
          message: "Thanks! Your message has been sent.",
        });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return { status, submit, reset: () => setStatus({ state: "idle" }) };
}
