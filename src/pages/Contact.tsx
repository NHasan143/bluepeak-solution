import { Mail, MapPin, Phone } from "lucide-react";
import { usePageMetadata } from "../hooks/usePageMetadata";
import Footer from "../components/layout/Footer";
import TextReveal from "../components/common/TextReveal";
import TemplateContactForm from "../components/forms/TemplateContactForm";

const focusRing = "focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#C3422A]! focus-visible:outline-offset-4!";
const contactDetails = [
  { icon: Phone, title: "Have any question?", text: "01849-415421", href: "tel:01849415421" },
  { icon: Mail, title: "Write email", text: "contact@blupeaksolutions.com", href: "mailto:contact@blupeaksolutions.com" },
  { icon: MapPin, title: "Visit anytime", text: "" },
];

export default function Contact() {
  usePageMetadata(
    "Contact Us | Blupeak Solutions Sales & Marketing Agency",
    "Contact Blupeak Solutions to discuss your sales, marketing, SEO, software or automation needs. Send your inquiry and our team will get back to you soon.",
  );

  return (
    <>
      <main className="bg-white! text-[#261d1a]! selection:bg-[var(--theme-color-coral)]! selection:text-[#261d1a]!" data-contact-page>
        <section aria-labelledby="contact-title" className="mx-auto! max-w-[1424px]! px-5! pt-30! pb-8! sm:px-8! sm:pt-32! sm:pb-10! lg:px-16!">
          <h1 id="contact-title" className="m-0! font-[family-name:var(--heading-font-family)]! text-[35px]! leading-[40px]! font-normal! tracking-[-0.03em]! text-[#261d1a]! text-balance! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!">
            <TextReveal text="Feel free to write to us" emphasis={{ text: "write to us", className: "font-[family-name:var(--style-font)]! font-normal! text-[#FF593E]! italic!" }} />
          </h1>
        </section>

        <section aria-label="Contact form and details" className="mx-auto! grid! max-w-[1424px]! gap-12! px-5! pb-16! sm:px-8! sm:pb-24! lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]! lg:gap-16! lg:px-16!">
          <div className="min-w-0!">
            <TemplateContactForm showReset variant="tailwind" tone="light" />
          </div>
          <div className="min-w-0!">
            <h2 className="m-0! font-[family-name:var(--heading-font-family)]! text-[32px]! leading-[1.2]! font-normal! tracking-[-0.02em]! text-[#261d1a]! sm:text-[40px]!">Get in touch with us</h2>
            <p className="mt-4! mb-0! max-w-[65ch]! text-base! leading-[1.75]! text-[#66544e]!">
              Tell us about your business, your goals, and the challenges you’re facing.
              Let’s explore how Blupeak Solutions can help you move forward.
            </p>
            <ul className="mt-8! mb-0! grid! list-none! gap-6! p-0!">
              {contactDetails.map(({ icon: Icon, title, text, href }) => (
                <li key={title} className="flex! items-start! gap-4! sm:gap-5!">
                  <div className="flex! size-14! shrink-0! items-center! justify-center! rounded-full! border! border-solid! border-[#f1d8d0]! bg-white! text-[var(--theme-color-coral)]!">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0!">
                    <h3 className="mt-0! mb-1! text-lg! leading-[1.4]! font-medium! text-[#261d1a]!">{title}</h3>
                    {href ? (
                      <a href={href} className={`inline-flex! min-h-11! max-w-full! items-center! text-base! leading-[1.6]! text-[#66544e]! wrap-anywhere! underline-offset-4! hover:text-[#C3422A]! hover:underline! ${focusRing}`}>{text}</a>
                    ) : (
                      <p className="m-0! text-base! leading-[1.75]! text-[#66544e]!">{text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-label="Location map">
          <iframe
            title="Location map"
            className="block! h-[320px]! w-full! border-0! sm:h-[450px]!"
            loading="lazy"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </section>
      </main>
      <Footer padded />
    </>
  );
}
