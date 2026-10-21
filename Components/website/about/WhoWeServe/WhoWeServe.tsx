import { Trans } from "@/lib/i18n/LanguageProvider";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import StripedVisual from "./Stripedvisual";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-mist px-4 sm:px-6 lg:px-8">
      {/* Figma "Gradient": brand glow centred on the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,120,255,0.28)_0%,rgba(0,120,255,0)_70%)]"
      />
      <div className="relative mx-auto grid max-w-310 items-center gap-10 pb-16 pt-16 sm:px-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:min-h-[588px] lg:gap-16 lg:pb-20 lg:pt-22">
        <SectionHeader as="h1" eyebrow="About us" title="Who We Are" size="lg">
          <p className="mt-5.5 max-w-[673px] text-base font-medium leading-[1.55] text-ink-700 lg:text-lead">
            <Trans>
              SAMATECHS is a boutique strategic advisory and analytics firm that
              helps organizations clarify complex challenges, quantify root
              causes, and design execution-ready solutions.
            </Trans>
          </p>
          <p className="mt-5.5 max-w-[577px] text-body font-medium leading-[1.65] text-ink-500">
            <Trans>
              We operate as a senior-led advisory partner to executive teams and
              boards, specializing in enterprise strategy, performance
              optimization, risk governance, digital transformation, and
              cross-border market expansion between the U.S. and GCC.
            </Trans>
          </p>
        </SectionHeader>
        <StripedVisual />
      </div>
    </section>
  );
}
