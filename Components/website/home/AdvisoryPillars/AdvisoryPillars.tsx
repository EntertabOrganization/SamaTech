import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import PillarBackGround from "@/public/images/AdvisoryPillarBackGround.png";
import Pattern from "@/public/figma/pillars-pattern.svg";
import SectionHeader from "../shared/SectionHeader";
import { pillars } from "./Data";
import PillarCard from "./Pillarcard";

const OVERLAY =
  "linear-gradient(153.15deg, rgba(18, 26, 35, 0.9) 0%, rgba(18, 26, 35, 0.78) 46%, rgba(18, 26, 35, 0.95) 100%)";

export default function AdvisoryPillars() {
  return (
    <section className="relative overflow-hidden bg-ink-900 px-4 py-20 sm:px-6 lg:px-8 lg:py-40">
      {/* Background group from the design: the photo, then the dark gradient on top of it */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 -inset-x-[75.56px] overflow-hidden">
        <div className="absolute inset-x-0 top-[-41.44%] h-[182.88%]">
          <Image src={PillarBackGround} alt="" fill sizes="100vw" />
        </div>
        <div className="absolute inset-0" style={{ background: OVERLAY }} />
      </div>

      <Image
        src={Pattern}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[calc(50%+27.83px)] h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto flex max-w-310 flex-col gap-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-16">
          <SectionHeader
            tone="dark"
            eyebrow="Advisory Pillars"
            title={<><Trans>Three Integrated</Trans><br /><Trans>Advisory Pillars</Trans></>}
            className="flex-1"
          />
          <p className="flex-1 text-base font-medium leading-[1.55] text-white lg:text-lead">
            <Trans>
              We combine strategy, decision intelligence, technology, and
              cross-border expertise to help organizations navigate complexity
              from diagnosis through execution.
            </Trans>
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
