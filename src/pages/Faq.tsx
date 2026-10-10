import { pageClasses } from "../styles/pageUtilities";
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

      <section className="faqs-section pt-[120px]! pb-[0px]!">
        <div className="mx-auto! w-full! max-w-[1320px]! px-[15px]!">
          <div className="flex! flex-wrap! -mx-3!">
            <div className="faq-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12!">
              <div className="inner-column pt-[0px]!">
                <Accordion
                  items={ITEMS}
                  defaultOpen={0}
                  icon="chevron"
                  itemWow=""
                  className={pageClasses("wow fadeInLeft mb-[48px]! min-[992px]:mb-[0px]!")}
                />
              </div>
            </div>
            <div className="faq-column w-full! shrink-0! px-3! [.gutter-row>&]:mt-6! min-[992px]:w-6/12!">
              <div className="inner-column pt-[0px]!">
                <Accordion
                  items={ITEMS}
                  defaultOpen={0}
                  icon="chevron"
                  itemWow=""
                  className={pageClasses("wow fadeInLeft")}
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
