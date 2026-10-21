import Image from "next/image";
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import BadgeIcon from "@/public/figma/hero-badge-icon.svg";
import ArrowIcon from "@/public/figma/hero-arrow.svg";

const focusAreas: string[] = [
  "Strategy",
  "Decision Intelligence",
  "Cross-Border Growth",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-mist px-4 sm:px-6 lg:px-8">
      {/* Figma "Gradient": brand glow centred on the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,120,255,0.28)_0%,rgba(0,120,255,0)_70%)]"
      />

      <div className="relative mx-auto flex max-w-310 flex-col items-center gap-18 pb-16 pt-16 text-center sm:px-8 lg:pb-21 lg:pt-26">
        <div className="flex w-full max-w-225 flex-col items-center">
          {/* Badge */}
          <span className="inline-flex h-6.5 items-center gap-2 rounded-full border border-blue-haze bg-blue-mist px-3 text-[13px] font-bold leading-[21.45px] tracking-[0.13px] text-blue-sovereign">
            <Image src={BadgeIcon} alt="" width={13} height={13} className="-scale-y-100" />
            Senior-led strategic advisory &amp; analytics
          </span>

          {/* Headline */}
          <h1 className="mt-7 text-[40px] font-bold leading-[1.06] tracking-[-0.02em] text-ink-900 sm:text-6xl lg:text-display-1 lg:leading-[85.09px]">
            Strategic Clarity.
            <span className="block text-blue-sovereign">Measurable Impact.</span>
          </h1>

          {/* Description */}
          <p className="mt-6.5 max-w-[745.24px] text-base font-medium leading-[1.55] text-ink-500 sm:text-lead sm:leading-[31px]">
            SAMATECHS advises leadership teams on complex strategic, operational,
            risk, technology, and cross-border challenges—designing
            implementation-ready solutions that strengthen decision-making and
            deliver measurable results.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-blue-pulse px-8 text-base font-bold tracking-[0.16px] text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)] transition-colors hover:bg-blue-sovereign"
            >
              Schedule a Consultation
              <Image src={ArrowIcon} alt="" width={19} height={19} className="directional-arrow" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 items-center rounded-full border border-ink-200 px-8 text-base font-bold tracking-[0.16px] text-ink-900 transition-colors hover:bg-white"
            >
              Explore Our Capabilities
            </Link>
          </div>

          {/* Focus areas */}
          <ul className="mt-11 flex flex-wrap justify-center gap-x-7.5 gap-y-2 text-[13px] font-bold uppercase leading-[21.45px] tracking-[0.14em] text-ink-500">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.25 rounded-full bg-blue-pulse" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
