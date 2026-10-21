import Image from "next/image";
import AnalyticBg from "@/public/images/AnalyticalRigorBackGround.png";

/** Abstract striped photo beside "Who We Are". Design size: 471 x 420, radius 28px. */
export default function StripedVisual() {
  return (
    <div className="relative h-105 w-full overflow-hidden rounded-card shadow-lg">
      <div aria-hidden="true" className="absolute inset-x-0 top-[-54.25%] h-[208.5%]">
        <Image
          src={AnalyticBg}
          alt=""
          fill
          sizes="(min-width: 1024px) 472px, 100vw"
          className="pointer-events-none select-none"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 26, 35, 0) 50%, rgba(18, 26, 35, 0.4) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-card shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.1)]"
      />
    </div>
  );
}
