import { useEffect, useRef, useState } from "react";
import { Clock, Mail, Menu, MenuIcon, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import DotLink from "../common/DotLink";
import BrandIcon, { type Brand } from "../common/BrandIcon";

export default function Header({ light = false }: { light?: boolean }) {
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

  const focus = `focus-visible:outline-2! focus-visible:outline-offset-4! ${light ? "focus-visible:outline-[#C3422A]!" : "focus-visible:outline-[#FF593E]!"}`;
  const stickyFocus = "focus-visible:outline-2! focus-visible:outline-offset-4! focus-visible:outline-[#FF593E]!";
  const foreground = light ? "text-[#261d1a]!" : "text-white!";
  const logo = light ? "/images/blupeak-dark-full.png" : "/images/blupeak-light-full.png";
  const toggleLayout = "relative! ml-[25px]! order-8! cursor-pointer! border-0! bg-transparent! p-0! min-[1024px]:hidden!";
  const toggleClass = `${toggleLayout} ${light ? "text-[#261d1a]!" : "text-[#d9d9d9]!"} ${focus}`;
  return (
    <header data-site-header className={`absolute! top-0! left-0! w-full! z-[9999]! pt-5! ${light ? "bg-white!" : ""}`}>
      <div data-header-lower className="px-[30px]! py-[14px]! min-[1024px]:py-0! min-[1700px]:px-[60px]!">
        <div className="relative! flex! items-center! justify-between! w-full!">
          <Link to="/" aria-label="Blupeak home" className={`flex! items-center! ${focus}`}><img src={logo} alt="Blupeak" className="w-[170px]! h-[34px]! object-cover! object-center!" /></Link>
          <nav aria-label="Main navigation" className={`absolute! left-1/2! -translate-x-1/2! hidden! min-[1024px]:block! rounded-[38.5px]! px-[50px]! ${light ? "bg-[#faf5f3]!" : "bg-[rgba(217,217,217,0.07)]! backdrop-blur-[12px]!"}`}>
            <ul className="relative! flex! list-none! m-0! p-0!"><Navigation light={light} /></ul>
          </nav>
          <div className="flex! items-center! gap-[25px]! min-[1700px]:gap-[30px]!">
            <div className="flex! items-center! gap-[50px]!">
              <p className={`hidden! min-[1400px]:flex! items-center! gap-[15px]! font-semibold! text-base! m-0! ${foreground}`}>{light ? <Phone size={24} strokeWidth={1.5} className="text-[var(--theme-color-coral)]!" aria-hidden="true" /> : <img src="/images/icons/call.png" alt="" />}<a href="tel:01849415421" className={`${foreground} ${focus}`}>01849-415421</a></p>
              <div className="hidden! min-[1024px]:block!"><DotLink to="/contact" accent={light ? "coral" : "teal"}>Contact Us</DotLink></div>
            </div>
            <button type="button" className={`${toggleClass} h-[49.4px]! flex! items-center!`} aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={event => open(event.currentTarget)}><MenuIcon size={26} aria-hidden="true" /></button>
          </div>
        </div>
      </div>

      <div className={`fixed! right-0! top-0! w-[300px]! max-w-full! h-full! z-[999999]! ${mobileOpen ? "visible! opacity-100!" : "invisible! opacity-0! pointer-events-none!"}`} inert={!mobileOpen}>
        <div className="fixed! inset-0! z-[1]! bg-black/60! backdrop-blur-[2px]!" onClick={close} />
        <nav id="mobile-navigation" ref={drawer} aria-label="Mobile navigation" className={`relative! z-[5]! flex! flex-col! w-full! h-full! max-h-full! overflow-y-auto! bg-white! text-[#261d1a]! shadow-[-10px_0_30px_rgba(6,76,68,0.12)]! transition-transform! duration-[400ms]! motion-reduce:transition-none! ${mobileOpen ? "translate-x-0! delay-200!" : "translate-x-[101%]!"}`}>
          <div className="relative! flex! items-center! justify-between! w-full! p-5! border-b! border-[#eaded9]!">
            <Link to="/" className={`flex! items-center! w-full! ${focus}`} aria-label="Blupeak home"><img src="/images/blupeak-dark-full.png" alt="Blupeak" className="w-[160px]! h-[32px]! object-cover! object-center!" /></Link>
            <button type="button" aria-label="Close navigation" className={`relative! top-[2px]! z-10! shrink-0! p-1! border-0! bg-transparent! text-[#261d1a]! hover:text-[var(--theme-color-coral)]! transition-colors! duration-300! ${focus}`} onClick={close}><X size={28} aria-hidden="true" /></button>
          </div>
          <ul className="relative! block! w-full! list-none! m-0! p-0!"><Navigation mobile light={light} /></ul>
          <ul className="relative! px-5! pt-6! pb-5! list-none! m-0! border-t! border-[#eaded9]!">
            {[
              { Icon: Phone, title: "Call Now", href: "tel:01849415421", text: "01849-415421" },
              { Icon: Mail, title: "Send Email", href: "mailto:contact@blupeaksolutions.com", text: "contact@blupeaksolutions.com" },
              { Icon: Clock, title: "Office Hours", text: "Mon - Sat 8:00 - 6:30, Sunday - CLOSED" },
            ].map(({ Icon, title, href, text }, index) => (
              <li key={index} className="relative! mb-5! last:mb-0!">
                <div className="relative! pl-[46px]! text-sm! leading-6! text-[#261d1a]!">
                  <Icon className="absolute! left-0! top-0.5! text-[var(--theme-color-coral)]!" size={28} strokeWidth={1.75} aria-hidden="true" />
                  <span className="block! text-[11px]! font-semibold! uppercase! tracking-[0.08em]! text-[#66544e]!">{title}</span>
                  {href ? (
                    <a href={href} className={`font-medium! text-[#261d1a]! transition-colors! duration-300! hover:text-[var(--theme-color-coral)]! ${focus}`}>{text}</a>
                  ) : (
                    <span className="font-medium! text-[#261d1a]!">{text}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <ul className="relative! flex! items-center! justify-between! w-full! border-t! border-[#eaded9]! mt-auto! mb-0! p-0! list-none! bg-[#faf8f7]!">
            {(["x", "facebook", "pinterest", "instagram"] as Brand[]).map(brand => (
              <li key={brand} className="relative! w-full! text-center! border-r! border-[#eaded9]! last:border-r-0!">
                <a href="#" aria-label={brand} className={`relative! flex! items-center! justify-center! h-[50px]! text-[#064C44]! hover:text-[var(--theme-color-coral)]! hover:bg-white! transition-colors! duration-300! ${focus}`}>
                  <BrandIcon brand={brand} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div data-sticky-header className={`fixed! top-0! left-0! w-full! z-[9999]! bg-[rgba(10,8,8,0.9843137255)]! shadow-[2px_2px_5px_1px_rgba(0,0,0,0.05),-2px_0_5px_1px_rgba(0,0,0,0.05)]! ${sticky ? "visible! opacity-100! animate-[slideInDown_1s_both]! motion-reduce:animate-none!" : "invisible! opacity-0! pointer-events-none!"}`} inert={!sticky}>
        <div className="mx-auto! max-w-[1320px]! px-[15px]!">
          <div className="relative! flex! items-center! justify-between!">
            <Link to="/" aria-label="Blupeak home" className={`py-2.5! flex! items-center! ${stickyFocus}`}><img src="/images/blupeak-light-full.png" alt="Blupeak" className="w-[170px]! h-[34px]! object-cover! object-center!" /></Link>
            <nav aria-label="Sticky navigation" className="relative! hidden! min-[1024px]:block!"><ul className="relative! flex! list-none! m-0! p-0!"><Navigation sticky /></ul></nav>
            <button type="button" className={`${toggleLayout} text-white! ${stickyFocus}`} aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={event => open(event.currentTarget)}><Menu size={22} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}
