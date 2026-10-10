import { useEffect, useRef, useState } from "react";
import { Clock, Mail, Menu, MenuIcon, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import DotLink from "../common/DotLink";
import BrandIcon, { type Brand } from "../common/BrandIcon";

export default function Header() {
  const { key: locationKey } = useLocation();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState({ locationKey, open: false });
  const drawer = useRef<HTMLElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  if (mobileMenu.locationKey !== locationKey) setMobileMenu({ locationKey, open: false });
  const mobileOpen = mobileMenu.locationKey === locationKey && mobileMenu.open;
  const close = () => setMobileMenu({ locationKey, open: false });
  const open = (button: HTMLButtonElement) => { opener.current = button; setMobileMenu({ locationKey, open: true }); };

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const hadOverflowHidden = document.body.classList.contains("overflow-hidden!");
    document.body.classList.add("overflow-hidden!");
    const previous = document.activeElement as HTMLElement | null;
    drawer.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileMenu(current => ({ ...current, open: false })); return; }
      if (event.key !== "Tab") return;
      const elements = [...(drawer.current?.querySelectorAll<HTMLElement>("a[href],button:not([disabled])") ?? [])].filter(el => el.getClientRects().length && !el.closest("[hidden]"));
      const first = elements[0], last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      if (!hadOverflowHidden) document.body.classList.remove("overflow-hidden!");
      document.removeEventListener("keydown", onKey);
      (opener.current ?? previous)?.focus();
    };
  }, [mobileOpen]);

  const focus = "focus-visible:outline-2! focus-visible:outline-[var(--theme-color1)]! focus-visible:outline-offset-4!";
  const toggleClass = `relative! ml-[25px]! order-8! cursor-pointer! border-0! bg-transparent! p-0! text-[#d9d9d9]! min-[1024px]:hidden! ${focus}`;
  return (
    <header data-site-header className="absolute! top-0! left-0! w-full! z-[9999]! pt-5!">
      <div data-header-lower className="px-[30px]! py-[14px]! min-[1024px]:py-0! min-[1700px]:px-[60px]!">
        <div className="relative! flex! items-center! justify-between! w-full!">
          <Link to="/" aria-label="Blupeak home" className={focus}><img src="/images/logo.png" alt="Blupeak" className="w-[145px]! h-[34px]!" /></Link>
          <nav aria-label="Main navigation" className="relative! hidden! min-[1024px]:block! bg-[rgba(217,217,217,0.07)]! backdrop-blur-[12px]! rounded-[38.5px]! px-[50px]!">
            <ul className="relative! flex! list-none! m-0! p-0!"><Navigation /></ul>
          </nav>
          <div className="flex! items-center! gap-[25px]! min-[1700px]:gap-[30px]!">
            <div className="flex! items-center! gap-[50px]!">
              <p className="hidden! min-[1400px]:flex! items-center! gap-[15px]! font-semibold! text-base! m-0!"><img src="/images/icons/call.png" alt="" /><a href="tel:01849415421" className={`text-white! ${focus}`}>018-4941-5421</a></p>
              <div className="hidden! min-[1024px]:block!"><DotLink to="/contact">Contact Us</DotLink></div>
            </div>
            <button type="button" className={`${toggleClass} h-[49.4px]! flex! items-center!`} aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={event => open(event.currentTarget)}><MenuIcon size={26} aria-hidden="true" /></button>
          </div>
        </div>
      </div>

      <div className={`fixed! right-0! top-0! w-[300px]! max-w-full! h-full! z-[999999]! ${mobileOpen ? "visible! opacity-100!" : "invisible! opacity-0! pointer-events-none!"}`} inert={!mobileOpen}>
        <div className="fixed! inset-0! z-[1]! bg-black/70!" onClick={close} />
        <nav id="mobile-navigation" ref={drawer} aria-label="Mobile navigation" className={`relative! z-[5]! flex! flex-col! w-full! h-full! max-h-full! overflow-y-auto! bg-[var(--headings-color)]! transition-transform! duration-[400ms]! motion-reduce:transition-none! ${mobileOpen ? "translate-x-0! delay-200!" : "translate-x-[101%]!"}`}>
          <div className="relative! flex! items-center! justify-between! w-full! p-5!">
            <Link to="/" className={`w-full! ${focus}`} aria-label="Blupeak home"><img src="/images/logo.png" alt="Blupeak" className="max-h-10!" /></Link>
            <button type="button" aria-label="Close navigation" className={`relative! top-[5px]! z-10! shrink-0! p-0! border-0! bg-transparent! text-white! hover:opacity-50! transition-opacity! duration-500! ${focus}`} onClick={close}><X size={30} aria-hidden="true" /></button>
          </div>
          <ul className="relative! block! w-full! border-t! border-white/10! list-none! m-0! p-0!"><Navigation mobile /></ul>
          <ul className="relative! px-5! pt-[30px]! pb-5! list-none! m-0!">
            {[
              { Icon: Phone, title: "Call Now", href: "tel:01849415421", text: "018-4941-5421" },
              { Icon: Mail, title: "Send Email", href: "mailto:info@blupeaksolutions.com", text: "info@blupeaksolutions.com" },
              { Icon: Clock, title: "Send Email", text: "Mon - Sat 8:00 - 6:30, Sunday - CLOSED" },
            ].map(({ Icon, title, href, text }, index) => <li key={index} className="relative! mb-5!"><div className="relative! pl-[54px]! text-sm! leading-6! text-white!"><Icon className="absolute! left-0! top-0!" size={34} strokeWidth={1.5} aria-hidden="true" /><span className="block! text-xs! text-[#b2c1c0]! font-normal! uppercase!">{title}</span>{href ? <a href={href} className={`text-white! transition-colors! duration-300! ${focus}`}>{text}</a> : text}</div></li>)}
          </ul>
          <ul className="relative! flex! items-center! justify-between! bg-[var(--theme-color1)]! w-full! border-t! border-white/10! mt-auto! mb-0! p-0! list-none!">
            {(["x", "facebook", "pinterest", "instagram"] as Brand[]).map(brand => <li key={brand} className="relative! w-full! text-center! border-r! border-white/10!"><a href="#" aria-label={brand} className={`relative! flex! items-center! justify-center! h-[50px]! text-sm! text-white/60! ${focus}`}><BrandIcon brand={brand} /></a></li>)}
          </ul>
        </nav>
      </div>

      <div data-sticky-header className={`fixed! top-0! left-0! w-full! z-[9999]! bg-[rgba(10,8,8,0.9843137255)]! shadow-[2px_2px_5px_1px_rgba(0,0,0,0.05),-2px_0_5px_1px_rgba(0,0,0,0.05)]! ${sticky ? "visible! opacity-100! animate-[slideInDown_1s_both]! motion-reduce:animate-none!" : "invisible! opacity-0! pointer-events-none!"}`} inert={!sticky}>
        <div className="mx-auto! max-w-[1320px]! px-[15px]!">
          <div className="relative! flex! items-center! justify-between!">
            <Link to="/" aria-label="Blupeak home" className={`py-2.5! ${focus}`}><img src="/images/logo.png" alt="Blupeak" className="max-h-10!" /></Link>
            <nav aria-label="Sticky navigation" className="relative! hidden! min-[1024px]:block!"><ul className="relative! flex! list-none! m-0! p-0!"><Navigation sticky /></ul></nav>
            <button type="button" className={`${toggleClass} text-white!`} aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={event => open(event.currentTarget)}><Menu size={22} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}
