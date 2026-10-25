import Image from "next/image";
import StatementCard from "./Statementcard";
import { statements } from "./Statements";
import { differentiators } from "./Differentiators";
import Showcase from "@/Components/website/home/shared/Showcase";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import Pattern from "@/public/figma/mission-pattern.svg";

export default function MissionVisionWhy() {
  return (
    <>
      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <Image
          src={Pattern}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[calc(50%+388.13px)] h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative mx-auto grid max-w-310 gap-6 sm:px-8 md:grid-cols-2">
          {statements.map((s) => (
            <StatementCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Why SAMATECHS */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <Image
          src={Pattern}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-30 h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
        />
        <div className="mx-auto flex max-w-310 flex-col gap-6 sm:px-8">
          <SectionHeader eyebrow="Differentiators" title="Why SAMATECHS" />
          <div className="lg:pt-8">
            <Showcase items={differentiators} label="Why SAMATECHS" variant="plain" />
          </div>
        </div>
      </section>
    </>
  );
}
