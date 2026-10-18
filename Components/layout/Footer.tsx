"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import Link from "next/link";
import Logo from "../../public/horizontal-logo-white 1.svg";
import Image from "next/image";
import BrandFooter from "../../public/images/footer-vector.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

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
  "Executive Strategy & Performance",
  "Risk, Governance & Decision Intelligence",
  "Digital Transformation & Cross-Border Growth",
];

const contactDetails: string[] = [
  "[Insert Address Here]",
  "[Insert Contact Email Here]",
  "[Insert Phone Number Here]",
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Confidentiality", href: "/cookies" },
];

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
    ),
  },
  {
    label: "Facebook",
    href: "mailto:hello@samatechs.com",
    icon: (
      <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
    ),
  },
  {
    label: "Snapchat",
    href: "mailto:hello@samatechs.com",
    icon: (
      <FontAwesomeIcon icon={faSnapchat} className="h-4 w-4" />
    ),
  },
];

const columnTitle =
  "text-[11px] font-semibold uppercase tracking-wider text-[#3393FF]";
const columnLink =
  "text-sm text-slate-300 transition-colors hover:text-white";

export default function Footer() {
  const { t: translateText, language } = useLanguage();

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#0E1823] to-[#1A2736] text-slate-300 px-4 sm:px-6 lg:px-27">
      {/* Faint brand rays, bottom-left */}
      <div
  aria-hidden="true"
  className="pointer-events-none absolute -bottom-40 -left-25 h-105 w-110 opacity-5"
>
  <Image
    src={BrandFooter}
    alt=""
    fill
    priority
    quality={100}
    className="object-contain object-bottom-left"
  />
</div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Image
              src={Logo}
              alt={translateText("SAMATECHS logo")}
              width={200}
              height={40}
            />
            {language === "ar" && <p className="mt-2 text-2xl font-bold text-white">ساماتكس</p>}
            <p className="mt-4 w-67.5 text-sm leading-relaxed text-slate-400"><Trans>
              A Saudi-led strategic advisory and analytics firm. Partner-led,
              evidence-based, built for execution.
            </Trans></p>
            <ul className="mt-5 flex gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={translateText(s.label)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <Trans>{s.icon}</Trans>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <nav aria-label={translateText("Site")}>
            <h3 className={columnTitle}><Trans>Site</Trans></h3>
            <ul className="mt-4 space-y-3">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={columnLink}>
                    <Trans>{l.label}</Trans>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Focus */}
          <div>
            <h3 className={columnTitle}><Trans>Pillars</Trans></h3>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((item) => (
                <li key={item} className="max-w-47 text-sm leading-snug text-slate-300">
                  <Trans>{item}</Trans>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={columnTitle}><Trans>Get in touch</Trans></h3>
            <ul className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <li key={item} className="text-sm text-slate-300">
                  <Trans>{item}</Trans>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© <Trans>{year}</Trans><Trans> SAMATECHS. All rights reserved.</Trans></p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  <Trans>{l.label}</Trans>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
