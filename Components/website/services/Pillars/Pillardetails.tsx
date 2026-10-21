"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { cn } from "@/Components/website/ui";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import DetailPattern from "@/public/figma/pillar-detail-pattern.svg";
import CtaPattern from "@/public/figma/pillar-cta-pattern.svg";
import OutcomeArrow from "@/public/figma/arrow-blue-light-14.svg";
import ButtonArrow from "@/public/figma/arrow-dark-15.svg";
import CtaBanner from "@/Components/website/about/ShareComponents/Ctabanner";
import { pillars } from "./Pillars";

interface PillarDetailProps {
  /** Pillar shown first; the tab bar switches between all of them. */
  slug: string;
}

const sectionLabel =
  "font-body text-[13px] font-bold uppercase leading-[21.45px] tracking-[0.14em] text-ink-300";

export default function PillarDetail({ slug }: PillarDetailProps) {
  const { t: translateText } = useLanguage();

  const [activeSlug, setActiveSlug] = useState(slug);
  const pillar = pillars.find((p) => p.slug === activeSlug);
  if (!pillar) notFound();

  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src={DetailPattern}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[calc(50%+31.68px)] h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
        />

        {/* Pillar tabs */}
        <nav
          aria-label={translateText("Advisory pillars")}
          className="relative border-y border-ink-100 px-4 py-4 backdrop-blur-[7px] sm:px-6 lg:px-8"
        >
          <div role="tablist" className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-ink-100 bg-ink-50 p-1">
            {pillars.map((p) => {
              const active = p.slug === pillar.slug;
              return (
                <button
                  key={p.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveSlug(p.slug)}
                  className={cn(
                    "flex h-9.5 shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full px-5 text-body-small font-bold transition-colors",
                    active
                      ? "bg-blue-pulse text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)]"
                      : "text-ink-500 hover:text-ink-900",
                  )}
                >
                  <Trans>{p.tabLabel}</Trans>
                </button>
              );
            })}
          </div>
        </nav>

        <section className="relative px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-22">
          <div className="mx-auto flex max-w-310 flex-col gap-12 sm:px-8">
            {/* Title */}
            <SectionHeader
              eyebrow={`${translateText("Pillar")} ${pillar.number}`}
              title={pillar.title.replace(" & ", "\n& ")}
              className="max-w-[711.58px] [&>h2]:mt-[18.76px]"
            />

            {/* Challenge / How we help */}
            <div className="grid gap-8 border-t border-ink-100 pt-10.75 md:grid-cols-2 md:gap-14">
              <div className="flex flex-col gap-3.5">
                <h3 className={sectionLabel}><Trans>The challenge</Trans></h3>
                <p className="text-body font-medium leading-[1.65] text-ink-700">
                  <Trans>{pillar.challenge}</Trans>
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                <h3 className={sectionLabel}><Trans>How we help</Trans></h3>
                <p className="text-body font-medium leading-[1.65] text-ink-700">
                  <Trans>{pillar.help}</Trans>
                </p>
              </div>
            </div>

            {/* Capabilities + outcomes */}
            <div className="grid items-start gap-12 pt-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
              <div>
                <h3 className={cn(sectionLabel, "pb-5.5")}><Trans>Selected capabilities</Trans></h3>
                <ul className="grid border-t border-ink-100 sm:grid-cols-2 sm:gap-x-12">
                  {pillar.capabilities.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-14 items-start gap-3.5 border-b border-ink-100 py-4 ps-1 text-body-small font-medium leading-[1.65] text-ink-700"
                    >
                      <span aria-hidden="true" className="mt-2.5 size-1.25 shrink-0 rounded-full bg-blue-pulse" />
                      <Trans>{item}</Trans>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="flex flex-col gap-6 rounded-card bg-gradient-navy p-9.5 drop-shadow-[0px_8px_12px_rgba(18,26,35,0.08)]">
                <h3 className="font-body text-body font-bold uppercase leading-[1.65] tracking-[0.14em] text-blue-precision">
                  <Trans>Typical outcomes</Trans>
                </h3>
                <ul className="border-t border-white/14">
                  {pillar.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 border-b border-white/14 py-3.75 text-body-small font-bold uppercase leading-[1.6] tracking-[0.16em] text-white"
                    >
                      <Image src={OutcomeArrow} alt="" width={14} height={14} className="directional-arrow mt-0.75 size-3.5 shrink-0 -scale-y-100" />
                      <Trans>{item}</Trans>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="flex h-9 items-center justify-center gap-2 rounded-full bg-white px-4 text-body-small font-bold tracking-[0.14px] text-ink-900 transition-colors hover:bg-ink-50"
                >
                  <Trans>Discuss this pillar</Trans>
                  <Image src={ButtonArrow} alt="" width={15} height={15} className="directional-arrow" />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </div>

      <CtaBanner
        title={"Tell us the decision\nyou are trying to make."}
        label="Schedule a Consultation"
        href="/contact"
        pattern={{ src: CtaPattern, top: "calc(50% + 494.25px)" }}
      />
    </>
  );
}
