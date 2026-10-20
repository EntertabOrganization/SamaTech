import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import backgroundVector from "@/public/images/footer-vector.png";

export default function StatementBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0E1823] to-[#1A2736] px-4 py-12 sm:px-6 sm:py-14 lg:px-50 2xl:px-85 lg:py-24">
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

      <div className="relative ">
        <h1 className=" font-['Montserrat'] text-[35px] font-bold leading-13.75 tracking-[-0.44px] text-white"><Trans>
          Transformation begins with clarity, and succeeds through disciplined
          oversight.
        </Trans></h1>
      </div>
    </section>
  );
}
