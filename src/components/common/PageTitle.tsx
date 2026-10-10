import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageTitle({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative! bg-center! bg-cover! bg-no-repeat! pt-[200px]! pb-[175px]! before:absolute! before:inset-0! before:bg-[#131313]! before:opacity-70!">
      <div className="mx-auto! w-full! max-w-[1320px]! px-[15px]!">
        <div className="text-center!">
          <h1 className="text-[50px]! leading-[60px]! min-[576px]:text-[64px]! min-[576px]:leading-none! text-white! mb-2!">{title}</h1>
          <ul className="relative! mt-[5px]! mb-0! p-0! list-none! text-sm! leading-[30.4px]! text-white! capitalize!">
            <li className="relative! inline-block! mr-3! pr-[13px]!">
              <Link to="/" className="font-medium! text-[var(--theme-color-light)]! transition-colors! duration-300!">Home</Link>
              <ChevronRight size={14} strokeWidth={3} aria-hidden="true" className="absolute! -right-[6px]! top-[8px]!" />
            </li>
            <li className="inline-block! font-normal!">{crumb}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
