"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import Link from "next/link";
import badgeIcon from '@/public/images/Container.png'
// import overlay from '../../public/images/Overlay+Shadow.png'
import Image from "next/image";
import Button from "../../ui/Button";

const focusAreas: string[] = [
  "Strategy",
  "Decision Intelligence",
  "Cross-Border Growth",
];

export default function Hero() {
  const { t: translateText } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-mist px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,120,255,0.28)_0%,rgba(0,120,255,0)_70%)]" />
      {/* Soft blue glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-60 h-135 w-240 max-w-225 -translate-x-1/2 bg-[radial-gradient(closest-side,#BCD8FF_0%,rgba(188,216,255,0)_100%)]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-haze bg-blue-mist px-3 py-1 text-[11px] font-medium text-blue-sovereign backdrop-blur-[14px]">
          <Image src={badgeIcon} alt={translateText("Logo")} width={12} height={12} loading="eager" /><Trans>
          Senior-led strategic advisory &amp; analytics
        </Trans></span>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-bold font-heading leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"><Trans>
          Strategic Clarity.
          </Trans><span className="block text-blue-sovereign"><Trans>Measurable Impact.</Trans></span>
        </h1>

        {/* Description */}
        <p className="pt-6.5 w-full max-w-150 text-xl font-medium leading-relaxed text-ink-500 sm:text-base"><Trans>
          SAMATECHS advises leadership teams on complex strategic, operational,
          risk, technology, and cross-border challenges, designing
          implementation-ready solutions that strengthen decision-making and
          deliver measurable results.
        </Trans></p>

        {/* CTAs */}
        <div className="pt-9 flex flex-col items-center font-body gap-3 sm:flex-row">
          <Link href="/contact">
            <Button size="lg"><Trans>Schedule a Consultation </Trans><span aria-hidden="true">→</span></Button>
          </Link>
          <Link
            href="/services"
          >
            <Button variant="outline" size="lg"><Trans>
              Explore Our Capabilities
            </Trans></Button>
          </Link>
        </div>

        {/* Focus areas */}
        <ul className="pt-11 flex flex-wrap justify-center font-body gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-ink-500">
          {focusAreas.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-blue-pulse" />
              <Trans>{item}</Trans>
            </li>
          ))}
        </ul>

        {/* Visual card */}
        <figure className="relative mt-12 aspect-[2.4/1] min-h-55 w-full overflow-hidden rounded-3xl shadow-lg sm:mt-14">
          {/* Base: left-to-right fade from muted mauve to near-black, with wide vertical bands */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: [
                "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(0,0,0,0.22) 100%)",
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0 26px, rgba(0,0,0,0.10) 26px 52px)",
                "linear-gradient(90deg, #8E8799 0%, #6F677A 38%, #3B3748 68%, #0C0B14 100%)",
              ].join(", "),
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-3/5"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0 9px, rgba(0,0,0,0.38) 9px 13px)",
              maskImage: "linear-gradient(90deg, transparent 0%, #000 70%)",
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 70%)",
            }}
          />

          <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-6">
            <span className="max-w-48 text-start text-lg font-semibold leading-tight text-white sm:text-xl"><Trans>
              From ambiguity to disciplined action.
            </Trans></span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80"><Trans>
              Riyadh · KSA
            </Trans></span>
          </figcaption>


        </figure>
      </div>
    </section>
  );
}
