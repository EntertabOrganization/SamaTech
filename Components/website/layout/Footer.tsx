"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import Link from "next/link";
import Logo from "@/public/horizontal-logo-white 1.svg";
import Image, { type StaticImageData } from "next/image";
import BrandFooter from "@/public/images/footer-vector.png";
import LinkedinIcon from "@/public/figma/social-linkedin.svg";
import XIcon from "@/public/figma/social-x.svg";
import InstagramIcon from "@/public/figma/social-instagram.svg";
import FacebookIcon from "@/public/figma/social-facebook.svg";
import SnapchatIcon from "@/public/figma/social-snapchat.svg";

interface FooterLink {
  label: string;
  href: string;
}

const siteLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const focusAreas: string[] = [
  "Enterprise Strategy & Performance",
  "Risk, Governance & Decision Intelligence",
  "Digital Transformation & Cross-Border Growth",
];

const contactDetails: string[] = [
  "info@samatechs.com",
  "+966 559447225",
];

const legalLinks: FooterLink[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
];

const socials: { label: string; href: string; icon: StaticImageData }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/samatechs",
    icon: LinkedinIcon,
  },
  {
    label: "X",
    href: "https://x.com/samatechs_?s=11&t=s6yTAHsZWSPlFLERGjMrMQ",
    icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/samatechs/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592819443552",
    icon: FacebookIcon,
  },
  {
    label: "Snapchat",
    href: "https://www.snapchat.com/add/samatechs",
    icon: SnapchatIcon,
  },
];

const columnTitle =
  "font-body text-eyebrow font-bold uppercase leading-[19.8px] tracking-eyebrow text-blue-precision";
const columnItem =
  "text-body-small font-medium leading-[1.65] text-blue-haze";

export default function Footer() {
  const { t: translateText } = useLanguage();

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-navy px-4 pb-9 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      {/* Faint brand rays, bottom-left */}
      <Image
        src={BrandFooter}
        alt=""
        aria-hidden="true"
        sizes="440px"
        className="pointer-events-none absolute -bottom-35 -left-30 h-[431.02px] w-110 max-w-none opacity-5"
      />

      <div className="relative mx-auto max-w-310 sm:px-8">
        <div className="grid gap-12 border-b border-white/14 pb-12 sm:grid-cols-2 lg:min-h-[256.28px] lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,1fr)]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-2.5">
            <Image
              src={Logo}
              alt={translateText("SAMATECHS logo")}
              width={1267}
              height={289}
              className="h-auto w-[285px]"
              loading="eager"
            />
            <p className={`max-w-[286px] lg:whitespace-pre-line ${columnItem}`}>
              <Trans>{"A boutique strategic advisory and analytics\nfirm. Senior-led, evidence-based, built\nfor execution."}</Trans>
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={translateText(s.label)}
                    className="flex size-9.5 items-center justify-center rounded-full border border-white/14 transition-colors hover:border-white/40"
                  >
                    <Image src={s.icon} alt="" width={17} height={17} className="-scale-y-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <nav aria-label={translateText("Site")} className="flex flex-col gap-3.25">
            <h3 className={columnTitle}><Trans>Site</Trans></h3>
            {siteLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`${columnItem} transition-colors hover:text-white`}>
                <Trans>{l.label}</Trans>
              </Link>
            ))}
          </nav>

          {/* Focus */}
          <div className="flex flex-col gap-3.25">
            <h3 className={columnTitle}><Trans>Pillars</Trans></h3>
            {focusAreas.map((item) => (
              <Link key={item} href="/services" className={`${columnItem} transition-colors hover:text-white`}>
                <Trans>{item}</Trans>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3.25">
            <h3 className={columnTitle}><Trans>Get in touch</Trans></h3>
            {/* Email and phone stay in Latin digits, left to right, in both languages. */}
            {contactDetails.map((item) => (
              <p key={item} className={columnItem}>
                <bdi dir="ltr" lang="en" translate="no">{item}</bdi>
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-7 text-[13px] font-medium leading-[21.45px] text-ink-300 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <p>© <Trans>{year}</Trans><Trans> SAMATECHS. All rights reserved.</Trans></p>
          <ul className="flex flex-wrap gap-x-6.5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  <Trans>{l.label}</Trans>
                </Link>
              </li>
            ))}
            <li><Trans>Designed and developed by Entertab</Trans></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
