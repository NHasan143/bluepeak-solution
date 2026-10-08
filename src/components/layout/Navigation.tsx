import { useState } from "react";
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
    label: "Pages",
    children: [
      {
        label: "Projects",
        children: [
          { label: "Our Projects", to: "/projects" },
          { label: "Project Details", to: "/project-details" },
        ],
      },
      { label: "Testimonial", to: "/testimonial" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
      { label: "Page 404", to: "/404" },
    ],
  },
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

function hasChildren(
  n: Leaf | Node,
): n is Node & { children: (Leaf | Node)[] } {
  return "children" in n && Array.isArray(n.children) && n.children.length > 0;
}

/**
 * Navigation component. Used in the main header, sticky header, and mobile menu.
 */
export default function Navigation({ mobile = false }: { mobile?: boolean }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<Record<string, boolean>>({});

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

    if (mobile) {
      return (
        <li
          key={key}
          className={[
            "dropdown",
            "services-nav-item",
            isServicesActive ? "current" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggle(key);
            }}
          >
            Services
          </a>
          <ul
            className="mobile-services-dropdown"
            style={open[key] ? { display: "block" } : undefined}
          >
            {SERVICES.map((service, index) => {
              const active = pathname === `/service-details/${service.slug}`;
              return (
                <li
                  key={service.slug}
                  className={active ? "current" : undefined}
                >
                  <Link to={`/service-details/${service.slug}`}>
                    <span className="mobile-svc-num">0{index + 1}.</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="mobile-services-footer-item">
              <Link to="/services" className="mobile-services-view-all">
                <span>View All Services</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </li>
          </ul>
          <div
            className={`dropdown-btn${open[key] ? " active" : ""}`}
            onClick={() => toggle(key)}
          >
            <i className="fa fa-angle-down" />
          </div>
        </li>
      );
    }

    // Desktop services item with custom matching modal
    return (
      <li
        key={key}
        className={[
          "dropdown",
          "services-nav-item",
          isServicesActive ? "current" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Link to="/services">Services</Link>
        <ul className="services-dropdown-modal" role="menu">
          <li className="services-modal-header" role="presentation">
            <span className="services-modal-badge">
              <span className="services-modal-dot" />
              Capabilities &amp; Services
            </span>
            <span className="services-modal-badge-subtitle">5 Core Disciplines</span>
          </li>

          {SERVICES.map((service, index) => {
            const isItemActive = pathname === `/service-details/${service.slug}`;
            return (
              <li
                key={service.slug}
                className={`services-modal-item${isItemActive ? " is-active" : ""}`}
                role="menuitem"
              >
                <Link
                  to={`/service-details/${service.slug}`}
                  className="services-modal-link"
                >
                  <div className="services-modal-left">
                    <span className="services-modal-num">0{index + 1}</span>
                    <span className="services-modal-item-title">{service.title}</span>
                  </div>
                  <span className="services-modal-arrow" aria-hidden="true">
                    <i className="fas fa-arrow-right" />
                  </span>
                </Link>
              </li>
            );
          })}

          <li className="services-modal-footer" role="presentation">
            <Link to="/services" className="services-modal-view-all">
              <span>View All Services</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down" />
        </div>
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
