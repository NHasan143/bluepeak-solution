/** Centered Blupeak watermark positioned behind each team member's head. */
export default function TeamBlob() {
  return (
    <img
      src="/images/blupeak-dark-logo.png"
      alt=""
      aria-hidden="true"
      width={1000}
      height={1000}
      className="absolute! top-[35%]! left-1/2! -translate-x-1/2! -translate-y-1/2! z-0! w-[140%]! max-w-none! h-auto! opacity-25! object-contain! pointer-events-none! select-none!"
    />
  );
}
