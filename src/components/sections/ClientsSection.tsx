import type { ReactNode } from "react";

/** The existing trust band, shared by Home and About. */
export default function ClientsSection({ heading = true, showObject = true, children }: { heading?: boolean; showObject?: boolean; children?: ReactNode }) {
  return (
    <section className="relative! z-[9]!">
      <div className="absolute! top-[-30%]! left-[-8%]! -z-[1]!"><img src="/images/icons/client1-1ellipse.png" alt="" /></div>
      <div className="absolute! bottom-[-30%]! right-0! -z-[1]!"><img src="/images/icons/client1-2ellipse.png" alt="" /></div>
      {showObject && <div className="tm-gsap-animate-circle absolute! bottom-[-130px]! left-0! hidden! min-[1400px]:block!"><img src="/images/icons/object-vec.png" alt="" /></div>}
      <div className="relative! z-[99]! overflow-hidden! rounded-[30px]! bg-[var(--theme-color3)]! mx-5! px-[15px]! py-20! min-[992px]:py-[100px]! min-[1200px]:py-[130px]! min-[1200px]:mx-10! min-[1200px]:px-0! min-[1400px]:mx-[50px]! min-[1700px]:mx-[100px]!">
        <div className="absolute! top-0! left-0! -z-[1]!"><img src="/images/icons/client1-shape-1.png" alt="" /></div>
        <div className="absolute! right-0! bottom-0! top-0! -z-[1]! [&>img]:h-full!"><img src="/images/icons/client1-line-1.png" alt="" /></div>
        <div className="mx-auto! w-full! px-3! min-[576px]:max-w-[540px]! min-[768px]:max-w-[720px]! min-[992px]:max-w-[960px]! min-[1200px]:max-w-[1140px]! min-[1400px]:max-w-[1320px]!">
          {children ?? (heading && <div className="relative! mb-0! text-center!">
            <h2 className="text-anim text-white! text-[35px]! leading-[40px]! tracking-[-1.5px]! min-[470px]:text-[40px]! min-[470px]:leading-[50px]! min-[768px]:text-[60px]! min-[768px]:leading-[1.1]!">
              Powering Growth for <span className="text-[var(--theme-color1)]! font-normal! italic! font-[family-name:var(--style-font)]!">Businesses Across Industries</span>
            </h2>
          </div>)}
        </div>
      </div>
    </section>
  );
}
