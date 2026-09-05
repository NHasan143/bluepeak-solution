import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

// NOTE: React.StrictMode is intentionally omitted. The template relies on
// GSAP ScrollSmoother / ScrollTrigger / SplitText, whose imperative setup does
// not survive StrictMode's double invoke-then-cleanup of effects in dev
// (triggers get torn down and left dead). This matches GSAP's own guidance for
// scroll-driven React apps.
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
