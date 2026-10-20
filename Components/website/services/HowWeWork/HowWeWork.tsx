"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState } from "react";
import Gauge from '@/public/images/Gauge.png'
import AnalyticBg from '@/public/images/AnalyticalRigorBackGround.png'
import Image from "next/image";

/* ---------- Icons ---------- */

const DiagnoseIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20.5 20.5L16 16" />
  </svg>
);
const ArchitectIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="9" width="6" height="6" rx="1.2" />
    <rect x="15" y="3" width="6" height="6" rx="1.2" />
    <rect x="15" y="15" width="6" height="6" rx="1.2" />
    <path d="M8 12h3.5" />
    <path d="M11.5 6v12" />
    <path d="M11.5 6H15" />
    <path d="M11.5 18H15" />
  </svg>
);
const DeliveryIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 18a9 9 0 1 1 18 0" />
    <path d="M12 18l4.5-5.5" />
    <path d="M4 18h2" />
    <path d="M18 18h2" />
    <path d="M12 7.5v1.5" />
  </svg>
);
const GaugeIcon = () => (
  <Image
    src={Gauge}
    alt="Line chart"
    width={24}
    height={24}
  />
);

/* ---------- Visuals ---------- */

const tinyCaps = "text-[9px] font-medium uppercase tracking-wider text-slate-400";
const raised = "shadow-[0px_8px_20px_-10px_#121A2330]";

/** 1) Diagnose: what happens to one problem */
function DiagnoseVisual() {
  const inputs = [
    "Structured assessment",
    "Stakeholder engagement",
    "Quantitative analysis",
    "Operational data",
  ];
  return (
    <div className="flex flex-col items-center">
      <p className={tinyCaps}><Trans>What happens to one problem</Trans></p>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        {inputs.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink-100 bg-white/70 px-3 py-1.5 text-center text-[10px] text-slate-500"
          >
            <Trans>{item}</Trans>
          </span>
        ))}
      </div>
      <span aria-hidden="true" className="mt-2 text-[10px] text-slate-400">↓</span>
      <div className={`mt-2 flex w-full items-center gap-3 rounded-2xl bg-white px-5 py-3.5 ${raised}`}>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E3ECF9] text-blue-pulse">
          <DiagnoseIcon />
        </span>
        <span className="text-xs font-semibold text-[#0F1B2D]"><Trans>Root cause defined</Trans></span>
      </div>
    </div>
  );
}

