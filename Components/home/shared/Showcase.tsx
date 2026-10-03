import { cn } from "@/Components/ui";
import ShowcaseTabs, {
  type ShowcaseItem,
  type ShowcaseVariant,
} from "./ShowcaseTabs";
import { MicroLabel } from "./primitives";

const stackStyles: Record<ShowcaseVariant, { box: string; label: string }> = {
  cards: {
    box: "space-y-8 rounded-card border border-[#00000000] bg-white p-5 backdrop-blur-[14px]",
    label: "mb-4",
  },
  soft: {
    box: "space-y-10 rounded-3xl bg-[#F1F5FB] p-5",
    label: "mb-3",
  },
};

interface ShowcaseProps {
  items: ShowcaseItem[];
  /** Accessible name of the desktop tab list. */
  label: string;
  variant?: ShowcaseVariant;
  /** Spacing above the desktop tabs, e.g. "mt-24". */
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
            <MicroLabel className={stack.label}>{item.title}</MicroLabel>
            {item.visual}
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
