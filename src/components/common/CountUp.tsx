import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

/** Counts once on arrival; assistive technology always reads the final value. */
export default function CountUp({ value, suffix = "", decimals = 0 }: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tween: gsap.core.Tween | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || motion.matches) return;
      observer.disconnect();
      const counter = { value: 0 };
      tween = gsap.to(counter, {
        value,
        duration: 1.8,
        ease: "power3.out",
        onUpdate: () => {
          const factor = 10 ** decimals;
          element.textContent = (Math.floor(counter.value * factor) / factor).toFixed(decimals);
        },
        onComplete: () => { element.textContent = String(value); },
      });
    }, { threshold: 0.35 });

    const settle = () => {
      if (!motion.matches) return;
      observer.disconnect();
      tween?.kill();
      element.textContent = String(value);
    };
    if (motion.matches) settle();
    else {
      element.textContent = decimals ? "0.0" : "0";
      observer.observe(element.closest(".counter-card-item") ?? element);
    }
    motion.addEventListener("change", settle);

    return () => {
      observer.disconnect();
      tween?.kill();
      motion.removeEventListener("change", settle);
    };
  }, [value, decimals]);

  return (
    <>
      <span className="sr-only">{value}{suffix}</span>
      <span aria-hidden="true">
        <span ref={numberRef} data-count-value className="tabular-nums!">{value}</span>{suffix}
      </span>
    </>
  );
}
