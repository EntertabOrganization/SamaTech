import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import Pattern from "@/public/figma/serve-pattern.svg";
import SectionHeader from "../shared/SectionHeader";
import Showcase from "../shared/Showcase";
import { audiences } from "./audiences";

export default function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-ink-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <Image
        src={Pattern}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto flex max-w-310 flex-col gap-13 sm:px-8">
        <div className="max-w-[596.19px]">
          <SectionHeader
            eyebrow="Who we serve"
            title={"Leadership teams\nfacing decisions that\ncarry consequence"}
          />
          <p className="mt-5 text-body font-medium leading-[1.65] text-ink-500">
            <Trans>SAMATECHS works with leadership teams navigating complex strategic, operational, technological, risk, and cross-border challenges. Our senior-led advisory model is particularly suited to organizations that require rigorous analysis, executive alignment, and implementation-ready solutions.</Trans>
          </p>
        </div>

        <Showcase
          items={audiences}
          label="Who we serve"
          variant="cards"
        />
      </div>
    </section>
  );
}
