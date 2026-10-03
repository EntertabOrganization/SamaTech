import Link from "next/link";
import { Icon } from "@/Components/ui";
import FocusDisclosure from "./Focusdisclosure";
import type { Pillar } from "./Data";

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="flex flex-col gap-6.5 rounded-3xl border bg-[#FFFFFF17] border-white/16 p-10 shadow-sm backdrop-blur-[14px]">
      <span className="flex h-11 w-11 items-center justify-center rounded-input bg-white/14 text-white">
        <Icon name={pillar.icon} size={22} strokeWidth={1.6} />
      </span>

      <h3 className="text-lg font-semibold font-heading leading-snug text-white">
        {pillar.title}
      </h3>
      <p className="mt-4 text-sm font-medium leading-relaxed font-body text-white">
        {pillar.description}
      </p>

      <div>
        <FocusDisclosure
          items={pillar.focusAreas}
          defaultOpen={pillar.defaultOpen}
        />

        <Link
          href={pillar.href}
          className="group mt-2 flex items-start justify-between gap-3 border-t border-white/15 pt-4 text-xs font-medium text-blue-precision transition-colors hover:text-[#66ADFF]"
        >
          <span>{pillar.linkLabel}</span>
          <span
            aria-hidden="true"
            className="mt-0.5 transition-transform group-hover:translate-x-0.5"
          >
            {/* No chevron-right in the icon set: chevron-down rotated -90deg */}
            <Icon name="chevron-down" size={14} strokeWidth={2} className="-rotate-90" />
          </span>
        </Link>
      </div>
    </article>
  );
}
