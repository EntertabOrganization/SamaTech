import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import backgroundVector from "@/public/images/footer-vector.png";

export default function StatementBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
      {/* Faint brand rays, right side, partly cropped */}
      <Image
        src={backgroundVector}
        alt=""
        aria-hidden="true"
        sizes="440px"
        className="pointer-events-none absolute -bottom-[185.02px] -right-5 h-[431.02px] w-110 max-w-none opacity-5"
      />

      <div className="relative mx-auto max-w-294">
        <p className="font-heading text-3xl font-bold leading-[1.25] tracking-[-0.01em] text-white lg:text-h1">
          <Trans>
            Transformation begins with clarity, and succeeds through disciplined
            oversight.
          </Trans>
        </p>
      </div>
    </section>
  );
}
