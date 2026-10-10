import Star from "./Star";

export default function PageEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div data-page-eyebrow className="mb-[5px]! flex! items-center! gap-[5px]! text-sm! leading-[30px]! font-normal! text-white! uppercase!">
      <span aria-hidden="true" className="flex! shrink-0! -translate-y-px!">
        <Star variant="lime" />
      </span>
      <span>{children}</span>
    </div>
  );
}
