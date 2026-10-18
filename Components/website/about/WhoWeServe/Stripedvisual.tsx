/** Deep blue vertical streaks, CSS only. Swap for <Image fill /> when the real photo is ready. */
export default function StripedVisual() {
  return (
    <div
      role="img"
      aria-label="Abstract blue visual"
      className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-[0px_24px_50px_-24px_#0B3C8A99] md:justify-self-end lg:aspect-[1.05/1]"
    >
      {/* Base: color ramp with a bright blue core */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(55% 45% at 30% 28%, rgba(51, 147, 255, 0.85) 0%, rgba(51, 147, 255, 0) 70%)",
            "linear-gradient(90deg, #02060F 0%, #05183A 18%, #0A4FB0 42%, #0B7BFF 52%, #0A3F8E 72%, #03102B 100%)",
          ].join(", "),
        }}
      />
      {/* Dark vertical streaks */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(2, 6, 15, 0.5) 0 5px, transparent 5px 13px)",
        }}
      />
      {/* Fine light streaks on the right half */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-3/5 opacity-60 mix-blend-screen"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0 7px, rgba(51, 147, 255, 0.45) 7px 9px)",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 60%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 60%)",
        }}
      />
      {/* Bottom darkening */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#02060F]/80"
      />
    </div>
  );
}
