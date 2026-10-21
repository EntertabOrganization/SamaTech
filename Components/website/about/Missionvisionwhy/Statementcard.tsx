import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import { cn } from "@/Components/website/ui";
import type { Statement } from "./Statements";

export default function StatementCard({ title, text, icon, tone }: Statement) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-card border p-11 lg:min-h-[306.75px]",
        tone === "white"
          ? "border-ink-100 bg-white drop-shadow-[0px_2px_4px_rgba(18,26,35,0.06)]"
          : "border-blue-haze bg-blue-mist",
      )}
    >
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-input",
          tone === "white" ? "bg-blue-mist" : "bg-white",
        )}
      >
        <Image src={icon} alt="" width={24} height={25} className="-scale-y-100" />
      </span>
      <h2 className="mt-4.25 font-heading text-h3 font-bold leading-h3 tracking-[-0.01em] text-ink-900"><Trans>{title}</Trans></h2>
      <p className={cn("mt-4.75 text-body font-medium leading-[1.65]", tone === "white" ? "text-ink-500" : "text-ink-700")}>
        <Trans>{text}</Trans>
      </p>
    </article>
  );
}
