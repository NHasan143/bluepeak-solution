import { useEffect } from "react";

/** Set page metadata and restore the previous values when leaving the page. */
export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const existing = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const meta = existing ?? document.createElement("meta");
    const previousDescription = meta.getAttribute("content");

    document.title = title;
    meta.name = "description";
    meta.content = description;
    if (!existing) document.head.append(meta);

    return () => {
      document.title = previousTitle;
      if (!existing) meta.remove();
      else if (previousDescription === null) meta.removeAttribute("content");
      else meta.content = previousDescription;
    };
  }, [title, description]);
}
