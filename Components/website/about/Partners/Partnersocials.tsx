"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@/public/figma/partner-linkedin.svg";
import XIcon from "@/public/figma/partner-x.svg";
import InstagramIcon from "@/public/figma/partner-instagram.svg";
import type { Partner } from "./Data";

export default function PartnerSocials({ partner }: { partner: Partner }) {
  const { t: translateText, language } = useLanguage();

  const items = [
    { label: language === "ar" ? `${translateText(partner.name)} على لينكدإن` : `${partner.name} on LinkedIn`, href: partner.linkedin, icon: LinkedInIcon },
    { label: language === "ar" ? `${translateText(partner.name)} على إكس` : `${partner.name} on X`, href: partner.x, icon: XIcon },
    { label: language === "ar" ? `${translateText(partner.name)} على إنستغرام` : `${partner.name} on Instagram`, href: partner.instagram, icon: InstagramIcon },
  ];

  return (
    <ul className="flex gap-[24.67px]">
      {items.map(({ label, href, icon }) => (
        <li key={label}>
          <Link
            href={href}
            aria-label={label}
            className="block transition-opacity hover:opacity-75"
          >
            <Image src={icon} alt="" width={32} height={32} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
