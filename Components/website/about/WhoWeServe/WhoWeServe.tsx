import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import TopGlow from "../ShareComponents/Topglow";
import StripedVisual from "./Stripedvisual";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#F4F8FD] to-[#EAF1FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <TopGlow/>
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <SectionHeader eyebrow="About us" title="Who We Are" size="lg">
          <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-[#0F1B2D] sm:text-[15px]">
            SAMATECHS is a boutique strategic advisory and analytics firm that
            helps organizations clarify complex challenges, quantify root
            causes, and design execution-ready solutions.
          </p>
          <p className="mt-4 max-w-117.5 text-xs leading-relaxed text-slate-500 sm:text-caption">
            We operate as a senior-led advisory partner to executive teams and
            boards, specializing in enterprise strategy, performance
            optimization, risk governance, digital transformation, and
            cross-border market expansion between the U.S. and GCC.
          </p>
        </SectionHeader>
        <StripedVisual />
      </div>
    </section>
  );
}
