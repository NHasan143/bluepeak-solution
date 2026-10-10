import { ChevronDown, Minus, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";

export type AccordionEntry = {
  no?: string;
  question: string;
  answer: ReactNode;
  wowDelay?: string;
};

/**
 * Reproduces the template's `.accordion-box` markup and the open/close
 * behaviour from js/script.js (one block open at a time).
 */
export default function Accordion({
  items,
  defaultOpen = 0,
  className = "",
  icon = "plus",
  itemWow = "wow fadeInUp",
}: {
  items: AccordionEntry[];
  defaultOpen?: number;
  className?: string;
  icon?: "plus" | "chevron";
  itemWow?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <ul className={`accordion-box${className ? ` ${className}` : ""}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={`accordion block${isOpen ? " active-block" : ""}${itemWow ? ` ${itemWow}` : ""}`}
            data-wow-delay={item.wowDelay}
          >
            <div
              className={`acc-btn${isOpen ? " active" : ""}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.no ? <span>{item.no}</span> : null} {item.question}
              <div className="icon inline-flex items-center justify-center">{isOpen ? <Minus width="1em" height="1em" /> : icon === "chevron" ? <ChevronDown width="1em" height="1em" /> : <Plus width="1em" height="1em" />}</div>
            </div>
            <div className={`acc-content${isOpen ? " current" : ""}`}>
              <div className="content">
                <div className="text">{item.answer}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
