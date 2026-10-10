import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, ChartNoAxesCombined, ChevronDown,
  CodeXml, Palette, Search, Workflow, type LucideIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SERVICES } from "../../lib/services";

export type Leaf = { label: string; to: string };
export type Node = {
  label: string;
  to?: string;
  children?: (Leaf | Node)[];
  isServicesMenu?: boolean;
};

/** Mirrors the <ul class="navigation"> markup shared by every template page. */
const MENU: Node[] = [
  {
    label: "Home",
    to: "/",
  },
  { label: "About", to: "/about" },

  {
    label: "Services",
    isServicesMenu: true,
  },
  {
    label: "Blog",
    children: [
      { label: "Blog Grid", to: "/blog" },
      { label: "Blog Details", to: "/blog-details" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

const SERVICE_SUMMARIES: Record<string, string> = {
  "revenue-sales-systems": "Prospecting, outreach and full-cycle deal closing.",
  "brand-creative-solutions": "Brand strategy, design and creative execution.",
  "seo-organic-growth": "Search visibility, content and sustainable growth.",
  "custom-web-software": "Websites and software built around your business.",
  "ai-workflow-automation": "Connected systems and fewer manual tasks.",
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "revenue-sales-systems": ChartNoAxesCombined,
  "brand-creative-solutions": Palette,
  "seo-organic-growth": Search,
  "custom-web-software": CodeXml,
  "ai-workflow-automation": Workflow,
};

function hasChildren(
  n: Leaf | Node,
): n is Node & { children: (Leaf | Node)[] } {
  return "children" in n && Array.isArray(n.children) && n.children.length > 0;
}

/**
 * Navigation component. Used in the main header, sticky header, and mobile menu.
 */
export default function Navigation({ mobile = false, sticky = false }: { mobile?: boolean; sticky?: boolean }) {
  const { pathname, key: locationKey } = useLocation();
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [servicesMenu, setServicesMenu] = useState({ locationKey, open: false });
  const servicesOpen = servicesMenu.locationKey === locationKey && servicesMenu.open;
  const servicesRef = useRef<HTMLLIElement>(null);
  const servicesId = useId();

  const setServicesOpen = (next: boolean) => setServicesMenu({ locationKey, open: next });

  useLayoutEffect(() => {
    if (!servicesOpen || mobile) return;
    const positionPanel = () => {
      const item = servicesRef.current;
      if (!item) return;
      const bounds = item.getBoundingClientRect();
      const shift = document.documentElement.clientWidth / 2 - bounds.left - bounds.width / 2;
      item.style.setProperty("--services-panel-shift", `${shift}px`);
    };
    positionPanel();
    window.addEventListener("resize", positionPanel);
    return () => window.removeEventListener("resize", positionPanel);
  }, [servicesOpen, mobile]);

  useEffect(() => {
    if (!servicesOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as globalThis.Node)) {
        setServicesMenu((current) => ({ ...current, open: false }));
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [servicesOpen]);

  const toggle = (key: string) =>
    setOpen((s) => ({ ...s, [key]: !s[key] }));

  const isCurrent = (n: Leaf | Node): boolean => {
    if ("isServicesMenu" in n && n.isServicesMenu) {
      return pathname === "/services" || pathname.startsWith("/service-details");
    }
    if ("to" in n && n.to) {
      if (n.to === "/") return pathname === "/";
      return pathname === n.to || pathname.startsWith(n.to + "/");
    }
    if (hasChildren(n)) return n.children.some(isCurrent);
    return false;
  };

  const focus = "focus-visible:outline-2! focus-visible:outline-[var(--theme-color1)]! focus-visible:outline-offset-[-2px]! motion-reduce:transition-none!";
  const itemClass = mobile
    ? "relative! block! border-b! border-white/10!"
    : sticky
      ? "relative! py-5! ml-[46px]! group/nav"
      : "relative! py-[18px]! mr-7! min-[1400px]:mr-[45px]! min-[1700px]:mr-[60px]! last:mr-0! group/nav";
  const linkClass = mobile
    ? `relative! block! px-5! py-2.5! text-base! leading-6! font-medium! text-white! hover:text-[var(--theme-color1)]! ${focus}`
    : `relative! flex! p-0! text-[15px]! min-[1900px]:text-base! leading-[30px]! font-medium! text-white! hover:text-[var(--theme-color1)]! transition-colors! duration-300! ${focus}`;

  const renderServicesDropdown = (key: string) => {
    const isServicesActive = isCurrent({ label: "Services", isServicesMenu: true });
    const serviceLinks = SERVICES.map((service) => {
      const active = pathname === `/service-details/${service.slug}`;
      const Icon = SERVICE_ICONS[service.slug] ?? Workflow;
      return (
        <li key={service.slug} className="flex! m-0! p-0!">
          <Link
            to={`/service-details/${service.slug}`}
            className={`services-menu-link group/service relative! w-full! rounded-[10px]! text-left! normal-case! no-underline! leading-[1.45]! text-[#f5f7f0]! transition-colors! duration-[180ms]! hover:bg-[#293022]! hover:text-[var(--theme-color1)]! focus-visible:bg-[#293022]! aria-[current=page]:bg-[#293022] aria-[current=page]:text-[var(--theme-color1)]! ${focus} ${mobile ? "flex! items-start! justify-between! gap-2.5! px-3! py-[14px]!" : "grid! grid-cols-[28px_minmax(0,1fr)]! items-start! gap-4! min-h-[148px]! p-5!"}`}
            aria-current={active ? "page" : undefined}
            onClick={() => setServicesOpen(false)}
          >
            <Icon className={`shrink-0! text-[var(--theme-color1)]! ${mobile ? "w-5! h-5! mt-0.5!" : ""}`} size={28} strokeWidth={1.6} aria-hidden="true" />
            <span className={`flex! flex-col! min-w-0! flex-1! ${mobile ? "gap-[5px]!" : "gap-2.5!"}`}>
              <span className={`font-semibold! tracking-[-0.02em]! ${mobile ? "text-sm!" : "text-base!"}`}>{service.title}</span>
              <span className={`text-[#bdc6b3]! font-normal! leading-[1.55]! ${mobile ? "text-xs!" : "text-[13px]!"}`}>{SERVICE_SUMMARIES[service.slug] ?? service.intro}</span>
            </span>
            <ArrowUpRight className={`shrink-0! transition-[transform,color]! duration-[180ms]! group-hover/service:translate-x-[3px]! group-focus-visible/service:translate-x-[3px]! group-aria-[current=page]/service:translate-x-[3px] text-[var(--theme-color1)]! ${mobile ? "hidden!" : "absolute! right-4! bottom-4!"}`} size={16} aria-hidden="true" />
          </Link>
        </li>
      );
    });
    const catalogLink = (
      <Link to="/services" className={`flex! items-center! justify-between! gap-4! min-h-[52px]! px-5! py-[15px]! rounded-[10px]! bg-[var(--theme-color1)]! text-[var(--body-bg)]! text-sm! leading-[1.5]! font-bold! normal-case! no-underline! transition-colors! duration-[180ms]! hover:bg-[#e7fa98]! ${focus} focus-visible:outline-[var(--body-bg)]! focus-visible:outline-offset-[-5px]!`} onClick={() => setServicesOpen(false)}>
        <span>View all services</span>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    );

    return (
      <li
        key={key}
        ref={servicesRef}
        data-open={servicesOpen}
        className={`services-nav-item ${itemClass} ${!mobile ? "after:absolute! after:top-full! after:left-[calc(50%+var(--services-panel-shift,0px))]! after:w-[1080px]! after:max-w-[calc(100vw-64px)]! after:h-4! after:-translate-x-1/2! after:content-['']! data-[open=false]:after:pointer-events-none" : ""}`}
        onMouseEnter={mobile ? undefined : () => setServicesOpen(true)}
        onMouseLeave={mobile ? undefined : () => {
          if (!servicesRef.current?.contains(document.activeElement)) setServicesOpen(false);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && servicesOpen) {
            event.preventDefault();
            event.stopPropagation();
            setServicesOpen(false);
            servicesRef.current?.querySelector<HTMLButtonElement>(".services-toggle, .mobile-services-toggle")?.focus();
          }
        }}
      >
        {mobile ? (
          <>
            <button
              type="button"
              className={`mobile-services-toggle flex! items-center! justify-between! gap-4! w-full! min-h-12! px-5! py-3! border-0! bg-transparent! text-left! text-base! leading-6! font-medium! cursor-pointer! ${focus} ${servicesOpen ? "text-[var(--theme-color1)]!" : "text-white!"}`}
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform! duration-[180ms]! ${servicesOpen ? "rotate-180!" : ""}`} aria-hidden="true" />
            </button>
            <ul id={servicesId} className="p-2! m-0! list-none! bg-[#1a1d17]! [&[hidden]]:hidden!" hidden={!servicesOpen}>
              {serviceLinks}
              <li className="mt-2! mx-1! mb-1!">{catalogLink}</li>
            </ul>
          </>
        ) : (
          <>
            <Link to="/services" className={`services-trigger-link ${linkClass} pr-[22px]! ${isServicesActive ? "[font-weight:700]!" : ""} ${sticky && isServicesActive ? "text-[var(--theme-color1)]!" : ""}`} onClick={() => setServicesOpen(false)}>Services</Link>
            <button
              type="button"
              className={`services-toggle absolute! top-1/2! -right-[3px] -translate-y-1/2! grid! place-items-center w-6! h-10! p-0! border-0! rounded-md! bg-transparent! cursor-pointer! text-inherit! hover:text-[var(--theme-color1)]! ${focus} ${servicesOpen ? "text-[var(--theme-color1)]!" : ""}`}
              aria-label="Services submenu"
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesOpen(!servicesOpen)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setServicesOpen(true);
                  requestAnimationFrame(() => servicesRef.current?.querySelector<HTMLAnchorElement>(".services-menu-link")?.focus());
                }
              }}
            >
              <ChevronDown size={14} className={`transition-transform! duration-[180ms]! ${servicesOpen ? "rotate-180!" : ""}`} aria-hidden="true" />
            </button>
            <div id={servicesId} className={`services-dropdown-panel absolute! top-[calc(100%+12px)]! left-[calc(50%+var(--services-panel-shift,0px))]! w-[1080px]! max-w-[calc(100vw-64px)]! max-h-[calc(100dvh-140px)]! overflow-auto! overscroll-contain! [scrollbar-width:thin] [scrollbar-color:#748164_#1a1d17] p-3! rounded-2xl! bg-[#1a1d17]! shadow-[0_18px_48px_rgba(0,0,0,0.4)]! z-[100]! -translate-x-1/2! transition-[opacity,translate,visibility]! duration-[180ms]! ease-[cubic-bezier(0.16,1,0.3,1)]! motion-reduce:transition-none! ${servicesOpen ? "opacity-100! visible! pointer-events-auto! translate-y-0!" : "opacity-0! invisible! pointer-events-none! -translate-y-1.5!"}`} inert={!servicesOpen}>
              <div className="flex! items-center! justify-between! gap-6! px-5! pt-4! pb-6!">
                <span className="text-[#f5f7f0]! text-[22px]! font-semibold! tracking-[-0.03em]! leading-[1.4]!">Explore our services</span>
                <Link to="/services" className={`inline-flex! items-center! gap-2! min-h-11! text-[var(--theme-color1)]! text-[13px]! font-semibold! no-underline! hover:underline! underline-offset-[5px]! ${focus}`} onClick={() => setServicesOpen(false)}>
                  <span>View all services</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <ul className="grid! grid-cols-3! gap-2! list-none! m-0! p-2!" aria-label="Services">
                {serviceLinks}
                <li className="flex! m-0! p-0!">
                  <Link to="/contact" className={`flex! flex-col! justify-between! gap-5! w-full! p-6! rounded-[10px]! bg-[var(--theme-color1)]! text-[var(--body-bg)]! transition-colors! duration-[180ms]! hover:bg-[#e7fa98]! ${focus} focus-visible:outline-[var(--body-bg)]! focus-visible:outline-offset-[-5px]!`} onClick={() => setServicesOpen(false)}>
                    <span className="text-2xl! font-semibold! leading-[1.25]! tracking-[-0.03em]!">Let’s talk growth.</span>
                    <span className="flex! items-center! justify-between! gap-4! text-[13px]! font-semibold! leading-[1.5]!">
                      Book a growth consultation
                      <ArrowRight size={20} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </li>
    );
  };

  const renderItems = (items: (Leaf | Node)[], depth: number) =>
    items.map((item, i) => {
      const key = `${depth}-${i}-${item.label}`;

      if ("isServicesMenu" in item && item.isServicesMenu) {
        return renderServicesDropdown(key);
      }

      const dropdown = hasChildren(item);
      const current = isCurrent(item);
      return (
        <li
          key={key}
          className={depth === 0 ? itemClass : mobile ? "relative! block! pl-5! border-b! border-white/10! last:border-b-0! first:border-t!" : "relative! w-full! border-b! border-[#1d2022]! last:border-b-0!"}
        >
          {"to" in item && item.to ? (
            <Link to={item.to} className={`${depth === 0 || mobile ? linkClass : `relative! block! py-2.5! mx-[30px]! text-base! leading-[29px]! font-medium! text-white! hover:text-[var(--theme-color1)]! ${focus}`} ${current ? "[font-weight:700]!" : ""} ${current && (mobile || sticky) ? "text-[var(--theme-color1)]!" : ""}`}>{item.label}</Link>
          ) : (
            <a
              href="#"
              className={linkClass}
              onClick={(e) => {
                if (mobile && dropdown) {
                  e.preventDefault();
                  toggle(key);
                }
              }}
            >
              {item.label}
            </a>
          )}
          {dropdown && (
            <ul className={mobile ? `${open[key] ? "block!" : "hidden!"} list-none! m-0! p-0!` : "absolute! top-full! left-0! w-[220px]! pt-2.5! m-0! list-none! bg-[var(--body-bg)]! z-[100]! invisible! opacity-0! group-hover/nav:visible! group-hover/nav:opacity-100! group-focus-within/nav:visible! group-focus-within/nav:opacity-100! shadow-[2px_2px_5px_1px_rgba(0,0,0,0.05),-2px_0_5px_1px_rgba(0,0,0,0.05)]!"}>
              {renderItems(item.children, depth + 1)}
            </ul>
          )}
          {dropdown && (
            <button
              type="button"
              aria-label={`${item.label} submenu`}
              aria-expanded={!!open[key]}
              className={`absolute! top-0! right-0! w-11! h-11! grid! place-items-center border-0! bg-transparent! text-white! cursor-pointer! before:absolute! before:left-0! before:top-2.5! before:h-6! before:border-l! before:border-white/10! ${focus} ${mobile ? "" : "hidden!"}`}
              onClick={() => toggle(key)}
            >
              <ChevronDown size={17} className={open[key] ? "rotate-180!" : ""} aria-hidden="true" />
            </button>
          )}
        </li>
      );
    });

  return <>{renderItems(MENU, 0)}</>;
}