/** 2) Architect: designed for execution */
function ArchitectVisual() {
  const blocks = [
    { title: "Operating model", subtitle: "Structure and decision rights" },
    { title: "Governance", subtitle: "Oversight cadence" },
    { title: "Performance framework", subtitle: "KPIs and cadence" },
    { title: "Success metrics", subtitle: "Agreed with the executive team" },
  ];
  return (
    <div>
      <p className={tinyCaps}><Trans>Designed for execution</Trans></p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {blocks.map((b) => (
          <div key={b.title} className={`rounded-xl border border-ink-100 bg-white px-3 py-2.5 ${raised}`}>
            <p className="text-[10px] font-semibold text-[#0F1B2D]"><Trans>{b.title}</Trans></p>
            <p className="mt-0.5 text-[9px] leading-snug text-slate-400"><Trans>{b.subtitle}</Trans></p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3 py-2.5 text-[10px] text-slate-600">
        <span className="text-blue-pulse">
          <ArchitectIcon />
        </span><Trans>
        Clear accountability at every level
      </Trans></div>
    </div>
  );
}

/** 3) Advise through delivery: gate-based oversight */
function DeliveryVisual() {
  const gates = [
    { label: "Gate 1", done: true },
    { label: "Gate 2", done: true },
    { label: "Gate 3", done: false },
    { label: "Gate 4", done: false },
  ];
  return (
    <div>
      <p className={tinyCaps}><Trans>Oversight through delivery</Trans></p>

      <ol className="relative mt-5 flex">
        {/* track: grey base, blue for the completed segment (gate 1 → gate 2) */}
        <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-3 h-px bg-[#C9D8EE]" />
        <span aria-hidden="true" className="absolute left-[12.5%] top-3 h-px w-1/4 bg-blue-pulse" />
        {gates.map((g) => (
          <li key={g.label} className="relative flex flex-1 flex-col items-center gap-1.5">
            <span
              className={`z-10 flex h-6 w-6 items-center justify-center rounded-full ${
                g.done ? "bg-blue-pulse text-white" : "border border-[#C9D8EE] bg-white text-slate-300"
              }`}
            >
              {g.done ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              )}
            </span>
            <span className={`text-[9px] ${g.done ? "font-medium text-[#0F1B2D]" : "text-slate-400"}`}>
              <Trans>{g.label}</Trans>
            </span>
          </li>
        ))}
      </ol>

      <div className={`mt-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ${raised}`}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E3ECF9] text-blue-pulse">
          <DeliveryIcon />
        </span>
        <span>
          <span className="block text-xs font-semibold text-[#0F1B2D]"><Trans>Course correction at Gate 3</Trans></span>
          <span className="mt-0.5 block text-[10px] text-slate-400"><Trans>Clear owners for every action</Trans></span>
        </span>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  Visual: React.ComponentType;
}

const steps: Step[] = [
  {
    id: "diagnose",
    title: "Diagnose",
    description:
      "We begin by clarifying the real problem. Through structured assessment, stakeholder engagement, and quantitative analysis, we define root causes, surface strategic trade-offs, and align leadership around decisions that matter most.",
    icon: <DiagnoseIcon />,
    Visual: DiagnoseVisual,
  },
  {
    id: "architect",
    title: "Architect",
    description:
      "We design the operating model, governance, and performance framework that turn the chosen direction into something an organization can run.",
    icon: <ArchitectIcon />,
    Visual: ArchitectVisual,
  },
  {
    id: "advise",
    title: "Advise Through Delivery",
    description:
      "We stay involved through delivery with gate-based oversight, so course corrections happen early and ownership stays clear.",
    icon: <DeliveryIcon />,
    Visual: DeliveryVisual,
  },
];

/* ---------- Section ---------- */

export default function HowWeWork() {
  const { t: translateText } = useLanguage();

  const [activeId, setActiveId] = useState<string>(steps[0].id);
  const active = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-50 2xl:px-85 lg:pt-28 lg:pb-24">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-14">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-sovereign">
              <span aria-hidden="true" className="h-px w-8 bg-blue-sovereign" /><Trans>
              How we work
            </Trans></p>
            <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-tight text-[#0F1B2D] sm:text-4xl"><Trans>
              Diagnose, architect, advise through delivery
            </Trans></h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-slate-500"><Trans>
            Every engagement follows the same discipline, regardless of pillar.
            The sequence is what keeps recommendations executable.
          </Trans></p>
        </div>

        {/* Mobile: all three visuals stacked in one card */}
        <div className="mt-10 space-y-10 rounded-3xl bg-[#F1F5FB] pt-5 lg:hidden">
          {steps.map((s) => (
            <div key={s.id}>
              <p className={`${tinyCaps} mb-3`}><Trans>{s.title}</Trans></p>
              <s.Visual />
            </div>
          ))}
        </div>

        {/* Desktop: list + panel */}
        <div className="mt-14 hidden items-center gap-8 lg:pt-8 lg:grid lg:grid-cols-2">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={translateText("How we work")}
            className="flex flex-col"
          >
            {steps.map((s) => {
              const selected = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`how-tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls="how-panel"
                  onClick={() => setActiveId(s.id)}
                  className={`px-4 text-start transition-colors ${
                    selected
                      ? "rounded-2xl bg-[#E3ECF9] py-4"
                      : "border-b border-ink-100 py-3.5 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={selected ? "text-blue-pulse" : "text-slate-500"}><Trans>{s.icon}</Trans></span>
                    <span className={`text-sm font-semibold ${selected ? "text-[#0F1B2D]" : "text-slate-600"}`}>
                      <Trans>{s.title}</Trans>
                    </span>
                  </span>
                  {selected && (
                    <span className="mt-2 block ps-7 text-xs leading-relaxed text-slate-500">
                      <Trans>{s.description}</Trans>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            id="how-panel"
            role="tabpanel"
            aria-labelledby={`how-tab-${active.id}`}
            className="flex min-h-75 flex-col rounded-3xl bg-[#F1F5FB] p-6"
          >
            <p className={tinyCaps}><Trans>{active.title}</Trans></p>
            <div className="flex flex-1 items-center pt-4">
              <div className="w-full">
                <active.Visual />
              </div>
            </div>
          </div>
        </div>

        {/* Analytical Rigor band */}
<div
  className="relative mt-14 overflow-hidden rounded-2xl p-7 text-white sm:p-9 lg:mt-16"
  style={{
    background: "linear-gradient(90deg, #0A1628 0%, #0B2A5B 45%, #081426 100%)",
  }}
>
  {/* Background image (من فيجما: 1176×1350، top -217.54px، opacity 1) */}
  <Image
    src={AnalyticBg}
    alt=""
    aria-hidden="true"
    fill
    sizes="100vw"
    className="pointer-events-none select-none object-cover object-center"
  />

  {/* المحتوى لازم يبقى فوق الصورة */}
  <div className="relative z-10 grid gap-6 md:grid-cols-[0.8fr_2fr] md:items-center md:gap-10">
    <div>
      <span className="text-[#66ADFF]">
        <GaugeIcon />
      </span>
      <h3 className="mt-3 text-lg font-semibold"><Trans>Analytical Rigor</Trans></h3>
    </div>
    <p className="text-xs max-w-130 leading-relaxed text-slate-300 sm:text-caption"><Trans>
      Our advisory work is grounded in quantitative discipline and
      evidence-based decision frameworks. Depending on engagement scope,
      we incorporate predictive analytics, machine learning-informed
      insights, Monte Carlo simulation, risk quantification, Lean Six
      Sigma diagnostics, and executive dashboard architecture to
      strengthen decision quality in complex, high-accountability
      environments.
    </Trans></p>
  </div>
</div>
      </div>
    </section>
  );
}
