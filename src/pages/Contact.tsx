import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import TextReveal from "../components/common/TextReveal";
import PageEyebrow from "../components/common/PageEyebrow";
import TemplateContactForm from "../components/forms/TemplateContactForm";

const focusRing = "focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#D9F45F]! focus-visible:outline-offset-4!";
const contactDetails = [
  { icon: Phone, title: "Have any question?", text: "018-4941-5421", href: "tel:01849415421" },
  { icon: Mail, title: "Write email", text: "info@blupeaksolutions.com", href: "mailto:info@blupeaksolutions.com" },
  { icon: MapPin, title: "Visit anytime", text: "66 broklyn golden street. New York" },
];

export default function Contact() {
  return (
    <>
      <main className="bg-[#000000]! text-white! selection:bg-[#D9F45F]! selection:text-[#111310]!" data-contact-page>
        <section aria-labelledby="contact-title" className="mx-auto! max-w-[1424px]! px-5! pt-32! pb-12! sm:px-8! sm:pt-40! sm:pb-16! lg:px-16! lg:pt-44!">
          <nav aria-label="Breadcrumb" className="mb-8! sm:mb-12!">
            <ol className="m-0! flex! list-none! items-center! gap-3! p-0! text-sm!">
              <li>
                <Link to="/" className={`text-[#b9beb6]! underline-offset-4! hover:text-[#D9F45F]! hover:underline! ${focusRing}`}>Home</Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} className="text-[#747c6e]!" /></li>
              <li aria-current="page" className="text-[#D9F45F]!">Contact</li>
            </ol>
          </nav>
          <PageEyebrow>Send us email</PageEyebrow>
          <h1 id="contact-title" className="m-0! font-[family-name:var(--heading-font-family)]! text-[35px]! leading-[40px]! font-normal! tracking-[-1.5px]! text-white! text-balance! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!">
            <TextReveal text="Feel free to write" emphasis={{ text: "write", className: "font-[family-name:var(--style-font)]! font-normal! text-[#D9F45F]! italic!" }} />
          </h1>
        </section>

        <section aria-label="Contact form and details" className="mx-auto! grid! max-w-[1424px]! gap-12! px-5! pb-16! sm:px-8! sm:pb-24! lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]! lg:gap-16! lg:px-16!">
          <div className="min-w-0!">
            <TemplateContactForm showReset variant="tailwind" />
          </div>
          <div className="min-w-0!">
            <h2 className="m-0! font-[family-name:var(--heading-font-family)]! text-[32px]! leading-[1.2]! font-normal! tracking-[-0.02em]! text-white! sm:text-[40px]!">Get in touch with us</h2>
            <p className="mt-4! mb-0! max-w-[65ch]! text-base! leading-[1.75]! text-[#b9beb6]!">
              Lorem ipsum is simply free text available dolor sit amet consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
            </p>
            <ul className="mt-8! mb-0! grid! list-none! gap-6! p-0!">
              {contactDetails.map(({ icon: Icon, title, text, href }) => (
                <li key={title} className="flex! items-start! gap-4! sm:gap-5!">
                  <div className="flex! size-14! shrink-0! items-center! justify-center! rounded-full! bg-[#D9F45F]! text-black!">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="min-w-0!">
                    <h3 className="mt-0! mb-1! text-lg! leading-[1.4]! font-medium! text-white!">{title}</h3>
                    {href ? (
                      <a href={href} className={`inline-flex! min-h-11! max-w-full! items-center! text-base! leading-[1.6]! text-[#b9beb6]! wrap-anywhere! underline-offset-4! hover:text-[#D9F45F]! hover:underline! ${focusRing}`}>{text}</a>
                    ) : (
                      <p className="m-0! text-base! leading-[1.75]! text-[#b9beb6]!">{text}</p>
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
