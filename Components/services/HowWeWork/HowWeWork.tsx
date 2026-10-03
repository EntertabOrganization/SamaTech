"use client";

import { useState } from "react";

/* ---------- Icons ---------- */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const DiagnoseIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-4.2-4.2" />
  </svg>
);
const ArchitectIcon = () => (
  <svg {...iconProps}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M8 11l8-4M8 13l8 4" />
  </svg>
);
const DeliveryIcon = () => (
  <svg {...iconProps}>
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 8.5 4.8 4.8 0 0 0 7 18z" />
  </svg>
);
const GaugeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 17a8 8 0 1 1 16 0" />
    <path d="M12 17l4-5" />
    <path d="M3 17h2M19 17h2" />
  </svg>
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
      <p className={tinyCaps}>What happens to one problem</p>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        {inputs.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink-100 bg-white/70 px-3 py-1.5 text-center text-[10px] text-slate-500"
          >
            {item}
          </span>
        ))}
      </div>
      <span aria-hidden="true" className="mt-2 text-[10px] text-slate-400">↓</span>
      <div className={`mt-2 flex w-full items-center gap-3 rounded-2xl bg-white px-5 py-3.5 ${raised}`}>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E3ECF9] text-blue-pulse">
          <DiagnoseIcon />
        </span>
        <span className="text-xs font-semibold text-[#0F1B2D]">Root cause defined</span>
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
      <p className={tinyCaps}>Designed for execution</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {blocks.map((b) => (
          <div key={b.title} className={`rounded-xl border border-ink-100 bg-white px-3 py-2.5 ${raised}`}>
            <p className="text-[10px] font-semibold text-[#0F1B2D]">{b.title}</p>
            <p className="mt-0.5 text-[9px] leading-snug text-slate-400">{b.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3 py-2.5 text-[10px] text-slate-600">
        <span className="text-blue-pulse">
          <ArchitectIcon />
        </span>
        Clear accountability at every level
      </div>
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
      <p className={tinyCaps}>Oversight through delivery</p>

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
              {g.label}
            </span>
          </li>
        ))}
      </ol>

      <div className={`mt-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ${raised}`}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E3ECF9] text-blue-pulse">
          <DeliveryIcon />
        </span>
        <span>
          <span className="block text-xs font-semibold text-[#0F1B2D]">Course correction at Gate 3</span>
          <span className="mt-0.5 block text-[10px] text-slate-400">Clear owners for every action</span>
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
  const [activeId, setActiveId] = useState<string>(steps[0].id);
  const active = steps.find((s) => s.id === activeId) ?? steps[0];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-14">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-sovereign">
              <span aria-hidden="true" className="h-px w-8 bg-blue-sovereign" />
              How we work
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#0F1B2D] sm:text-4xl">
              Diagnose, architect, advise through delivery
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500">
            Every engagement follows the same discipline, regardless of pillar.
            The sequence is what keeps recommendations executable.
          </p>
        </div>

        {/* Mobile: all three visuals stacked in one card */}
        <div className="mt-10 space-y-10 rounded-3xl bg-[#F1F5FB] p-5 lg:hidden">
          {steps.map((s) => (
            <div key={s.id}>
              <p className={`${tinyCaps} mb-3`}>{s.title}</p>
              <s.Visual />
            </div>
          ))}
        </div>

        {/* Desktop: list + panel */}
        <div className="mt-14 hidden items-center gap-8 lg:grid lg:grid-cols-2">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="How we work"
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
                  className={`px-4 text-left transition-colors ${
                    selected
                      ? "rounded-2xl bg-[#E3ECF9] py-4"
                      : "border-b border-ink-100 py-3.5 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={selected ? "text-blue-pulse" : "text-slate-500"}>{s.icon}</span>
                    <span className={`text-sm font-semibold ${selected ? "text-[#0F1B2D]" : "text-slate-600"}`}>
                      {s.title}
                    </span>
                  </span>
                  {selected && (
                    <span className="mt-2 block pl-7 text-xs leading-relaxed text-slate-500">
                      {s.description}
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
            <p className={tinyCaps}>{active.title}</p>
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
            background: [
              "repeating-linear-gradient(90deg, rgba(0, 120, 255, 0) 0 12px, rgba(0, 120, 255, 0.22) 12px 16px)",
              "linear-gradient(90deg, #0A1628 0%, #0B2A5B 45%, #081426 100%)",
            ].join(", "),
          }}
        >
          <div className="grid gap-6 md:grid-cols-[0.8fr_2fr] md:items-center md:gap-10">
            <div>
              <span className="text-[#66ADFF]">
                <GaugeIcon />
              </span>
              <h3 className="mt-3 text-lg font-semibold">Analytical Rigor</h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-caption">
              Our advisory work is grounded in quantitative discipline and
              evidence-based decision frameworks. Depending on engagement scope,
              we incorporate predictive analytics, machine learning-informed
              insights, Monte Carlo simulation, risk quantification, Lean Six
              Sigma diagnostics, and executive dashboard architecture to
              strengthen decision quality in complex, high-accountability
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
