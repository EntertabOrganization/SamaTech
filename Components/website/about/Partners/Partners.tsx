import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import PartnerCard from "./Partnercard";
import { disclaimer, partners } from "./Data";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import CtaBanner from "../ShareComponents/Ctabanner";
import Pattern from "@/public/figma/mission-pattern.svg";
import CtaPattern from "@/public/figma/about-cta-pattern.svg";

export default function Partners() {
  return (
    <>
      <section className="relative overflow-hidden bg-white px-4 pb-16 sm:px-6 lg:px-8 lg:pb-28">
        {[ "calc(50% - 419.07px)", "calc(50% + 834.93px)" ].map((top) => (
          <Image
            key={top}
            src={Pattern}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 h-[1321px] w-[2186.08px] max-w-none -translate-x-1/2 -translate-y-1/2"
            style={{ top }}
          />
        ))}

        <div className="relative mx-auto flex max-w-310 flex-col gap-10">
          <SectionHeader
            eyebrow="Our founders"
            title={"Three managing partners,\none advisory model"}
            className="max-w-[599px] [&>h2]:lg:leading-[1.33]"
          />

          <div className="flex flex-col gap-2.5">
            {partners.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>

          <p className="max-w-[703px] border-t border-ink-100 pt-6 text-[13px] font-medium leading-[21.45px] text-ink-300">
            <strong className="font-bold text-ink-500"><Trans>{disclaimer.label}</Trans></strong>{" "}
            <Trans>{disclaimer.text}</Trans>
          </p>
        </div>
      </section>

      <CtaBanner
        className="bg-white"
        title={"Every engagement is led\nby a partner. Start there."}
        label="Start a Confidential Conversation"
        href="/contact"
        pattern={{ src: CtaPattern, top: "calc(50% + 354.45px)" }}
      />
    </>
  );
}
