import StatementCard from "./Statementcard";
import { statements } from "./Statements";
import { differentiators } from "./Differentiators";
import PatternBackground from "@/Components/home/shared/PatternBackground";
import Showcase from "@/Components/home/shared/Showcase";
import SectionHeader from "@/Components/home/shared/SectionHeader";

export default function MissionVisionWhy() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FD] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <PatternBackground src="/pattern.svg" size="auto" opacityClassName="opacity-100" />
      <div className="relative mx-auto max-w-5xl">
        {/* Mission & Vision */}
        <div className="grid gap-4 md:grid-cols-2">
          {statements.map((s) => (
            <StatementCard key={s.title} {...s} />
          ))}
        </div>

        {/* Why SAMATECHS */}
        <div className="mt-20 lg:mt-28">
          <SectionHeader eyebrow="Differentiators" title="Why SAMATECHS" />
          <Showcase
            items={differentiators}
            label="Why SAMATECHS"
            variant="plain"
            tabsClassName="mt-12"
          />
        </div>
      </div>
    </section>
  );
}
