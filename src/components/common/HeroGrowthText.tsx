import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText } from "../../lib/gsap";

/** A single typographic entrance, timed to the hero rather than the loader. */
export default function HeroGrowthText() {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const words = element.querySelectorAll<HTMLElement>("[data-growth-word]");
    let splits: SplitText[] = [];
    let animation: ReturnType<typeof gsap.fromTo> | undefined;
    let visible = false;
    let fontsReady = false;
    let started = false;
    let disposed = false;

    const restoreText = () => {
      splits.forEach((split) => split.revert());
      splits = [];
    };

    const start = () => {
      if (disposed || started || !visible || !fontsReady || document.getElementById("preloader")) return;
      started = true;
      intersection.disconnect();
      loader?.disconnect();
      if (motion.matches) return;

      element.dataset.reveal = "revealing";
      splits = Array.from(words, (word) => new SplitText(word, { type: "chars", tag: "span" }));
      animation = gsap.fromTo(splits.flatMap((split) => split.chars), {
        x: -12,
        autoAlpha: 0,
      }, {
        x: 0,
        autoAlpha: 1,
        duration: 0.32,
        stagger: 0.045,
        ease: "none",
        clearProps: "all",
        onComplete: () => {
          restoreText();
          element.dataset.reveal = "complete";
        },
      });
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    }, { threshold: 0.2 });
    const preloader = document.getElementById("preloader");
    const loader = preloader?.parentElement ? new MutationObserver(start) : null;
    if (preloader?.parentElement) loader?.observe(preloader.parentElement, { childList: true });
    intersection.observe(element);
    document.fonts.ready.then(() => {
      if (disposed) return;
      fontsReady = true;
      start();
    });

    const onMotionChange = () => {
      if (!motion.matches) return;
      started = true;
      intersection.disconnect();
      loader?.disconnect();
      animation?.progress(1).kill();
      restoreText();
      element.dataset.reveal = "complete";
    };
    motion.addEventListener("change", onMotionChange);

    return () => {
      disposed = true;
      intersection.disconnect();
      loader?.disconnect();
      motion.removeEventListener("change", onMotionChange);
      animation?.kill();
      restoreText();
      delete element.dataset.reveal;
    };
  }, []);

  return (
    <span ref={ref} className="hero-growth-text">
      <span data-growth-word className="inline-block!">Growth</span>{" "}
      <span data-growth-word className="inline-block!">Strategy</span>
    </span>
  );
}
