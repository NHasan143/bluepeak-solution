import PageTitle from "../components/common/PageTitle";
import Footer from "../components/layout/Footer";
import Accordion, { type AccordionEntry } from "../components/common/Accordion";

const ANSWER =
  "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.";

const ITEMS: AccordionEntry[] = [
  { question: "What services does your digital agency offer?", answer: ANSWER },
  { question: "How long have you been in business?", answer: ANSWER },
  { question: "What industries do you specialize in?", answer: ANSWER },
  { question: "Do you design custom websites?", answer: ANSWER },
];

export default function Faq() {
  return (
    <>
      <PageTitle title="FAQ" crumb="FAQ" />

      <section className="faqs-section pt-120 pb-0">
        <div className="auto-container">
          <div className="row">
            <div className="faq-column col-lg-6">
              <div className="inner-column pt-0">
                <Accordion
                  items={ITEMS}
                  defaultOpen={0}
                  iconClass="far fa-angle-down"
                  itemWow=""
                  className="wow fadeInLeft mb-5 mb-lg-0"
                />
              </div>
            </div>
            <div className="faq-column col-lg-6">
              <div className="inner-column pt-0">
                <Accordion
                  items={ITEMS}
                  defaultOpen={0}
                  iconClass="far fa-angle-down"
                  itemWow=""
                  className="wow fadeInLeft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer padded />
    </>
  );
}
