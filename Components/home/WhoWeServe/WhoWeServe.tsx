import { Trans } from "@/lib/i18n/LanguageProvider";
// import { PatternBackground, SectionHeader, Showcase } from "@/Components/home/shared";
import PatternBackground from "../shared/PatternBackground";
import SectionHeader from "../shared/SectionHeader";
import Showcase from "../shared/Showcase";
import { audiences } from "./audiences";

export default function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-ink-50 px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      <PatternBackground />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Who we serve"
          title="Leadership teams facing decisions that carry consequence"
          className="w-87.5"
        />
        <p className="mt-5 text-sm font-medium leading-relaxed max-w-122.5"><Trans>SAMATECHS works with leadership teams navigating complex strategic, operational, technological, risk, and cross-border challenges. Our senior-led advisory model is particularly suited to organizations that require rigorous analysis, executive alignment, and implementation-ready solutions.</Trans></p>

        <Showcase
          items={audiences}
          label="Who we serve"
          variant="cards"
          tabsClassName="mt-24"
        />
      </div>
    </section>
  );
}
