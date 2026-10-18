import { Trans } from "@/lib/i18n/LanguageProvider";
import brandVector from "../../../public/images/Vector.png";
import { pillars } from "./Data";
import PillarCard from "./Pillarcard";

export default function AdvisoryPillars() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A1521] px-4 py-20 sm:px-6 lg:px-8"
      style={{
        backgroundImage: [
          "radial-gradient(60% 55% at 58% 30%, #0078ff47 0%, rgba(0, 120, 255, 0) 70%)",
          "radial-gradient(40% 40% at 0% 0%, rgba(0, 91, 194, 0.22) 0%, rgba(0, 91, 194, 0) 70%)",
          "radial-gradient(40% 50% at 100% 100%, rgba(51, 147, 255, 0.12) 0%, rgba(51, 147, 255, 0) 70%)",
        ].join(", "),
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${brandVector.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px auto",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-precision">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-blue-precision font-body"
              /><Trans>
              Advisory Pillars
            </Trans></p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl font-heading"><Trans>
              Three Integrated
              </Trans><br /><Trans>
              Advisory Pillars
            </Trans></h2>
          </div>
          <p className="max-w-90 text-sm leading-relaxed font-medium font-body text-white lg:justify-self-end"><Trans>
            We combine strategy, decision intelligence, technology, and
            cross-border expertise to help organizations navigate complexity
            from diagnosis through execution.
          </Trans></p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
