"use client";

import { useState } from "react";
import { Badge, Icon, cn } from "@/Components/ui";
import brandVector from "../../../public/images/Vector.png";

/* ---------- Icons ---------- */

// Not in the icon set yet (no "building"/"columns" icon), so it stays local.
const InstitutionIcon = () => (
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
    <path d="M3 10l9-6 9 6" />
    <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
    <path d="M3 21h18" />
  </svg>
);

/* ---------- Diagram pieces ---------- */

function Node({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md border border-ink-100 bg-white/80 px-3 py-2 text-center text-[10px] leading-tight text-slate-500",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** 1) Executive and governance leaders: decision structure */
function ExecutiveDiagram() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[10px] uppercase tracking-wider text-slate-500">Decision structure</p>
      <div className="mt-3 w-16">
        <Node>Board</Node>
      </div>
      <span aria-hidden="true" className="h-4 w-px bg-slate-300" />
      <div className="flex items-center gap-2 rounded-full border border-ink-100 bg-white px-5 py-2.5 text-xs font-semibold text-[#0F1B2D] shadow-[0px_6px_18px_-6px_#121A2326]">
        <span className="text-blue-pulse">
          <Icon name="users" strokeWidth={1.8} />
        </span>
        Executive leadership
      </div>
      <span aria-hidden="true" className="h-4 w-px bg-slate-300" />
      <div className="grid w-full max-w-sm grid-cols-3 gap-2">
        <Node>Strategy office</Node>
        <Node>Risk</Node>
        <Node>Transformation office</Node>
      </div>
    </div>
  );
}

/** 2) Public and institutional organizations: accountability checklist */
function PublicDiagram() {
  const items = [
    "Government entities",
    "Public institutions",
    "Development organizations",
    "Regulated enterprises",
  ];
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-ink-100 bg-white p-4 shadow-[0px_8px_20px_-10px_#121A2330]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-[#0F1B2D]">High-accountability environment</p>
        <Icon name="shield" solid className="text-blue-pulse" />
      </div>
      <ul className="mt-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 border-t border-ink-100 py-2 text-[11px] text-slate-600 first:border-t-0"
          >
            <Icon name="check-circle" size={14} className="shrink-0 text-blue-pulse" />
            {item}
          </li>
        ))}
      </ul>
      <Badge tone="brand" className="mt-2">
        Mandated reporting and oversight
      </Badge>
    </div>
  );
}

/** 3) Growth and innovation organizations: cross-border corridor */
function GrowthDiagram() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[10px] uppercase tracking-wider text-slate-500">Emerging corridors</p>
      <div className="mt-3 flex w-full max-w-sm items-center gap-3">
        <div className="flex-1 rounded-card bg-white p-5 text-center text-xs font-bold text-ink-900 shadow-[0px_6px_18px_-8px_#121A2326]">
          United States
        </div>
        {/* Swap arrow: no equivalent in the icon set, so it stays local */}
        <span aria-hidden="true" className="text-blue-pulse">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 8h12l-3-3M17 16H5l3 3" />
          </svg>
        </span>
        <div className="flex-1 rounded-card bg-white p-5 text-center text-xs font-bold text-ink-900 shadow-[0px_6px_18px_-8px_#121A2326]">
          GCC
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Badge tone="neutral">Family businesses</Badge>
        <Badge tone="neutral">Investment organizations</Badge>
        <Badge tone="neutral">Technology companies</Badge>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

interface Audience {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  Diagram: React.ComponentType;
}

const audiences: Audience[] = [
  {
    id: "executive",
    title: "Executive and Governance Leaders",
    description:
      "Boards, CEOs, executive leadership teams, strategy offices, risk leaders, and transformation offices.",
    icon: <Icon name="users" strokeWidth={1.8} />,
    Diagram: ExecutiveDiagram,
  },
  {
    id: "public",
    title: "Public and Institutional Organizations",
    description:
      "Government entities, regulators, public institutions, and mission-driven organizations delivering complex programs.",
    icon: <InstitutionIcon />,
    Diagram: PublicDiagram,
  },
  {
    id: "growth",
    title: "Growth and Innovation Organizations",
    description:
      "Scaling companies, investors, and innovation teams expanding into new markets or building new capabilities.",
    icon: <Icon name="trending-up" strokeWidth={1.8} />,
    Diagram: GrowthDiagram,
  },
];

const labelClass = "text-[9px] font-medium uppercase tracking-wider text-slate-400";

/* ---------- Section ---------- */

export default function WhoWeServe() {
  const [activeId, setActiveId] = useState<string>(audiences[0].id);
  const active = audiences.find((a) => a.id === activeId) ?? audiences[0];

  return (
    <section className="relative overflow-hidden bg-ink-50 px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      {/* Brand vector, tiled. Its own layer so opacity doesn't touch the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${brandVector.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px auto",
        }}
      />

      {/* Light fade so the pattern stays behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F3F7FC]/50 via-transparent to-[#F3F7FC]/50"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading + intro */}
        <div className="max-w-md">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-sovereign">
            <span aria-hidden="true" className="h-px w-8 bg-blue-pulse" />
            Who we serve
          </p>
          <h2 className="mt-4 text-3xl font-bold font-heading leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Leadership teams facing decisions that carry consequence
          </h2>
          <p className="mt-5 text-sm font-medium leading-relaxed text-ink-500">
            SAMATECHS works with leadership teams navigating complex strategic,
            operational, technological, risk, and cross-border challenges. Our
            senior-led advisory model is particularly suited to organizations
            that require rigorous analysis, executive alignment, and
            implementation-ready solutions.
          </p>
        </div>

        {/* Mobile: all three visuals stacked */}
        <div className="mt-10 space-y-8 rounded-card border border-[#00000000] bg-white p-5 backdrop-blur-[14px] lg:hidden">
          {audiences.map((a) => (
            <div key={a.id}>
              <p className={cn(labelClass, "mb-4")}>{a.title}</p>
              <a.Diagram />
            </div>
          ))}
        </div>

        {/* Desktop: list + single panel */}
        <div className="mt-24 hidden gap-14 lg:grid lg:grid-cols-2">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Who we serve"
            className="flex flex-col justify-center gap-3 self-center"
          >
            {audiences.map((a) => {
              const selected = a.id === activeId;
              return (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  id={`tab-${a.id}`}
                  aria-selected={selected}
                  aria-controls="audience-panel"
                  onClick={() => setActiveId(a.id)}
                  className={cn(
                    "rounded-2xl px-4 py-3.5 text-left transition-all",
                    selected
                      ? "border border-ink-100 bg-white shadow-[0px_6px_18px_-6px_#121A231F]"
                      : "border border-transparent bg-white/40 hover:bg-white/70",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={selected ? "text-blue-pulse" : "text-slate-500"}>{a.icon}</span>
                    <span
                      className={cn(
                        "text-sm font-semibold",
                        selected ? "text-[#0F1B2D]" : "text-slate-600",
                      )}
                    >
                      {a.title}
                    </span>
                  </span>
                  {selected && (
                    <span className="mt-2 block pl-6.5 text-xs leading-relaxed text-slate-500">
                      {a.description}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            id="audience-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="flex min-h-80 flex-col rounded-lg border border-[#3B9BFF] bg-white/60 p-6 backdrop-blur-[14px]"
          >
            <p className={labelClass}>{active.title}</p>
            <div className="flex flex-1 items-center justify-center pt-4">
              <div className="w-full">
                <active.Diagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
