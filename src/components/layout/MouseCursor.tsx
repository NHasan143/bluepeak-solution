import { pageClasses } from "../../styles/pageUtilities";
import { useEffect } from "react";

/** Port of the itCursor() routine in js/script.js */
export default function MouseCursor() {
  useEffect(() => {
    const inner = document.querySelector<HTMLElement>(".cursor-inner");
    const outer = document.querySelector<HTMLElement>(".cursor-outer");
    if (!inner || !outer) return;

    let hidden = false;

    const onMove = (e: MouseEvent) => {
      if (!hidden) {
        outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("button, a, .cursor-pointer")) {
        inner.classList.add("cursor-hover");
        outer.classList.add("cursor-hover");
      }
    };
    const onLeave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("button, a, .cursor-pointer")) {
        inner.classList.remove("cursor-hover");
        outer.classList.remove("cursor-hover");
      }
    };
    const onLeaveWindow = () => {
      hidden = true;
      inner.style.opacity = "0";
      outer.style.opacity = "0";
    };
    const onEnterWindow = () => {
      hidden = false;
      inner.style.opacity = "";
      outer.style.opacity = "";
    };

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseover", onEnter);
    document.body.addEventListener("mouseout", onLeave);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    inner.style.visibility = "visible";
    outer.style.visibility = "visible";

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseover", onEnter);
      document.body.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, []);

  return (
    <>
      <div className={pageClasses("mouseCursor cursor-outer")} />
      <div className={pageClasses("mouseCursor cursor-inner")} />
    </>
  );
}
