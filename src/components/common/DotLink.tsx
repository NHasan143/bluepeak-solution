import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/** The existing lime button and its three-dot hover animation, using utilities. */
export default function DotLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={`group/dot relative! inline-flex! items-center! justify-center! gap-2! overflow-hidden! rounded-[60px]! border! border-transparent! bg-[var(--theme-color1)]! py-[7px]! pr-[7px]! pl-[31px]! text-base! font-semibold! leading-[1.9]! text-[var(--headings-color)]! transition-colors! duration-300! hover:text-white! hover:border-white/20! before:absolute! before:inset-0! before:w-[101%]! before:bg-[var(--headings-color)]! before:scale-x-0! before:origin-top-right! before:transition-transform! before:duration-500! before:ease-[cubic-bezier(0.86,0,0.07,1)]! hover:before:scale-x-100! hover:before:origin-bottom-left! focus-visible:outline-2! focus-visible:outline-[var(--theme-color1)]! motion-reduce:[&_*]:transition-none! motion-reduce:before:transition-none! ${className}`}>
      <span className="relative!">{children}</span>
      <span aria-hidden="true" className="relative! ml-3! size-10! shrink-0! rounded-full! bg-[var(--headings-color)]! transition-colors! duration-300! group-hover/dot:bg-[var(--theme-color1)]!">
        <span className="absolute! left-[calc(50%+3px)]! top-[calc(50%-2.5px)]! size-[5px]! rounded-full! bg-white! transition-all! duration-300! group-hover/dot:left-[calc(50%-7px)]! group-hover/dot:bg-[var(--headings-color)]! before:absolute! before:-left-[7px] before:-top-[7px] before:size-[5px]! before:rounded-full! before:bg-white! before:transition-all! before:duration-300! group-hover/dot:before:left-[7px]! group-hover/dot:before:top-[7px]! group-hover/dot:before:bg-[var(--headings-color)]! after:absolute! after:-left-[7px] after:-bottom-[7px] after:size-[5px]! after:rounded-full! after:bg-white! after:transition-all! after:duration-300! group-hover/dot:after:left-[7px]! group-hover/dot:after:bottom-[7px]! group-hover/dot:after:bg-[var(--headings-color)]!" />
      </span>
    </Link>
  );
}
