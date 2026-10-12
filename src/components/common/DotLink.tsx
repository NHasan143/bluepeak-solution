import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/** Deep Teal pill button with Coral accent dot animation, matching the brand ratio. */
export default function DotLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={`group/dot relative! inline-flex! items-center! justify-center! gap-2! overflow-hidden! rounded-[60px]! border! border-[#064C44]/40! bg-[#064C44]! py-[7px]! pr-[7px]! pl-[31px]! text-base! font-semibold! leading-[1.9]! text-white! transition-all! duration-300! hover:bg-[#043630]! hover:border-[#FF593E]/40! before:absolute! before:inset-0! before:w-[101%]! before:bg-[#043630]! before:scale-x-0! before:origin-top-right! before:transition-transform! before:duration-500! before:ease-[cubic-bezier(0.86,0,0.07,1)]! hover:before:scale-x-100! hover:before:origin-bottom-left! focus-visible:outline-2! focus-visible:outline-[#FF593E]! focus-visible:outline-offset-2! motion-reduce:[&_*]:transition-none! motion-reduce:before:transition-none! ${className}`}>
      <span className="relative! z-[1]!">{children}</span>
      <span aria-hidden="true" className="relative! z-[1]! ml-3! size-10! shrink-0! rounded-full! bg-[#032622]! transition-colors! duration-300! group-hover/dot:bg-[#FF593E]!">
        <span className="absolute! left-[calc(50%+3px)]! top-[calc(50%-2.5px)]! size-[5px]! rounded-full! bg-[#FF593E]! transition-all! duration-300! group-hover/dot:left-[calc(50%-7px)]! group-hover/dot:bg-white! before:absolute! before:-left-[7px] before:-top-[7px] before:size-[5px]! before:rounded-full! before:bg-[#FF593E]! before:transition-all! before:duration-300! group-hover/dot:before:left-[7px]! group-hover/dot:before:top-[7px]! group-hover/dot:before:bg-white! after:absolute! after:-left-[7px] after:-bottom-[7px] after:size-[5px]! after:rounded-full! after:bg-[#FF593E]! after:transition-all! after:duration-300! group-hover/dot:after:left-[7px]! group-hover/dot:after:bottom-[7px]! group-hover/dot:after:bg-white!" />
      </span>
    </Link>
  );
}
