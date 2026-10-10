import { createLucideIcon } from "lucide-react";

// Lucide no longer ships brand logos; render these custom marks through its API.
export const InstagramIcon = createLucideIcon("TeamInstagram", [
  ["rect", { key: "frame", x: 3, y: 3, width: 18, height: 18, rx: 5 }],
  ["circle", { key: "lens", cx: 12, cy: 12, r: 4 }],
  ["circle", { key: "flash", cx: 17.5, cy: 6.5, r: 1, fill: "currentColor", stroke: "none" }],
]);

export const XSocialIcon = createLucideIcon("TeamXSocial", [
  ["path", {
    key: "mark",
    d: "M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-7.3L5.7 22H2.5l8.2-9.4L3 2h6.3l4.4 6.7zm-1.1 18h1.7L8.3 4H6.5z",
    fill: "currentColor", fillRule: "evenodd", stroke: "none",
  }],
]);

export const LinkedinIcon = createLucideIcon("TeamLinkedin", [
  ["path", {
    key: "mark",
    d: "M5 9H1v13h4zM3 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 9v13h4v-7c0-2 1-3 2.5-3s2.5 1 2.5 3v7h4v-8c0-4-2-6-5-6-2 0-3.3 1-4 2V9z",
    fill: "currentColor", stroke: "none",
  }],
]);
