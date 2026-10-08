import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Leaf = { label: string; to: string };
type Node = { label: string; to?: string; children?: (Leaf | Node)[] };

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
      {
        label: "Team",
        children: [
          { label: "Our Team", to: "/team" },
          { label: "Team Details", to: "/team-details" },
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
    children: [
      { label: "Our Services", to: "/services" },
      { label: "service Details", to: "/service-details" },
    ],
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
 * Desktop navigation. In the original, js/script.js clones this markup into the
 * mobile menu and sticky header; here it is simply rendered wherever needed.
 */
export default function Navigation({ mobile = false }: { mobile?: boolean }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpen((s) => ({ ...s, [key]: !s[key] }));

  const isCurrent = (n: Leaf | Node): boolean => {
    if ("to" in n && n.to) {
      if (n.to === "/") return pathname === "/";
      return pathname === n.to || pathname.startsWith(n.to + "/");
    }
    if (hasChildren(n)) return n.children.some(isCurrent);
    return false;
  };

  const renderItems = (items: (Leaf | Node)[], depth: number) =>
    items.map((item, i) => {
      const key = `${depth}-${i}-${item.label}`;
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
            <a href="#">{item.label}</a>
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
