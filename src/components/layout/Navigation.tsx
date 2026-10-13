import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowUpRight, ChartNoAxesCombined, ChevronDown,
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
export default function Navigation({ mobile = false, sticky = false, light = false }: { mobile?: boolean; sticky?: boolean; light?: boolean }) {
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
      return pathname === "/services" || pathname.startsWith("/services/");
    }
    if ("to" in n && n.to) {
      if (n.to === "/") return pathname === "/";
      return pathname === n.to || pathname.startsWith(n.to + "/");
    }
    if (hasChildren(n)) return n.children.some(isCurrent);
    return false;
  };

  const lightHeader = light && !mobile;
  const focus = `focus-visible:outline-2! focus-visible:outline-offset-[-2px]! motion-reduce:transition-none! ${lightHeader || mobile ? "focus-visible:outline-[var(--theme-color-coral)]!" : "focus-visible:outline-[#FF593E]!"}`;
  const itemClass = mobile
    ? "relative! block! border-b! border-[#eaded9]!"
    : sticky
      ? `relative! py-5! ml-[46px]! group/nav ${lightHeader ? "text-[#261d1a]!" : ""}`
      : `relative! py-[18px]! mr-7! min-[1400px]:mr-[45px]! min-[1700px]:mr-[60px]! last:mr-0! group/nav ${lightHeader ? "text-[#261d1a]!" : ""}`;
  const linkClass = mobile
    ? `relative! block! px-5! py-3! text-base! leading-6! font-medium! text-[#261d1a]! hover:text-[var(--theme-color-coral)]! ${focus}`
    : `relative! flex! p-0! text-[15px]! min-[1900px]:text-base! leading-[30px]! font-medium! transition-colors! duration-300! ${lightHeader ? "text-[#261d1a]! hover:text-[var(--theme-color-coral)]!" : "text-white! hover:text-[#FF593E]!"} ${focus}`;

  const renderServicesDropdown = (key: string) => {
    const isServicesActive = isCurrent({ label: "Services", isServicesMenu: true });
    const serviceLinks = SERVICES.map((service) => {
      const active = pathname === `/services/${service.slug}`;
      const Icon = SERVICE_ICONS[service.slug] ?? Workflow;
      const content = () => (
        <>
          <span className="relative! z-10! inline-flex! shrink-0!">
            {!mobile && (
              <span
                aria-hidden="true"
                className="service-icon-backdrop absolute! -inset-2! -z-10! rounded-[13px]! bg-[#064C44]! opacity-0! group-hover/service:opacity-100! group-focus-visible/service:opacity-100! transition-[opacity,scale]! duration-[400ms]! ease-[cubic-bezier(0.22,0.61,0.36,1)]! motion-safe:scale-90! motion-safe:group-hover/service:scale-100! motion-safe:group-focus-visible/service:scale-100! motion-reduce:transition-none!"
              />
            )}
            <Icon
              className={`service-card-icon shrink-0! text-[var(--theme-color-coral)]! transition-colors! duration-[400ms]! motion-reduce:transition-none! ${
                mobile ? "w-5! h-5! mt-0.5!" : "group-hover/service:text-white! group-focus-visible/service:text-white!"
              }`}
              size={28}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </span>
          <span className={`flex! flex-col! min-w-0! flex-1! ${mobile ? "gap-[5px]!" : "gap-2.5!"}`}>
            <span
              className={`font-semibold! tracking-[-0.02em]! text-[#261d1a]! group-hover/service:text-[#064C44]! ${
                mobile ? "text-sm!" : "text-base!"
              }`}
            >
              {service.title}
            </span>
            <span
              className={`text-[#66544e]! font-normal! leading-[1.55]! transition-colors! duration-200! group-hover/service:text-[#261d1a]! group-focus-visible/service:text-[#261d1a]! motion-reduce:transition-none! ${
                mobile ? "text-xs!" : "text-[13px]!"
              }`}
            >
              {SERVICE_SUMMARIES[service.slug] ?? service.intro}
            </span>
          </span>
          {!mobile && (
            <span
              aria-hidden="true"
              className="service-arrow-window absolute! right-4! bottom-4! grid! size-8! place-items-center! overflow-hidden! rounded-full! ring-1! ring-inset! ring-[#eaded9]! bg-[#faf8f7]! text-[var(--theme-color-coral)]! transition-colors! duration-[400ms]! group-hover/service:bg-[#064C44]! group-hover/service:ring-[#064C44]! group-hover/service:text-white! motion-reduce:transition-none!"
            >
              <ArrowUpRight
                size={16}
                className="absolute! transition-[translate,opacity]! duration-300! ease-out! motion-safe:group-hover/service:translate-x-4! motion-safe:group-hover/service:-translate-y-4! motion-safe:group-hover/service:opacity-0! motion-safe:group-focus-visible/service:translate-x-4! motion-safe:group-focus-visible/service:-translate-y-4! motion-safe:group-focus-visible/service:opacity-0! motion-reduce:transition-none!"
              />
              <ArrowUpRight
                size={16}
                className="absolute! opacity-0! motion-safe:-translate-x-4! motion-safe:translate-y-4! transition-[translate,opacity]! duration-300! ease-out! motion-safe:group-hover/service:translate-none! motion-safe:group-hover/service:opacity-100! motion-safe:group-focus-visible/service:translate-none! motion-safe:group-focus-visible/service:opacity-100! motion-reduce:transition-none!"
              />
            </span>
          )}
        </>
      );
      return (
        <li key={service.slug} className="flex! m-0! p-0!">
          <Link
            to={`/services/${service.slug}`}
            className={`services-menu-link group/service relative! isolate! w-full! rounded-[10px]! text-left! normal-case! no-underline! leading-[1.45]! transition-colors! duration-[400ms]! ${
              mobile
                ? "flex! items-start! justify-between! gap-2.5! px-3! py-[14px]! rounded-[8px]! text-[#261d1a]! hover:bg-[#064C44]/5! focus-visible:bg-[#064C44]/5! aria-[current=page]:bg-[#064C44]/10 aria-[current=page]:text-[var(--theme-color-coral)]!"
                : "grid! grid-cols-[28px_minmax(0,1fr)]! items-start! gap-4! min-h-[148px]! p-5! text-[#261d1a]! rounded-[12px]! border! border-transparent! hover:border-[#eaded9]! hover:bg-[#faf8f7]! aria-[current=page]:bg-[#064C44]/10 aria-[current=page]:border-[#064C44]/20! aria-[current=page]:text-[var(--theme-color-coral)]!"
            } ${focus}`}
            aria-current={active ? "page" : undefined}
            onClick={() => setServicesOpen(false)}
          >
            {content()}
          </Link>
        </li>
      );
    });

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
              className={`mobile-services-toggle flex! items-center! justify-between! gap-4! w-full! min-h-12! px-5! py-3! border-0! bg-transparent! text-left! text-base! leading-6! font-medium! cursor-pointer! ${focus} ${servicesOpen ? "text-[var(--theme-color-coral)]!" : "text-[#261d1a]!"}`}
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform! duration-[180ms]! ${servicesOpen ? "rotate-180!" : ""}`} aria-hidden="true" />
            </button>
            <ul id={servicesId} className="p-2! m-0! list-none! bg-[#faf8f7]! border-y! border-[#eaded9]! [&[hidden]]:hidden!" hidden={!servicesOpen}>
              {serviceLinks}
            </ul>
          </>
        ) : (
          <>
            <Link to="/services" className={`services-trigger-link ${linkClass} pr-[22px]! ${isServicesActive ? "[font-weight:700]!" : ""} ${sticky && isServicesActive ? lightHeader ? "text-[var(--theme-color-coral)]!" : "text-[#FF593E]!" : ""}`} onClick={() => setServicesOpen(false)}>Services</Link>
            <button
              type="button"
              className={`services-toggle absolute! top-1/2! -right-[3px] -translate-y-1/2! grid! place-items-center w-6! h-10! p-0! border-0! rounded-md! bg-transparent! cursor-pointer! text-inherit! ${lightHeader ? "hover:text-[var(--theme-color-coral)]!" : "hover:text-[#FF593E]!"} ${focus} ${servicesOpen ? lightHeader ? "text-[var(--theme-color-coral)]!" : "text-[#FF593E]!" : ""}`}
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
            <div
              id={servicesId}
              className={`services-dropdown-panel absolute! top-[calc(100%+12px)]! left-[calc(50%+var(--services-panel-shift,0px))]! w-[1080px]! max-w-[calc(100vw-64px)]! max-h-[calc(100dvh-140px)]! overflow-auto! overscroll-contain! [scrollbar-width:thin] [scrollbar-color:#064C44_#faf8f7] p-3! rounded-2xl! bg-white! border! border-[#eaded9]! shadow-[0_20px_50px_rgba(6,76,68,0.12),0_4px_16px_rgba(0,0,0,0.06)]! z-[100]! -translate-x-1/2! transition-[opacity,translate,visibility]! duration-[180ms]! ease-[cubic-bezier(0.16,1,0.3,1)]! motion-reduce:transition-none! ${
                servicesOpen ? "opacity-100! visible! pointer-events-auto! translate-y-0!" : "opacity-0! invisible! pointer-events-none! -translate-y-1.5!"
              }`}
              inert={!servicesOpen}
            >
              <ul className="grid! grid-cols-3! gap-2! list-none! m-0! p-2!" aria-label="Services">
                {serviceLinks}
                <li className="flex! m-0! p-0!">
                  <Link
                    to="/contact"
                    className={`services-consultation-link group/consultation flex! flex-col! justify-between! gap-4! w-full! min-h-[148px]! p-5! rounded-[12px]! border! border-[#064C44]/20! bg-[#064C44]/[0.05]! text-[#261d1a]! transition-all! duration-300! hover:border-[var(--theme-color-coral)]! hover:bg-[#064C44]/[0.08]! focus-visible:border-[var(--theme-color-coral)]! ${focus}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="flex! items-start! justify-between! gap-4!">
                      <span className="text-[26px]! font-medium! leading-[1.1]! tracking-[-0.03em]! text-[#261d1a]!">
                        Let’s talk{" "}
                        <span className="block! font-[family-name:var(--style-font)]! text-[34px]! font-normal! italic! text-[var(--theme-color-coral)]!">
                          growth.
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid! size-11! shrink-0! place-items-center! overflow-hidden! rounded-full! bg-[#064C44]! text-white! group-hover/consultation:bg-[var(--theme-color-coral)]! transition-colors! duration-300!"
                      >
                        <ArrowUpRight
                          size={22}
                          strokeWidth={1.6}
                          className="transition-[translate]! duration-300! ease-out! motion-safe:group-hover/consultation:translate-x-0.5! motion-safe:group-hover/consultation:-translate-y-0.5! motion-safe:group-focus-visible/consultation:translate-x-0.5! motion-safe:group-focus-visible/consultation:-translate-y-0.5! motion-reduce:translate-none! motion-reduce:transition-none!"
                        />
                      </span>
                    </span>
                    <span className="text-[13px]! font-medium! leading-[1.5]! text-[#556966]! transition-colors! duration-300! group-hover/consultation:text-[#064C44]! group-focus-visible/consultation:text-[#064C44]! motion-reduce:transition-none!">
                      Book a growth consultation
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
          className={
            depth === 0
              ? itemClass
              : mobile
                ? "relative! block! pl-5! border-b! border-[#eaded9]! last:border-b-0! first:border-t!"
                : `relative! w-full! border-b! ${lightHeader ? "border-[#eaded9]!" : "border-[#1d2022]!"} last:border-b-0!`
          }
        >
          {"to" in item && item.to ? (
            <Link
              to={item.to}
              className={`${
                depth === 0 || mobile
                  ? linkClass
                  : `relative! block! py-2.5! mx-[30px]! text-base! leading-[29px]! font-medium! ${
                      lightHeader ? "text-[#261d1a]! hover:text-[var(--theme-color-coral)]!" : "text-white! hover:text-[var(--theme-color1)]!"
                    } ${focus}`
              } ${current ? "[font-weight:700]!" : ""} ${
                current && (mobile || sticky)
                  ? lightHeader || mobile
                    ? "text-[var(--theme-color-coral)]!"
                    : "text-[var(--theme-color1)]!"
                  : ""
              }`}
            >
              {item.label}
            </Link>
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
            <ul
              className={
                mobile
                  ? `${open[key] ? "block!" : "hidden!"} list-none! m-0! p-0! bg-[#faf8f7]! border-y! border-[#eaded9]!`
                  : `absolute! top-full! left-0! w-[220px]! pt-2.5! m-0! list-none! ${
                      lightHeader
                        ? "bg-white! border! border-[#eaded9]! shadow-[0_12px_32px_rgba(0,0,0,0.08)]!"
                        : "bg-[var(--body-bg)]! shadow-[2px_2px_5px_1px_rgba(0,0,0,0.05),-2px_0_5px_1px_rgba(0,0,0,0.05)]!"
                    } z-[100]! invisible! opacity-0! group-hover/nav:visible! group-hover/nav:opacity-100! group-focus-within/nav:visible! group-focus-within/nav:opacity-100! rounded-xl!`
              }
            >
              {renderItems(item.children, depth + 1)}
            </ul>
          )}
          {dropdown && (
            <button
              type="button"
              aria-label={`${item.label} submenu`}
              aria-expanded={!!open[key]}
              className={`absolute! top-0! right-0! w-11! h-11! grid! place-items-center border-0! bg-transparent! ${
                mobile ? "text-[#261d1a]!" : "text-white!"
              } cursor-pointer! before:absolute! before:left-0! before:top-2.5! before:h-6! before:border-l! ${
                mobile ? "before:border-[#eaded9]!" : "before:border-white/10!"
              } ${focus} ${mobile ? "" : "hidden!"}`}
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
