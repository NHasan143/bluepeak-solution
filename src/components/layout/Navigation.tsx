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
export default function Navigation({ mobile = false }: { mobile?: boolean }) {
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

  const renderServicesDropdown = (key: string) => {
    const isServicesActive = isCurrent({ label: "Services", isServicesMenu: true });
    const serviceLinks = SERVICES.map((service) => {
      const active = pathname === `/service-details/${service.slug}`;
      const Icon = SERVICE_ICONS[service.slug] ?? Workflow;
      return (
        <li key={service.slug}>
          <Link
            to={`/service-details/${service.slug}`}
            className="services-menu-link"
            aria-current={active ? "page" : undefined}
            onClick={() => setServicesOpen(false)}
          >
            <Icon className="services-menu-icon" size={28} strokeWidth={1.6} aria-hidden="true" />
            <span className="services-menu-copy">
              <span className="services-menu-title">{service.title}</span>
              <span className="services-menu-description">{SERVICE_SUMMARIES[service.slug] ?? service.intro}</span>
            </span>
            <ArrowUpRight className="services-menu-arrow" size={16} aria-hidden="true" />
          </Link>
        </li>
      );
    });
    const catalogLink = (
      <Link to="/services" className="services-menu-catalog" onClick={() => setServicesOpen(false)}>
        <span>View all services</span>
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    );

    return (
      <li
        key={key}
        ref={servicesRef}
        className={`dropdown services-nav-item${isServicesActive ? " current" : ""}${servicesOpen ? " is-services-open" : ""}`}
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
              className="mobile-services-toggle"
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <ul id={servicesId} className="mobile-services-dropdown" hidden={!servicesOpen}>
              {serviceLinks}
              <li className="services-menu-footer">{catalogLink}</li>
            </ul>
          </>
        ) : (
          <>
            <Link to="/services" className="services-trigger-link" onClick={() => setServicesOpen(false)}>Services</Link>
            <button
              type="button"
              className="services-toggle"
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
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div id={servicesId} className="services-dropdown-panel" inert={!servicesOpen}>
              <div className="services-mega-heading">
                <span className="services-mega-title">Explore our services</span>
                <Link to="/services" className="services-mega-all" onClick={() => setServicesOpen(false)}>
                  <span>View all services</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <ul className="services-menu-list" aria-label="Services">
                {serviceLinks}
                <li className="services-mega-consultation">
                  <Link to="/contact" onClick={() => setServicesOpen(false)}>
                    <span className="services-mega-consultation-title">Let’s talk growth.</span>
                    <span className="services-mega-consultation-action">
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
          className={[
            dropdown ? "dropdown" : "",
            current ? "current" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {"to" in item && item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <a
              href="#"
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
            <ul style={mobile && open[key] ? { display: "block" } : undefined}>
              {renderItems(item.children, depth + 1)}
            </ul>
          )}
          {dropdown && (
            <div
              className={`dropdown-btn${open[key] ? " active" : ""}`}
              onClick={() => toggle(key)}
            >
              <i className="fa fa-angle-down" />
            </div>
          )}
        </li>
      );
    });

  return <>{renderItems(MENU, 0)}</>;
}
