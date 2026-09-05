import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap, ScrollTrigger, SplitText } from "../lib/gsap";

/**
 * Port of the template's per-page animation / interaction code
 * (js/script-gsap.js + the DOM-driven parts of js/script.js).
 *
 * Runs after every route render, scoped to #smooth-content, and fully
 * reverts on route change so nothing leaks between pages.
 */

const MOBILE_RE =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

function throttle<T extends (...args: never[]) => void>(fn: T, limit: number) {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function usePageEffects() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root =
      document.getElementById("smooth-content") ?? document.body;

    const cleanups: Array<() => void> = [];
    const splits: SplitText[] = [];

    const ctx = gsap.context(() => {
      /* -------------------------------------------------- text reveal */
      const textAnimEls =
        root.querySelectorAll<HTMLElement>(".text-anim");
      textAnimEls.forEach((element) => {
        const split = new SplitText(element, { type: "chars, words" });
        splits.push(split);
        gsap.fromTo(
          split.chars,
          { x: 20, autoAlpha: 0 },
          {
            duration: 1,
            delay: 0.1,
            x: 0,
            autoAlpha: 1,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      /* -------------------------------------------------- panel pin */
      ScrollTrigger.matchMedia({
        "(min-width: 991px)": () => {
          root.querySelectorAll<HTMLElement>(".tm-panel-pin").forEach((panel) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top 10%",
              end: "bottom 90%",
              pin: true,
              pinSpacing: false,
              scrub: 1,
              endTrigger: ".tm-panel-pin-area",
            });
          });
        },
      });

      /* -------------------------------------------------- rotating circles */
      gsap.utils.toArray<HTMLElement>(".tm-gsap-animate-circle").forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              scrub: 1,
              start: "top 100%",
              end: "top -50%",
              toggleActions: "play none none reverse",
            },
          })
          .set(el, { transformOrigin: "center center" })
          .fromTo(
            el,
            { rotate: 0 },
            { rotate: 180, duration: 2, immediateRender: false },
          );
      });

      /* -------------------------------------------------- image reveal */
      ScrollTrigger.matchMedia({
        "(min-width: 1200px)": () => {
          root.querySelectorAll<HTMLElement>(".img-reveal").forEach((container) => {
            const image = container.querySelector("img");
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset",
              },
            });
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, { duration: 1.5, xPercent: -100, ease: "power2.out" });
            if (image) {
              tl.from(
                image,
                { duration: 1.5, xPercent: 100, scale: 1.3, ease: "power2.out" },
                "-=1.5",
              );
            }
          });
        },
      });

      /* -------------------------------------------------- slide-in shapes */
      if (root.querySelector(".right-to-left-ani")) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".right-to-left-ani",
              start: "top 80%",
              end: "bottom 10%",
              scrub: 2,
            },
          })
          .fromTo(".right-to-left-ani", { x: 200 }, { x: 0, duration: 1.6 });
      }
      root.querySelectorAll<HTMLElement>(".left-to-right-ani").forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 10%",
              scrub: 2,
            },
          })
          .fromTo(el, { x: -200 }, { x: 0, duration: 1.6 });
      });

      /* -------------------------------------------------- advance stagger */
      ScrollTrigger.matchMedia({
        "(min-width: 1200px)": () => {
          const items = root.querySelectorAll<HTMLElement>(
            ".advance-wrap .advance-item",
          );
          if (items.length < 4) return;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".advance-wrap",
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power1.out", duration: 1 },
          });
          tl.from(items[0], { xPercent: 100, rotate: -8 })
            .from(items[1], { xPercent: 30, rotate: 4.13 }, "<")
            .from(items[2], { xPercent: -30, rotate: -6.42 }, "<")
            .from(items[3], { xPercent: -60, rotate: -12.15 }, "<");
        },
      });
    }, root);
    cleanups.push(() => ctx.revert());
    cleanups.push(() => splits.forEach((s) => s.revert()));

    /* ============================================ WOW-style reveal */
    const isMobile = MOBILE_RE.test(navigator.userAgent);
    const wowEls = root.querySelectorAll<HTMLElement>(".wow");
    if (isMobile) {
      wowEls.forEach((el) => (el.style.visibility = "visible"));
    } else {
      wowEls.forEach((el) => {
        el.style.visibility = "hidden";
      });
      const wowObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-wow-delay");
            const dur = el.getAttribute("data-wow-duration");
            if (delay) el.style.animationDelay = delay;
            if (dur) el.style.animationDuration = dur;
            el.style.visibility = "visible";
            el.classList.add("animated");
            obs.unobserve(el);
          });
        },
        { threshold: 0 },
      );
      wowEls.forEach((el) => wowObserver.observe(el));
      cleanups.push(() => wowObserver.disconnect());
    }

    /* ============================================ number counters */
    const countObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const box = entry.target as HTMLElement;
          const textEl = box.querySelector<HTMLElement>(".count-text");
          if (!textEl || box.classList.contains("counted")) return;
          box.classList.add("counted");
          const stop = parseFloat(textEl.getAttribute("data-stop") || "0");
          const speed = parseInt(textEl.getAttribute("data-speed") || "3000", 10);
          const start = parseFloat(textEl.textContent || "0") || 0;
          const startTime = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTime) / speed, 1);
            const value = start + (stop - start) * p;
            textEl.textContent = String(p < 1 ? Math.floor(value) : stop);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(box);
        });
      },
      { threshold: 0 },
    );
    root
      .querySelectorAll<HTMLElement>(".count-box")
      .forEach((el) => countObserver.observe(el));
    cleanups.push(() => countObserver.disconnect());

    /* ============================================ hover "active" groups */
    const hoverActive = (selector: string) => {
      const els = Array.from(root.querySelectorAll<HTMLElement>(selector));
      const onEnter = (e: Event) => {
        els.forEach((el) => el.classList.remove("active"));
        (e.currentTarget as HTMLElement).classList.add("active");
      };
      els.forEach((el) => el.addEventListener("mouseenter", onEnter));
      cleanups.push(() =>
        els.forEach((el) => el.removeEventListener("mouseenter", onEnter)),
      );
    };
    [
      ".award-list-items-items",
      ".service-list-style1",
      ".service-items",
      ".work-block-active",
      ".feature-signle-box-area",
      ".feature-card",
      ".counter-card-item",
      ".feature-block-one",
      ".ks-mouseenter",
      ".ks-mouseenter2",
      ".project-block-box-4",
      ".hzAccordion__item",
    ].forEach(hoverActive);

    // .case-block-four: second item active by default
    const caseFour = Array.from(
      root.querySelectorAll<HTMLElement>(".case-block-four"),
    );
    if (caseFour[1]) caseFour[1].classList.add("active");

    /* ============================================ cursor-follow hover images */
    const cursorFollow = (selector: string) => {
      root.querySelectorAll<HTMLElement>(selector).forEach((item) => {
        const handler = throttle((event: MouseEvent) => {
          const box = item.getBoundingClientRect();
          const dx = event.clientX - box.left;
          const dy = event.clientY - box.top;
          const img = item.querySelector<HTMLElement>(".hover-image");
          if (img) {
            img.style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
          }
        }, 16);
        item.addEventListener("mousemove", handler as EventListener);
        cleanups.push(() =>
          item.removeEventListener("mousemove", handler as EventListener),
        );
      });
    };
    [".service-items", ".service-list-style1", ".award-list-items-items"].forEach(
      cursorFollow,
    );

    /* ============================================ conic-gradient progress */
    const animateProgress = (
      id: string,
      valueId: string,
      endValue: number,
      speed: number,
    ) => {
      const progress = document.getElementById(id);
      const valueContainer = document.getElementById(valueId);
      if (!progress || !valueContainer) return;
      let current = 0;
      const update = () => {
        current++;
        if (current > endValue) current = endValue;
        valueContainer.textContent = `${current}%`;
        progress.style.background = `conic-gradient(#C8F169 ${current * 3.6}deg, #D4D4D4 ${current * 3.6}deg)`;
        if (current < endValue) setTimeout(() => requestAnimationFrame(update), speed);
      };
      requestAnimationFrame(update);
    };
    for (let i = 1; i <= 8; i++) {
      animateProgress(`progress${i}`, `value${i}`, i === 1 ? 95 : 85, 20);
    }

    /* ============================================ count-bar width fill */
    const barObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const percent = el.dataset.percent;
          if (percent) el.style.width = percent;
          el.classList.add("counted");
          obs.unobserve(el);
        });
      },
      { threshold: 0 },
    );
    root
      .querySelectorAll<HTMLElement>(".count-bar")
      .forEach((el) => barObserver.observe(el));
    cleanups.push(() => barObserver.disconnect());

    /* refresh smoother measurements once the page has painted */
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    cleanups.push(() => window.clearTimeout(refreshId));

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);
}
