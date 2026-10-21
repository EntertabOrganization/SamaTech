import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { cn } from "@/Components/website/ui";
import ChecklistCard from "../shared/ChecklistCard";
import { FigmaIcon } from "../shared/primitives";
import UsersIcon from "@/public/figma/serve-users.svg";
import ShieldIcon from "@/public/figma/serve-shield.svg";
import UsIcon from "@/public/figma/serve-us.svg";
import GccIcon from "@/public/figma/serve-gcc.svg";
import SwapIcon from "@/public/figma/serve-swap.svg";

const caption = "text-eyebrow font-bold uppercase leading-[19.8px] tracking-eyebrow text-ink-300";

function Node({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-input bg-white/62 px-4.5 pb-3 pt-2.75 text-center text-[13.5px] font-semibold leading-[22.28px] text-ink-300",
        className,
      )}
    >
      <Trans>{children}</Trans>
    </div>
  );
}

function Connector() {
  return <span aria-hidden="true" className="h-5 w-0.5 bg-ink-200" />;
}

/** 1) Executive and governance leaders: decision structure */
export function ExecutiveDiagram() {
  return (
    <div className="flex flex-col items-center">
      <p className={cn(caption, "pb-3.5")}><Trans>Decision structure</Trans></p>
      <Node><Trans>Board</Trans></Node>
      <Connector />
      <div className="flex items-center gap-3.5 rounded-card bg-white px-6 py-4.5 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
        <span className="flex size-9 items-center justify-center rounded-input bg-blue-mist text-blue-sovereign">
          <FigmaIcon src={UsersIcon} size={19} />
        </span>
        <span className="font-heading text-body font-bold leading-[26.4px] text-ink-900">
          <Trans>Executive leadership</Trans>
        </span>
      </div>
      <Connector />
      <div className="grid w-full grid-cols-3 gap-2.5">
        <Node><Trans>Strategy office</Trans></Node>
        <Node><Trans>Risk</Trans></Node>
        <Node><Trans>Transformation office</Trans></Node>
      </div>
    </div>
  );
}

/** 2) Public and institutional organizations: accountability checklist */
export function PublicDiagram() {
  return (
    <ChecklistCard
      title="High-accountability environment"
      icon={<FigmaIcon src={ShieldIcon} size={20} />}
      items={[
        "Government entities",
        "Public institutions",
        "Development organizations",
        "Regulated enterprises",
      ]}
      footer={
        <span className="inline-flex rounded-full bg-blue-mist px-3.5 py-2 text-[12.5px] font-bold leading-[20.63px] text-blue-sovereign">
          <Trans>Mandated reporting and oversight</Trans>
        </span>
      }
    />
  );
}

function Region({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.25 rounded-card bg-white p-5 text-blue-sovereign drop-shadow-[0px_8px_12px_rgba(18,26,35,0.08)]">
      {icon}
      <span className="font-heading text-body-small font-bold leading-[1.65] text-ink-900">
        <Trans>{children}</Trans>
      </span>
    </div>
  );
}

/** 3) Growth and innovation organizations: cross-border corridor */
export function GrowthDiagram() {
  return (
    <div className="flex flex-col gap-5">
      <p className={caption}><Trans>Expansion corridor</Trans></p>
      <div className="flex w-full items-center gap-3">
        <Region icon={<FigmaIcon src={UsIcon} size={22} />}>United States</Region>
        <div className="flex flex-col items-center gap-1.5 text-blue-pulse">
          <FigmaIcon src={SwapIcon} size={18} />
          <span aria-hidden="true" className="h-0.5 w-14 rounded-[2px] bg-gradient-mark" />
        </div>
        <Region icon={<FigmaIcon src={GccIcon} size={22} />}>GCC</Region>
      </div>
      <ul className="mx-auto flex max-w-[360px] flex-wrap justify-center gap-2">
        {["Family businesses", "Investment organizations", "Technology companies"].map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/70 px-3.75 py-2.25 text-[12.5px] font-semibold leading-[20.63px] text-ink-500"
          >
            <Trans>{item}</Trans>
          </li>
        ))}
      </ul>
    </div>
  );
}
