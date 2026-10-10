import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, ChevronDown, ChevronRight, CircleCheck, CircleUserRound, Heart, MessagesSquare, Minus, Phone, Plus, Search, Send, ShoppingCart, Star, type LucideIcon } from "lucide-react";
import type { HTMLAttributes } from "react";
import BrandIcon, { type Brand } from "./BrandIcon";

const icons: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight, "arrow-left": ArrowLeft, "arrow-down": ArrowDown, "arrow-up": ArrowUp,
  check: Check, "circle-check": CircleCheck, "angle-right": ChevronRight, "angle-down": ChevronDown,
  search: Search, phone: Phone, send: Send, star: Star, "star-outline": Star,
  heart: Heart, cart: ShoppingCart, minus: Minus, plus: Plus, user: CircleUserRound, comments: MessagesSquare,
};
const brands: Record<string, Brand> = { facebook: "facebook", linkedin: "linkedin", instagram: "instagram", x: "x", twitter: "twitter", pinterest: "pinterest" };

/** Keep the surrounding icon geometry while replacing downloaded icon fonts. */
export default function InterfaceIcon({ name, className = "", ...props }: HTMLAttributes<HTMLElement> & { name: string }) {
  const Icon = icons[name];
  return (
    <i className={`inline-flex items-center justify-center align-middle not-italic leading-none ${className}`} aria-hidden="true" {...props}>
      {brands[name] ? <BrandIcon brand={brands[name]} /> : Icon ? <Icon width="1em" height="1em" strokeWidth={2} fill={name === "star" || name === "heart" ? "currentColor" : "none"} /> : null}
    </i>
  );
}
