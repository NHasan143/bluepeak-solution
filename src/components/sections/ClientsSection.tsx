import type { ReactNode } from "react";

/** The existing trust band, shared by Home and About. */
export default function ClientsSection({ id, compact = false, splitHeading = false, heading = true, showObject = true, children, tone = "dark" }: { id?: string; compact?: boolean; splitHeading?: boolean; heading?: boolean; showObject?: boolean; children?: ReactNode; tone?: "dark" | "light" }) {
  const light = tone === "light";
  const verticalPadding = compact ? "py-10! min-[992px]:py-14! min-[1200px]:py-16!" : "py-20! min-[992px]:py-[100px]! min-[1200px]:py-[130px]!";
  return (
    <section id={id} className="relative! z-[9]!">
      {!light && <div className="absolute! top-[-30%]! left-[-8%]! -z-[1]!"><img src="/images/icons/client1-1ellipse.png" alt="Soft lime-green circular glow" title="Soft lime-green circular glow" aria-hidden="true" /></div>}
      {!light && <div className="absolute! bottom-[-30%]! right-0! -z-[1]!"><img src="/images/icons/client1-2ellipse.png" alt="Soft lime-green circular glow" title="Soft lime-green circular glow" aria-hidden="true" /></div>}
      {!light && showObject && <div className="tm-gsap-animate-circle absolute! bottom-[-130px]! left-0! hidden! min-[1400px]:block!"><img src="/images/icons/object-vec.png" alt="Abstract decorative shape" title="Abstract decorative shape" aria-hidden="true" /></div>}
      <div data-clients-panel className={`relative! z-[99]! overflow-hidden! rounded-[30px]! ${light ? "bg-[#faf8f7]! border! border-[#eaded9]!" : "bg-[var(--theme-color3)]!"} mx-5! px-[15px]! ${verticalPadding} min-[1200px]:mx-10! min-[1200px]:px-0! min-[1400px]:mx-[50px]! min-[1700px]:mx-[100px]!`}>
        <div className="absolute! top-0! left-0! -z-[1]!"><img src="/images/icons/client1-shape-1.png" alt="Soft green and coral background with small stars" title="Soft green and coral background with small stars" aria-hidden="true" /></div>
        <div className="absolute! right-0! bottom-0! top-0! -z-[1]! [&>img]:h-full!"><img src="/images/icons/client1-line-1.png" alt="Colorful flowing wave pattern" title="Colorful flowing wave pattern" aria-hidden="true" /></div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          {children ?? (heading && <div className="relative! mb-0! text-center!">
            <h2 className={`text-anim ${light ? "text-[#261d1a]!" : "text-white!"} ${splitHeading ? "text-[clamp(1rem,5.8vw,3.75rem)]! leading-[1.1]! tracking-[-0.03em]!" : "text-[35px]! leading-[40px]! tracking-[-1.5px]! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!"}`}>
              Powering Growth for{splitHeading ? <br className="block!" /> : " "}<span className={`${splitHeading ? "whitespace-nowrap!" : ""} text-[var(--theme-color-coral)]! font-normal! italic! font-[family-name:var(--style-font)]!`}>Businesses Across Industries</span>
            </h2>
          </div>)}
        </div>
      </div>
    </section>
  );
}
