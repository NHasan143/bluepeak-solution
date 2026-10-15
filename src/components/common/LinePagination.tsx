interface LinePaginationProps {
  label: string;
  labels: string[];
  currentIndex: number;
  controlsId: string;
  onSelect: (index: number) => void;
  tone?: "dark" | "light";
  status: string;
  className?: string;
}

export default function LinePagination({ label, labels, currentIndex, controlsId, onSelect, tone = "light", status, className = "" }: LinePaginationProps) {
  if (labels.length < 2) return null;
  const light = tone === "light";
  return (
    <nav aria-label={label} className={`relative! z-[1000]! mt-8! flex! items-center! justify-center! gap-0! sm:mt-10! sm:gap-1! ${className}`}>
      {labels.map((item, index) => (
        <button key={index} type="button" aria-label={item} aria-controls={controlsId} aria-current={index === currentIndex ? "page" : undefined} onClick={() => onSelect(index)} className="group/pagination inline-flex! size-11! shrink-0! items-center! justify-center! rounded-lg! border-0! bg-transparent! cursor-pointer! focus-visible:outline-2! focus-visible:outline-solid! focus-visible:outline-[#C3422A]! focus-visible:outline-offset-2!">
          <span aria-hidden="true" data-pagination-indicator className={`block! h-1! w-8! rounded-full! transition-colors! duration-200! motion-reduce:transition-none! group-hover/pagination:bg-[var(--theme-color-coral)]! ${index === currentIndex ? (light ? "bg-[#064C44]!" : "bg-[var(--theme-color-coral)]!") : (light ? "bg-[#94837c]!" : "bg-white/60!")}`} />
        </button>
      ))}
      <span role="status" aria-live="polite" aria-atomic="true" className="sr-only!">{status}</span>
    </nav>
  );
}
