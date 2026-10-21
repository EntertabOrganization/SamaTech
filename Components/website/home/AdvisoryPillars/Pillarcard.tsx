import { Trans } from "@/lib/i18n/LanguageProvider";
import Link from "next/link";
import { Icon } from "@/Components/website/ui";
import FocusDisclosure from "./Focusdisclosure";
import type { Pillar } from "./Data";

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="flex flex-col justify-between gap-6.5 rounded-[40px] border bg-[#FFFFFF17] border-white/16 p-10 shadow-sm backdrop-blur-[14px]">
     <div className="flex flex-col gap-6.5">
       <span className="flex h-11 w-11 items-center justify-center rounded-input bg-white/14 text-white">
         <Icon name={pillar.icon} size={22} strokeWidth={1.6} />
       </span>
      
       <h3 className="text-lg font-semibold font-heading leading-snug text-white">
         <Trans>{pillar.title}</Trans>
       </h3>
       <p className=" text-sm font-medium leading-relaxed font-body text-white">
         <Trans>{pillar.description}</Trans>
       </p>
     </div>

      <div>
        <FocusDisclosure
          items={pillar.focusAreas}
          defaultOpen={pillar.defaultOpen}
        />

        <Link
          href={pillar.href}
          className="group mt-2 flex items-start justify-between gap-3 border-t border-white/15 pt-4 text-xs font-medium text-blue-precision transition-colors hover:text-[#66ADFF]"
        >
          <span><Trans>{pillar.linkLabel}</Trans></span>
          <span
            aria-hidden="true"
            className="mt-0.5 transition-transform group-hover:translate-x-0.5"
          >
            <Icon name="chevron-down" size={14} strokeWidth={2} className="-rotate-90" />
          </span>
        </Link>
      </div>
    </article>
  );
}
