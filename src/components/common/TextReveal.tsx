import { Fragment, useLayoutEffect, useRef } from "react";

// Literal utilities let Tailwind generate every stagger without inline styles.
const STAGGER_DELAYS = [
  "delay-100!", "delay-[130ms]!", "delay-[160ms]!", "delay-[190ms]!",
  "delay-[220ms]!", "delay-[250ms]!", "delay-[280ms]!", "delay-[310ms]!",
  "delay-[340ms]!", "delay-[370ms]!", "delay-[400ms]!", "delay-[430ms]!",
  "delay-[460ms]!", "delay-[490ms]!", "delay-[520ms]!", "delay-[550ms]!",
  "delay-[580ms]!", "delay-[610ms]!", "delay-[640ms]!", "delay-[670ms]!",
  "delay-[700ms]!", "delay-[730ms]!", "delay-[760ms]!", "delay-[790ms]!",
  "delay-[820ms]!", "delay-[850ms]!", "delay-[880ms]!", "delay-[910ms]!",
  "delay-[940ms]!", "delay-[970ms]!", "delay-[1000ms]!", "delay-[1030ms]!",
  "delay-[1060ms]!", "delay-[1090ms]!", "delay-[1120ms]!", "delay-[1150ms]!",
  "delay-[1180ms]!", "delay-[1210ms]!", "delay-[1240ms]!", "delay-[1270ms]!",
  "delay-[1300ms]!", "delay-[1330ms]!", "delay-[1360ms]!", "delay-[1390ms]!",
];

/** One-time letter reveal; Tailwind owns all appearance and motion. */
export default function TextReveal({
  text,
  className = "",
  emphasis,
}: {
  text: string;
  className?: string;
  emphasis?: { text: string; className: string };
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    let disposed = false;
    let visible = false;
    let fontsReady = false;
    let started = false;
    let firstFrame = 0;
    let secondFrame = 0;

    // Visible without enhancement. Prepare before paint; reveal once the text
    // is in view, its fonts are ready, and the shared preloader has finished.
    element.dataset.reveal = "pending";
    const start = () => {
      if (disposed || started || !visible || !fontsReady || document.getElementById("preloader")) return;
      started = true;
      intersection.disconnect();
      loader.disconnect();
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          element.dataset.reveal = "visible";
        });
      });
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    }, { rootMargin: "0px 0px -15% 0px" });
    const loader = new MutationObserver(start);
    intersection.observe(element);
    if (document.getElementById("preloader")) {
      loader.observe(document.body, { childList: true, subtree: true });
    }
    document.fonts.ready.then(() => {
      fontsReady = true;
      start();
    });

    const onMotionChange = () => {
      if (!motion.matches) return;
      started = true;
      intersection.disconnect();
      loader.disconnect();
      element.dataset.reveal = "visible";
    };
    motion.addEventListener("change", onMotionChange);

    return () => {
      disposed = true;
      intersection.disconnect();
      loader.disconnect();
      motion.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      delete element.dataset.reveal;
    };
  }, [text]);

  const words = text.split(" ");
  const emphasisStart = emphasis ? text.indexOf(emphasis.text) : -1;
  const emphasisEnd = emphasisStart + (emphasis?.text.length ?? 0);

  return (
    <span ref={ref} className={`group/reveal ${className}`} data-text-reveal>
      <span className="sr-only!">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const precedingText = words.slice(0, wordIndex).join(" ");
          const textIndex = wordIndex === 0 ? 0 : precedingText.length + 1;
          const letterIndex = Array.from(precedingText.replaceAll(" ", "")).length;
          const emphasized = emphasisStart >= 0 && textIndex >= emphasisStart && textIndex + word.length <= emphasisEnd;
          return (
            <Fragment key={`${wordIndex}-${word}`}>
              {wordIndex > 0 && " "}
              <span className={`inline-block! whitespace-nowrap! ${emphasized ? emphasis?.className : ""}`}>
                {Array.from(word).map((letter, index) => {
                  const delay = STAGGER_DELAYS[Math.min(letterIndex + index, STAGGER_DELAYS.length - 1)];
                  return (
                    <span key={index} data-reveal-letter className={`inline-block! translate-x-0! opacity-100! transition-[opacity,translate]! duration-1000! ease-[cubic-bezier(0.215,0.61,0.355,1)]! group-data-[reveal=pending]/reveal:translate-x-5! group-data-[reveal=pending]/reveal:opacity-0! motion-reduce:transition-none! motion-reduce:group-data-[reveal=pending]/reveal:translate-x-0! motion-reduce:group-data-[reveal=pending]/reveal:opacity-100! ${delay}`}>
                      {letter}
                    </span>
                  );
                })}
              </span>
            </Fragment>
          );
        })}
      </span>
    </span>
  );
}
