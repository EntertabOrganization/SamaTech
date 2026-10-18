import { Trans } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/Components/ui";
import type { Statement } from "./Statements";

export default function StatementCard({ title, text, icon, tone }: Statement) {
  return (
    <article
      className={cn(
        "rounded-2xl border p-10",
        tone === "white"
          ? "border-ink-100 bg-white"
          : "border-[#C9D8EE] bg-[#E3ECF9]",
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg text-blue-sovereign",
          tone === "white" ? "bg-[#E3ECF9]" : "bg-white",
        )}
      >
        <Trans>{icon}</Trans>
      </span>
      <h3 className="mt-3 text-h3 font-bold font-heading text-[#0F1B2D]"><Trans>{title}</Trans></h3>
      <p className="mt-2 text-body font-medium leading-relaxed text-ink-500"><Trans>{text}</Trans></p>
    </article>
  );
}
