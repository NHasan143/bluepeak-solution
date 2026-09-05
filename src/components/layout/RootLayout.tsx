import { useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollSmoother, ScrollTrigger } from "../../lib/gsap";
import { usePageEffects } from "../../hooks/usePageEffects";
import Preloader from "./Preloader";
import BackToTop from "./BackToTop";
import MouseCursor from "./MouseCursor";
import Header from "./Header";

/**
 * Shared shell for every route: preloader, custom cursor, ScrollSmoother
 * wrapper and the per-page animation orchestration.
 *
 * `bare` drops the header / back-to-top (the original page-404.html has no
 * header), keeping only the smooth-scroll wrapper.
 */
export default function RootLayout({ bare = false }: { bare?: boolean }) {
  const { pathname } = useLocation();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  // Create ScrollSmoother once, matching js/script-gsap.js.
  // useLayoutEffect + declared before usePageEffects() so the smoother exists
  // before any per-page ScrollTrigger is created.
  useLayoutEffect(() => {
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");
    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
    smootherRef.current = smoother;

    return () => {
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  // Scroll to top on navigation
  useEffect(() => {
    if (smootherRef.current) {
      smootherRef.current.scrollTop(0);
    } else {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();
  }, [pathname]);

  usePageEffects();

  return (
    <div className="page-wrapper">
      <Preloader />
      {!bare && (
        <>
          <BackToTop />
          <MouseCursor />
          <Header />
        </>
      )}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
