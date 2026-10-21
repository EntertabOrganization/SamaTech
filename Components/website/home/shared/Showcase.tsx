import { Trans } from "@/lib/i18n/LanguageProvider";

import { cn } from "../../../../lib/cn";
import MicroLabel from "../../ContactPage/MicroLabel";
import ShowcaseTabs, {
  type ShowcaseItem,
  type ShowcaseVariant,
} from "./ShowcaseTabs";
export type { ShowcaseItem } from "./ShowcaseTabs";

/** label = class for the visible caption above each visual. null = title only for screen readers. */
const stackStyles: Record<ShowcaseVariant, { box: string; label: string | null }> = {
  cards: {
    box: "space-y-8 rounded-input border border-blue-pulse bg-[#F1F4F8] p-6",
    label: "mb-3.5",
  },
  soft: {
    box: "space-y-10 rounded-panel bg-ink-50 p-6",
    label: "mb-3",
  },
  capabilities: {
    box: "space-y-10 rounded-panel bg-ink-50 p-6",
    label: "mb-3",
  },
  steps: {
    box: "space-y-10 rounded-panel bg-ink-50 p-6",
    label: "mb-3",
  },
  plain: {
    box: "space-y-5 rounded-3xl bg-[#F1F5FB] p-4",
    label: null,
  },
};

interface ShowcaseProps {
  items: ShowcaseItem[];
  label: string;
  variant?: ShowcaseVariant;
  tabsClassName?: string;
}

/**
 * Mobile: every visual stacked in one card (server-rendered, no state).
 * Desktop (lg+): list + single panel (client, holds the active tab).
 */
export default function Showcase({
  items,
  label,
  variant = "cards",
  tabsClassName,
}: ShowcaseProps) {
  const stack = stackStyles[variant];

  return (
    <>
      <div className={cn("mt-10 lg:hidden", stack.box)}>
        {items.map((item) => (
          <div key={item.id}>
            {stack.label === null ? (
              <h3 className="sr-only"><Trans>{item.title}</Trans></h3>
            ) : (
              <MicroLabel className={stack.label}><Trans>{item.title}</Trans></MicroLabel>
            )}
            <Trans>{item.visual}</Trans>
          </div>
        ))}
      </div>

      <ShowcaseTabs
        items={items}
        label={label}
        variant={variant}
        className={tabsClassName}
      />
    </>
  );
}

