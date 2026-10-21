"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/horizontal-logo 1.svg";
import ArrowIcon from "@/public/figma/nav-arrow.svg";
import Image from "next/image";
import Button from "../ui/Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { t: translateText, language } = useLanguage();

  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/86 shadow-sm backdrop-blur-[7px] font-body">
      {/* Figma "Horizontal Divider": 2px brand line over the bottom border */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-blue-pulse" />
      <nav
        aria-label={translateText("Main navigation")}
        className="mx-auto flex h-19 items-center justify-between gap-20 px-4 sm:px-6 lg:justify-center lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label={translateText("SAMATECHS home")}
        >
          <Image
            src={Logo}
            alt={translateText("SAMATECHS logo")}
            width={1267}
            height={289}
            className="h-auto w-[150px] lg:w-[201.68px]"
            loading="eager"
          />
          {language === "ar" && <span className="text-xl font-bold text-blue-sovereign">ساماتكس</span>}
        </Link>

        <div className="hidden w-full max-w-310 items-center justify-end gap-10 lg:flex xl:gap-[245.3px]">
          {/* Desktop links */}
          <ul className="flex items-center gap-7.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-sm font-semibold leading-[23.1px] transition-colors hover:text-ink-900 ${
                    isActive(link.href) ? "text-ink-900" : "text-ink-500"
                  }`}
                >
                  <Trans>{link.label}</Trans>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="flex items-center gap-3.5">
            <LanguageSwitcher />

            <Link href="/contact">
              <Button
                size="sm"
                className="gap-2 tracking-[0.14px] drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)] lg:min-w-[222px]"
              ><Trans>
                Schedule a consultation
                </Trans><Image
                  src={ArrowIcon}
                  alt=""
                  width={15}
                  height={15}
                  className="directional-arrow"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={translateText(open ? "Close menu" : "Open menu")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    isActive(link.href)
                      ? "bg-slate-100 font-semibold text-slate-900"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Trans>{link.label}</Trans>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <LanguageSwitcher />

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
            >
              <Button
                size="sm"
                className="flex items-center gap-4"
              ><Trans>
                Schedule a consultation
                </Trans><FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="h-4 w-4"
                />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
