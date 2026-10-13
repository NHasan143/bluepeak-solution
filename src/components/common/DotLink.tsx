import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/** Brand pill button with a contrasting animated dot detail. */
export default function DotLink({ to, children, className = "", accent = "teal" }: { to: string; children: ReactNode; className?: string; accent?: "teal" | "coral" }) {
  const coral = accent === "coral";
  const colors = coral
    ? "border-[var(--theme-color-coral)]! bg-[var(--theme-color-coral)]! text-[#261d1a]! hover:bg-[#f24c32]! hover:border-[#f24c32]! before:bg-[#f24c32]! focus-visible:outline-[#C3422A]!"
    : "border-[#064C44]/40! bg-[#064C44]! text-white! hover:bg-[#043630]! hover:border-[#FF593E]/40! before:bg-[#043630]! focus-visible:outline-[#FF593E]!";
  const diskColors = coral ? "bg-[#261d1a]/10! group-hover/dot:bg-[#261d1a]/15!" : "bg-[#032622]! group-hover/dot:bg-[#FF593E]!";
  const dotColors = coral
    ? "bg-[#261d1a]! group-hover/dot:bg-[#261d1a]! before:bg-[#261d1a]! group-hover/dot:before:bg-[#261d1a]! after:bg-[#261d1a]! group-hover/dot:after:bg-[#261d1a]!"
    : "bg-[#FF593E]! group-hover/dot:bg-white! before:bg-[#FF593E]! group-hover/dot:before:bg-white! after:bg-[#FF593E]! group-hover/dot:after:bg-white!";
  return (
    <Link to={to} className={`group/dot relative! inline-flex! items-center! justify-center! gap-2! overflow-hidden! rounded-[60px]! border! py-[7px]! pr-[7px]! pl-[31px]! text-base! font-semibold! leading-[1.9]! transition-all! duration-300! before:absolute! before:inset-0! before:w-[101%]! before:scale-x-0! before:origin-top-right! before:transition-transform! before:duration-500! before:ease-[cubic-bezier(0.86,0,0.07,1)]! hover:before:scale-x-100! hover:before:origin-bottom-left! focus-visible:outline-2! focus-visible:outline-offset-2! motion-reduce:[&_*]:transition-none! motion-reduce:before:transition-none! ${colors} ${className}`}>
      <span className="relative! z-[1]!">{children}</span>
      <span aria-hidden="true" className={`relative! z-[1]! ml-3! size-10! shrink-0! rounded-full! transition-colors! duration-300! ${diskColors}`}>
        <span className={`absolute! left-[calc(50%+3px)]! top-[calc(50%-2.5px)]! size-[5px]! rounded-full! transition-all! duration-300! group-hover/dot:left-[calc(50%-7px)]! before:absolute! before:-left-[7px] before:-top-[7px] before:size-[5px]! before:rounded-full! before:transition-all! before:duration-300! group-hover/dot:before:left-[7px]! group-hover/dot:before:top-[7px]! after:absolute! after:-left-[7px] after:-bottom-[7px] after:size-[5px]! after:rounded-full! after:transition-all! after:duration-300! group-hover/dot:after:left-[7px]! group-hover/dot:after:bottom-[7px]! ${dotColors}`} />
      </span>
    </Link>
  );
}
