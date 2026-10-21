import { Trans } from "@/lib/i18n/LanguageProvider";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import ArrowIcon from "@/public/figma/arrow-dark-19.svg";
// Relative import on purpose, so it doesn't depend on the @/Components casing.
import { cn } from "../../../../lib/cn";

interface CtaBannerProps {
  /** Line breaks (\n) are kept on large screens. */
  title: string;
  label: string;
  href: string;
  /** Faint brand pattern behind the banner, placed as in the design. */
  pattern?: { src: StaticImageData; top: string };
  className?: string;
}

/** Blue gradient call-to-action closing a page: heading on the left, white pill button on the right. */
export default function CtaBanner({
  title,
  label,
  href,
  pattern,
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("relative overflow-hidden px-4 pb-16 sm:px-6 lg:px-8 lg:pb-28", className)}>
      {pattern && (
        <Image
          src={pattern.src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
          style={{ top: pattern.top }}
        />
      )}
      <div className="relative mx-auto grid max-w-294 items-center gap-8 rounded-panel bg-gradient-mark p-8 text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)] sm:p-10 lg:min-h-[206.19px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12 lg:p-16">
        <p className="max-w-[600.23px] font-heading text-2xl font-bold leading-h2 tracking-[-0.01em] sm:text-3xl lg:whitespace-pre-line lg:text-h2">
          <Trans>{title}</Trans>
        </p>
        <div className="flex lg:justify-end">
          <Link
            href={href}
            className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-base font-bold tracking-[0.16px] text-ink-900 transition-colors hover:bg-ink-50"
          >
            <Trans>{label}</Trans>
            <Image src={ArrowIcon} alt="" width={19} height={19} className="directional-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
