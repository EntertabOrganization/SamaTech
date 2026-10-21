"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import PartnerSocials from "./Partnersocials";
import type { Partner } from "./Data";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function PartnerCard({ partner }: { partner: Partner }) {
  const { t: translateText, language } = useLanguage();
  const frame = partner.photoFrame;

  return (
    <article className="grid gap-8 rounded-media border-t border-ink-100 px-0 py-11 sm:px-6 md:grid-cols-[fit-content(100%)_minmax(0,1fr)] md:gap-14">
      <div className="relative aspect-[467/286] w-full overflow-hidden rounded-3xl bg-white md:w-[467px]">
        {partner.photo ? (
          <div
            className="absolute"
            style={
              frame
                ? {
                    width: `${(frame.width / 467) * 100}%`,
                    height: `${(frame.height / 286) * 100}%`,
                    left: `${(frame.left / 467) * 100}%`,
                    top: `${(frame.top / 286) * 100}%`,
                  }
                : { inset: 0 }
            }
          >
            <Image
              src={partner.photo}
              alt={language === "ar" ? `صورة ${translateText(partner.name)}` : `Portrait of ${partner.name}`}
              fill
              sizes="(min-width: 768px) 554px, 100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-gradient-navy text-3xl font-semibold text-white/80"
          >
            {initials(partner.name)}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center gap-6.5">
        <div className="flex flex-col gap-2.75">
          <h3 className="font-heading text-h3 font-bold leading-h3 tracking-[-0.01em] text-ink-900">
            <Trans>{partner.name}</Trans>
          </h3>
          <p className="text-body-small font-bold leading-[1.6] text-blue-sovereign">
            <Trans>{partner.role}</Trans>
          </p>
          <p className="text-[13px] font-medium leading-[21.45px] text-ink-300">
            <Trans>{partner.tagline}</Trans>
          </p>
        </div>
        <PartnerSocials partner={partner} />
      </div>

      <p className="text-body font-medium leading-[1.65] text-ink-500 md:col-span-2">
        <Trans>{partner.bio}</Trans>
      </p>
    </article>
  );
}
