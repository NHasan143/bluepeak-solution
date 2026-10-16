import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const root = overlay.current;
    if (!root) return;

    let cancelled = false;
    const timers: number[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pause = (ms: number) => new Promise<void>(resolve => {
      timers.push(window.setTimeout(resolve, ms));
    });
    let finishPageLoad: (() => void) | undefined;
    const pageReady = new Promise<void>(resolve => {
      finishPageLoad = resolve;
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", finishPageLoad, { once: true });
    });
    const context = gsap.context(() => {
      if (!reducedMotion) {
        gsap.fromTo("[data-loader-logo]", {
          clipPath: "inset(0 100% 0 0)",
        }, {
          clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power3.out",
        });
        gsap.fromTo("[data-loader-sweep]", { xPercent: -100 }, {
          xPercent: 340, duration: 1.1, repeat: -1, ease: "power1.inOut",
        });
      }
    }, root);

    const ready = Promise.allSettled([
      pageReady,
      document.fonts.ready,
      logo.current?.decode(),
    ]);
    void Promise.all([
      Promise.race([ready, pause(3000)]),
      pause(reducedMotion ? 150 : 850),
    ]).then(() => {
      if (cancelled) return;
      context.add(() => {
        gsap.killTweensOf("[data-loader-sweep]");
        const exit = gsap.timeline({ onComplete: () => setHidden(true) });
        if (reducedMotion) {
          exit.to(root, { opacity: 0, duration: 0.18 });
        } else {
          exit.to("[data-loader-content]", {
            opacity: 0, y: -12, duration: 0.22, ease: "power2.in",
          }).to(root, {
            clipPath: "inset(0 0 100% 0)", duration: 0.5, ease: "power3.inOut",
          }, 0.1);
        }
      });
    });

    // Never leave the interface covered if asset readiness or animation stalls.
    timers.push(window.setTimeout(() => setHidden(true), 4000));
    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      if (finishPageLoad) window.removeEventListener("load", finishPageLoad);
      context.revert();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlay}
      id="preloader"
      role="status"
      aria-label="Loading Blupeak Solutions"
      className="fixed! inset-0! z-[9999999]! flex! items-center! justify-center! overflow-hidden! bg-black! px-8! text-white!"
    >
      <div data-loader-content className="flex! w-[clamp(220px,40vw,360px)]! max-w-full! flex-col! items-center! gap-8! sm:gap-10!">
        {/* Crop the transparent margins of the original 1000 × 1000 logo. */}
        <div data-loader-logo className="relative! aspect-[950/170]! w-full! overflow-hidden!">
          <img
            ref={logo}
            src="/images/blupeak-light-full.png"
            alt=""
            aria-hidden="true"
            width={1000}
            height={1000}
            fetchPriority="high"
            className="absolute! -top-[244.1176%]! -left-[2.6316%]! block! h-auto! w-[105.2632%]! max-w-none!"
          />
        </div>
        <div aria-hidden="true" className="flex! w-32! flex-col! items-center! gap-4!">
          <div className="h-0.5! w-full! overflow-hidden! bg-white/15!">
            <div data-loader-sweep className="h-full! w-[30%]! bg-[var(--theme-color-coral)]! motion-reduce:w-full!" />
          </div>
          <span className="font-[family-name:var(--body-font-family)]! text-xs! font-medium! tracking-[0.16em]! text-white! uppercase!">Loading</span>
        </div>
      </div>
    </div>
  );
}
