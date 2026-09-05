import { useEffect, useState } from "react";

const LETTERS = ["B", "L", "U", "E", "P", "E", "A", "K"];

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Mirrors js/script.js loader(): on load -> add .loaded, then fade out.
    const t1 = window.setTimeout(() => setLoaded(true), 700);
    const t2 = window.setTimeout(() => setHidden(true), 1500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      id="preloader"
      className={`preloader${loaded ? " loaded" : ""}`}
      style={loaded ? { transition: "opacity .6s", opacity: 0 } : undefined}
    >
      <div className="animation-preloader">
        <div className="spinner" />
        <div className="txt-loading">
          {LETTERS.map((letter, i) => (
            <span key={i} data-text-preloader={letter} className="letters-loading">
              {" "}
              {letter}{" "}
            </span>
          ))}
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
