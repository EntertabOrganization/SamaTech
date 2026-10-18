import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import backgroundVector from "@/public/images/footer-vector.png";

export default function StatementBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0E1823] to-[#1A2736] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      {/* Faint brand rays, right side, partly cropped */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 -bottom-10 h-40 w-50 opacity-5"
      >
        <Image
          src={backgroundVector}
          alt=""
          fill
          loading="eager"
          sizes="200px"
          quality={100}
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <h1 className="w-150 text-h1 font-bold leading-snug tracking-tight text-white sm:text-2xl"><Trans>
          Transformation begins with clarity, and succeeds through disciplined
          oversight.
        </Trans></h1>
      </div>
    </section>
  );
}
