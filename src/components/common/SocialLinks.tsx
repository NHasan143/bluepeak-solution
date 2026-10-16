import type { SVGProps } from "react";

const FacebookIcon = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/** Shared social links for the footer and navigation drawer. */
export default function SocialLinks({ className = "", delay }: { className?: string; delay?: string }) {
  return (
    <ul aria-label="Social links" className={`flex! items-center! gap-4! list-none! p-0! m-0! ${className}`} data-wow-delay={delay}>
      {[
        { label: "Facebook", Icon: FacebookIcon },
        { label: "LinkedIn", Icon: LinkedinIcon },
      ].map(({ label, Icon }) => (
        <li key={label}>
          <a href="#" aria-label={label} className="text-white! hover:text-[var(--theme-color-coral)]! focus-visible:text-[var(--theme-color-coral)]! transition-colors! duration-200! motion-reduce:transition-none! focus-visible:outline-2! focus-visible:outline-white! focus-visible:outline-offset-4!">
            <Icon size={24} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
