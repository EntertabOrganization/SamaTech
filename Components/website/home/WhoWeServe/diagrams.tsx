import type { ReactNode } from "react";
import { Badge, Icon, cn } from "@/Components/website/ui";
import ChecklistCard from "../shared/ChecklistCard";


function Node({ children, className }: { children: ReactNode; className?: string }) {
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
export function ExecutiveDiagram() {
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
export function PublicDiagram() {
  return (
    <ChecklistCard
      className="mx-auto max-w-sm"
      title="High-accountability environment"
      icon={<Icon name="shield" solid />}
      items={[
        "Government entities",
        "Public institutions",
        "Development organizations",
        "Regulated enterprises",
      ]}
      footer={<Badge tone="brand">Mandated reporting and oversight</Badge>}
    />
  );
}

/** 3) Growth and innovation organizations: cross-border corridor */
export function GrowthDiagram() {
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
