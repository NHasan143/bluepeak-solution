import InterfaceIcon from "../common/InterfaceIcon";
import { useEffect, useState } from "react";
import { ScrollSmoother } from "../../lib/gsap";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY >= 125);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, smooth);
    } else {
      window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
    }
  };

  return (
    <button
      id="back-top"
      type="button"
      className={`fixed! z-[999]! right-[30px]! bottom-[30px]! inline-flex! items-center! justify-center! size-[50px]! rounded-full! border-0! bg-[var(--theme-color1)]! text-white! text-lg! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[var(--theme-color-coral)]! focus-visible:outline-offset-4! transition-[opacity,visibility,translate]! duration-200! motion-reduce:transition-none! ${show ? "opacity-100! visible! translate-y-0!" : "opacity-0! invisible! translate-y-5!"}`}
      onClick={toTop}
      aria-label="Back to top"
    >
      <InterfaceIcon name="arrow-up" />
    </button>
  );
}
