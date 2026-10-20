"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState } from "react";
import Strategy from '@/public/images/StrategyIcon.png'
import Technology from '@/public/images/Technology.png'
import Intelligence from '@/public/images/Intelligence.png'
import Growth from '@/public/images/Growth.png'
import Image from "next/image";

/* ---------- Icons ---------- */



const StrategyIcon = () => (
  <Image
    src={Strategy}
    alt="Line chart"
    width={24}
    height={24}
  />
);
const IntelligenceIcon = () => (
  <Image
    src={Intelligence}
    alt="Line chart"
    width={24}
    height={24}
  />
);
const TechnologyIcon = () => (
  <Image
    src={Technology}
    alt="Line chart"
    width={24}
    height={24}
  />
);
const GrowthIcon = () => (
  <Image
    src={Growth}
    alt="Line chart"
    width={24}
    height={24}
  />
);
const SmallDot = () => <span className="h-1.5 w-1.5 rounded-full bg-current" />;

/* ---------- Visuals (one per capability) ---------- */

const tinyCaps = "text-[9px] font-medium uppercase tracking-wider text-slate-400";

/** 1) Strategy: strategy board */
function StrategyVisual() {
  const columns = [
    { heading: "Direction", primary: "Enterprise direction", secondary: "Portfolio choices" },
    { heading: "Performance", primary: "KPI architecture", secondary: "Accountability" },
    { heading: "Operating model", primary: "Structure", secondary: "Decision rights" },
  ];
  return (
    <div>
      <p className={tinyCaps}><Trans>Strategy board</Trans></p>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {columns.map((c) => (
          <div key={c.heading} className="flex flex-col gap-2">
            <p className={tinyCaps}><Trans>{c.heading}</Trans></p>
            <div className="rounded-lg border border-ink-100 bg-white px-2.5 py-2.5 text-[10px] font-medium text-[#0F1B2D] shadow-[0px_4px_12px_-6px_#121A2326]">
              <Trans>{c.primary}</Trans>
            </div>
            <div className="rounded-lg border border-[#E6ECF4] bg-white/50 px-2.5 py-2.5 text-[10px] text-slate-400">
              <Trans>{c.secondary}</Trans>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 2) Decision intelligence: executive dashboard */
function IntelligenceVisual() {
  const { t: translateText } = useLanguage();

  const bars = [
    { label: "Q1", height: 45 },
    { label: "Q2", height: 60 },
    { label: "Q3", height: 100, highlight: true },
    { label: "Q4", height: 70 },
  ];
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-[0px_8px_20px_-10px_#121A2330]">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[#0F1B2D]"><Trans>Executive dashboard</Trans></p>
        <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400"><Trans>Live</Trans></span>
      </div>
      <div className="mt-4 flex h-24 items-end gap-2.5" role="img" aria-label={translateText("Bar chart: Q3 is the highest quarter")}>
        {bars.map((b) => (
          <div key={b.label} className="flex h-full flex-1 flex-col justify-end">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${b.height}%`,
                background: b.highlight
                  ? "linear-gradient(180deg, #3393FF 0%, #0078FF 100%)"
                  : "#D7E4F7",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex gap-2.5">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[9px] text-slate-400">
            <Trans>{b.label}</Trans>
          </span>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 rounded-lg bg-[#EAF1FB] px-3 py-2 text-[10px] text-slate-600">
        <span aria-hidden="true" className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[4px] bg-blue-pulse text-white">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span><Trans>
        Executive decision support
      </Trans></p>
    </div>
  );
}

/** 3) Technology: focus stack */
function TechnologyVisual() {
  const items = [
    { label: "Digital strategy", inset: 28, fade: "opacity-40" },
    { label: "Automation", inset: 14, fade: "opacity-60" },
    { label: "AI-enabled capabilities", inset: 0, fade: "" },
    { label: "Product design", inset: 14, fade: "opacity-60" },
  ];
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => {
        const center = item.inset === 0;
        return (
          <li
            key={item.label}
            style={{ marginInline: item.inset }}
            className={`flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs ${item.fade} ${
              center
                ? "bg-white font-semibold text-[#0F1B2D] shadow-[0px_8px_20px_-8px_#121A2330]"
                : "bg-white/60 text-slate-500"
            }`}
          >
            <span className={center ? "text-blue-pulse" : "text-slate-400"}>
              {center ? <TechnologyIcon /> : <SmallDot />}
            </span>
            <Trans>{item.label}</Trans>
          </li>
        );
      })}
    </ul>
  );
}

/** 4) Growth: cross-border expansion */
function GrowthVisual() {
  const branches = ["Partnerships", "Localization", "Market entry"];
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 rounded-full border border-ink-100 bg-white px-5 py-2.5 text-xs font-semibold text-[#0F1B2D] shadow-[0px_6px_18px_-6px_#121A2326]">
        <span className="text-blue-pulse">
          <GrowthIcon />
        </span><Trans>
        Cross-border expansion
      </Trans></div>
      <span aria-hidden="true" className="h-3 w-px bg-slate-300" />
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-pulse" />
      <span aria-hidden="true" className="h-3 w-px bg-slate-300" />
      <div className="grid w-full grid-cols-3 gap-2">
        {branches.map((b) => (
          <div
            key={b}
            className="rounded-lg border border-ink-100 bg-white/80 px-2 py-2.5 text-center text-[10px] text-slate-500"
          >
            <Trans>{b}</Trans>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

interface Capability {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  Visual: React.ComponentType;
}

const capabilities: Capability[] = [
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Enterprise direction, performance, operating models, and transformation.",
    icon: <StrategyIcon />,
    Visual: StrategyVisual,
  },
  {
    id: "decision-intelligence",
    title: "Decision Intelligence",
    description:
      "Analytics and insight that turn fragmented data into timely executive decisions.",
    icon: <IntelligenceIcon />,
    Visual: IntelligenceVisual,
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Digital strategy, automation, and AI-enabled capabilities built around business outcomes.",
    icon: <TechnologyIcon />,
    Visual: TechnologyVisual,
  },
  {
    id: "growth",
    title: "Growth",
    description:
      "Cross-border expansion, partnerships, and market entry supported end to end.",
    icon: <GrowthIcon />,
    Visual: GrowthVisual,
  },
];

/* ---------- Section ---------- */

export default function ServicesCapabilities() {
  const { t: translateText } = useLanguage();

  const [activeId, setActiveId] = useState<string>(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#F4F8FD] to-[#E7EEF9] px-4 py-16 sm:px-6 lg:px-50 2xl:px-85 lg:py-20">
      {/* Soft blue glow at the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-65 h-130 w-240 max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,#BCD8FF_0%,rgba(188,216,255,0)_100%)]"
      />

      <div className="relative mx-auto pt-22 px-8 pb-18">
        {/* Header */}
        <p className="flex items-center gap-3 text-eyebrow font-bold uppercase tracking-wider text-blue-sovereign">
          <span aria-hidden="true" className="h-px w-8 bg-blue-sovereign" /><Trans>
          Services &amp; capabilities
        </Trans></p>
        <h2 className="mt-4 text-display-2 max-w-[733.32px] lg:pr-66.25 font-heading font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"><Trans>
          An Integrated
          </Trans><br /><Trans>
          Advisory Model
        </Trans></h2>
        <p className="mt-5 max-w-174.25 lg:pr-6 text-lead font-medium leading-relaxed text-ink-500"><Trans>
          Our three client-facing advisory pillars draw on four cross-cutting
          areas of expertise, depending on the client&apos;s needs.
        </Trans></p>

        {/* Mobile: all four visuals stacked in one card */}
        <div className="mt-10 space-y-10 rounded-3xl border border-white/70 bg-white/50 p-5 backdrop-blur-[14px] lg:hidden">
          {capabilities.map((c) => (
            <div key={c.id}>
              <p className={`${tinyCaps} mb-3`}><Trans>{c.title}</Trans></p>
              <c.Visual />
            </div>
          ))}
        </div>

        {/* Desktop: panel + list */}
        <div className="mt-20 hidden items-start gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div
            id="capability-panel"
            role="tabpanel"
            aria-labelledby={`cap-tab-${active.id}`}
            className="flex min-h-80 flex-col rounded-3xl border border-white/70 bg-white/50 p-6 backdrop-blur-[14px]"
          >
            <p className={tinyCaps}><Trans>{active.title}</Trans></p>
            <div className="flex flex-1 items-center pt-4">
              <div className="w-full">
                <active.Visual />
              </div>
            </div>
          </div>

          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={translateText("Cross-cutting areas of expertise")}
            className="flex flex-col self-center"
          >
            {capabilities.map((c) => {
              const selected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  id={`cap-tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls="capability-panel"
                  onClick={() => setActiveId(c.id)}
                  className={`px-4 text-start transition-colors ${
                    selected
                      ? "rounded-2xl bg-white py-4 shadow-[0px_6px_18px_-6px_#121A231F]"
                      : "border-b border-ink-100 py-3.5 hover:bg-white/50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={selected ? "text-blue-sovereign" : "text-slate-500"}><Trans>{c.icon}</Trans></span>
                    <span className={`text-sm font-semibold ${selected ? "text-ink-900" : "text-slate-600"}`}>
                      <Trans>{c.title}</Trans>
                    </span>
                  </span>
                  {selected && (
                    <span className="mt-2 block ps-7 text-xs leading-relaxed text-slate-500">
                      <Trans>{c.description}</Trans>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
