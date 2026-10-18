import type { ReactNode } from "react";
import { cn } from "@/Components/website/ui";
import { SmallDot } from "./primitives";

interface FocusStackProps {
  items: string[];
  /** Icon of the highlighted (center) item. */
  icon: ReactNode;
  /** Defaults to the middle item. */
  centerIndex?: number;
  rounded?: "2xl" | "full";
  className?: string;
}

const radius = { "2xl": "rounded-2xl", full: "rounded-full" };

/**
 * One highlighted item in the center; the others get narrower and fainter
 * the further they are from it. Inset and fade come from the distance,
 * so there is nothing to hand-tune per item.
 */
export default function FocusStack({
  items,
  icon,
  centerIndex = Math.floor(items.length / 2),
  rounded = "2xl",
  className,
}: FocusStackProps) {
  return (
    <ul className={cn("flex flex-col gap-2.5", className)}>
      {items.map((label, i) => {
        const distance = Math.abs(i - centerIndex);
        const center = distance === 0;

        return (
          <li
            key={label}
            style={{ marginInline: distance * 14 }}
            className={cn(
              "flex items-center gap-2.5 px-4 py-2.5 text-xs",
              radius[rounded],
              distance === 1 && "opacity-60",
              distance >= 2 && "opacity-40",
              center
                ? "bg-white font-semibold text-[#0F1B2D] shadow-[0px_8px_20px_-8px_#121A2330]"
                : "bg-white/60 text-slate-500",
            )}
          >
            <span className={center ? "text-blue-pulse" : "text-slate-400"}>
              {center ? icon : <SmallDot />}
            </span>
            {label}
          </li>
        );
      })}
    </ul>
  );
}
