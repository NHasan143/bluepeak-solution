import type { SVGProps } from "react";

export type Brand = "facebook" | "linkedin" | "instagram" | "x" | "twitter" | "pinterest";
const paths: Record<Brand, string> = {
  facebook: "M14 22v-9h3l.5-4H14V6.5c0-1 .3-1.5 1.7-1.5H18V1.5C17.5 1.3 16.3 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9z",
  linkedin: "M5 9H1v13h4zM3 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 9v13h4v-7c0-2 1-3 2.5-3s2.5 1 2.5 3v7h4v-8c0-4-2-6-5-6-2 0-3.3 1-4 2V9z",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m6-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
  x: "M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-7.3L5.7 22H2.5l8.2-9.4L3 2h6.3l4.4 6.7zm-1.1 18h1.7L8.3 4H6.5z",
  twitter: "M22 5.9a8.2 8.2 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7.1 2.8c0 .3 0 .6.1.9A11.7 11.7 0 0 1 3.3 4.7 4.1 4.1 0 0 0 1.5 10a4 4 0 0 0 1.9.5A4.1 4.1 0 0 0 6.7 15a8.3 8.3 0 0 1-5.1 1.8H.6A11.7 11.7 0 0 0 18.5 7a8.4 8.4 0 0 0 3.5-1.1",
  pinterest: "M12 1a11 11 0 0 0-4 21.2c0-1 .1-2.4.4-3.6l1.4-6s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.6-4.4-3.1 0-5 2.3-5 4.7 0 .9.4 1.9.8 2.4l-.3 1.1c-.1.2-.2.3-.5.2-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.2 6.6-6.2 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.4-5.2 6.4-1 0-1.9-.5-2.2-1l-.6 2.4c-.2 1.2-1 2.6-1.5 3.5A11 11 0 1 0 12 1",
};

/** Brand marks use SVG; interface controls use Lucide. */
export default function BrandIcon({ brand, ...props }: SVGProps<SVGSVGElement> & { brand: Brand }) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}><path fillRule="evenodd" d={paths[brand]} /></svg>;
}
