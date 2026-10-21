import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/public/figma/arrow-blue-14.svg";
import FocusDisclosure from "./Focusdisclosure";
import type { Pillar } from "./Data";

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="flex flex-col gap-6.5 rounded-panel border border-white/16 bg-white/9 p-8 lg:p-10">
      <span className="flex size-20 items-center justify-center rounded-input bg-white/14">
        <Image src={pillar.icon.src} alt="" width={pillar.icon.width} height={pillar.icon.height} />
      </span>

      <h3 className="max-w-[310px] font-heading lg:whitespace-pre-line text-h4 font-semibold leading-h4 tracking-[-0.01em] text-white">
        <Trans>{pillar.title}</Trans>
      </h3>
      <p className="max-w-[310px] text-body-small font-medium leading-[1.65] text-white">
        <Trans>{pillar.description}</Trans>
      </p>

      <FocusDisclosure
        items={pillar.focusAreas}
        defaultOpen={pillar.defaultOpen}
      />

      <Link
        href={pillar.href}
        className="group flex max-w-[310px] items-center gap-2 text-body-small font-bold leading-[1.65] text-blue-pulse transition-colors hover:text-blue-precision"
      >
        <span className="w-[288px]"><Trans>{pillar.linkLabel}</Trans></span>
        <Image
          src={ArrowIcon}
          alt=""
          width={14}
          height={14}
          className="directional-arrow shrink-0 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
