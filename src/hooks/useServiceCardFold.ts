import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollSmoother, ScrollTrigger } from "../lib/gsap";

const VISIBLE_FRACTION = 0.3;
const ARRIVAL_DURATION = 1;
const ARRIVAL_PAUSE = 0.15;

export function useServiceCardFold(listRef: RefObject<HTMLUListElement | null>) {
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const cards = Array.from(list.children) as HTMLElement[];
    if (cards.length < 2) return;

    const media = gsap.matchMedia();
    let cancelled = false;
    let frame = 0;
    let keyboardFrame = 0;

    // Wait for the shared ScrollSmoother and fonts before measuring the rows.
    void document.fonts.ready.then(() => {
      if (cancelled) return;
      frame = requestAnimationFrame(() => {
        media.add("(prefers-reduced-motion: no-preference)", () => {
          // Capture the unpinned wrapper before ScrollTrigger reparents the list.
          const section = list.parentElement ?? list;
          const anchor = () => Math.max(96, (document.querySelector("header")?.getBoundingClientRect().height ?? 72) + 24);
          const stackTop = (index: number) => cards.slice(0, index).reduce((top, card) => top + card.offsetHeight * VISIBLE_FRACTION, 0);
          const stackLift = (index: number) => Math.max(0, stackTop(index) + cards[index].offsetHeight - (window.innerHeight - anchor() - 24));
          const stackedY = (card: HTMLElement, arrivingIndex: number) => stackTop(cards.indexOf(card)) - card.offsetTop - stackLift(arrivingIndex);
          const secondCardEntryTop = () => {
            const scroll = ScrollSmoother.get()?.scrollTop() ?? window.scrollY;
            const sectionTop = section.getBoundingClientRect().top + scroll;
            // Card two enters while card one is still scrolling toward its pin,
            // but remains below the viewport when the visitor first lands.
            return Math.max(cards[0].offsetHeight, window.innerHeight - sectionTop + 40);
          };

          gsap.set(list, { overflow: "hidden" });
          gsap.set(cards, { zIndex: (index: number) => index + 1 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "services-card-fold",
              trigger: list,
              start: () => `top ${anchor()}`,
              end: () => `+=${Math.max(window.innerHeight * 2, cards.reduce((height, card) => height + card.offsetHeight, 0) * 1.25)}`,
              pin: true,
              scrub: 0.4,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onToggle: ({ isActive }) => {
                gsap.set(cards, { willChange: isActive ? "transform" : "auto" });
              },
            },
          });

          cards.slice(1).forEach((card, offset) => {
            const index = offset + 1;
            const position = offset * (ARRIVAL_DURATION + ARRIVAL_PAUSE);
            timeline.fromTo(card, {
              y: () => (index === 1 ? secondCardEntryTop() : window.innerHeight + 40) - card.offsetTop,
              boxShadow: "0 -12px 24px rgba(38,29,26,0.06)",
            }, {
              y: () => stackedY(card, index),
              duration: ARRIVAL_DURATION,
              immediateRender: true,
            }, position);
            // Shift the whole stack on short screens so the arriving card fits.
            timeline.to(cards.slice(0, index), {
              y: (_: number, previous: HTMLElement) => stackedY(previous, index),
              duration: ARRIVAL_DURATION,
            }, position);
            timeline.addLabel(`card-${index + 1}-arrived`, position + ARRIVAL_DURATION);
          });

          timeline.to(cards, {
            y: 0,
            boxShadow: "none",
            duration: 1.25,
            ease: "power2.inOut",
          }, "+=0.2");
          timeline.addLabel("unfolded");

          // Keyboard users can reach every CTA without a covered focus target.
          const revealForKeyboard = (event: FocusEvent) => {
            const target = event.target;
            if (!(target instanceof HTMLElement) || !target.matches("[data-service-cta]:focus-visible")) return;
            media.revert();
            ScrollTrigger.refresh();
            keyboardFrame = requestAnimationFrame(() => {
              // Removing the pin spacer reparents the list; restore the focus
              // that browsers can drop while its DOM ancestor moves.
              target.focus({ preventScroll: true });
              const smoother = ScrollSmoother.get();
              if (smoother) smoother.scrollTo(target, false, "center center");
              else target.scrollIntoView({ block: "center" });
            });
          };
          list.addEventListener("focusin", revealForKeyboard);
          ScrollTrigger.refresh();

          return () => {
            list.removeEventListener("focusin", revealForKeyboard);
          };
        }, list);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(keyboardFrame);
      media.revert();
    };
  }, [listRef]);
}
