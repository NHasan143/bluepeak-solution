import { useEffect } from "react";
import { createStructuredData } from "../lib/siteMetadata";

/** Add route-specific JSON-LD and remove it when leaving the page. */
export function useStructuredData(canonicalUrl: string | null) {
  useEffect(() => {
    if (canonicalUrl === null) return;
    const script = document.createElement("script");
    script.id = "site-structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(createStructuredData(canonicalUrl)).replace(/</g, "\\u003c");
    document.head.append(script);
    return () => script.remove();
  }, [canonicalUrl]);
}
