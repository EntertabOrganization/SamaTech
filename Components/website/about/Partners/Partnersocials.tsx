"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { InstagramIcon, LinkedInIcon, XIcon } from "@/Components/website/about/ShareComponents/Icons";
import type { Partner } from "./Data";
import Link from "next/link";

export default function PartnerSocials({ partner }: { partner: Partner }) {
  const { t: translateText, language } = useLanguage();

  const items = [
    { label: language === "ar" ? `${translateText(partner.name)} على لينكدإن` : `${partner.name} on LinkedIn`, href: partner.linkedin, Icon: LinkedInIcon },
    { label: language === "ar" ? `${translateText(partner.name)} على إكس` : `${partner.name} on X`, href: partner.x, Icon: XIcon },
    { label: language === "ar" ? `${translateText(partner.name)} على إنستغرام` : `${partner.name} on Instagram`, href: partner.instagram, Icon: InstagramIcon },
  ];

  return (
    <ul className="mt-4 flex gap-3">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            aria-label={translateText(label)}
            className="text-blue-pulse transition-colors hover:text-blue-sovereign"
          >
            <Icon width={18} height={18} strokeWidth={1.6} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
