import { useEffect, useState } from "react";
import { ScrollSmoother } from "../../lib/gsap";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      setShow(scrolled >= document.documentElement.scrollHeight - 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      id="back-top"
      className={`back-to-top${show ? " show" : ""}`}
      onClick={toTop}
      aria-label="Back to top"
    >
      <i className="fa-regular fa-arrow-up" />
    </button>
  );
}
