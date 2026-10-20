import Image from "next/image";
import AnalyticBg from "@/public/images/AnalyticalRigorBackGround.png";

export default function StripedVisual() {
  return (
    <div className="relative h-105 w-full max-w-125 overflow-hidden rounded-2xl md:ms-auto">
      <Image
        src={AnalyticBg}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1024px) 500px, 100vw"
        className="pointer-events-none select-none object-cover object-center"
      />

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
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "#FFFFFF01",
          boxShadow: "0px 0px 0px 1px #FFFFFF1A inset",
        }}
      />
    </div>
  );
}