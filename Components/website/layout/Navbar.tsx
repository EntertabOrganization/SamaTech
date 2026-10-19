"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/horizontal-logo 1.svg";
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
    <header className="sticky top-0 z-50 w-full border-b border-blue-pulse bg-[#FFFFFFDB] shadow-sm backdrop-blur-[14px] font-body">
      <nav
        aria-label={translateText("Main navigation")}
        className="mx-auto flex h-16 gap-20 justify-center items-center  px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={translateText("SAMATECHS home")}
        >
          <Image
            src={Logo}
            alt={translateText("SAMATECHS logo")}
            width={1267}
            height={289}
            style={{ width: 150, height: "auto" }}
            loading="eager"
          />
          {language === "ar" && <span className="text-xl font-bold text-blue-sovereign">ساماتكس</span>}
        </Link>

       <div className="flex justify-end gap-[245.5] w-310">
         {/* Desktop links */}
         <ul className="hidden items-center gap-8 lg:flex ">
           {links.map((link) => (
             <li key={link.href}>
               <Link
                 href={link.href}
                 aria-current={isActive(link.href) ? "page" : undefined}
                 className={`text-sm transition-colors hover:text-ink-900 ${
                   isActive(link.href)
                     ? "font-semibold text-ink-900"
                     : "text-ink-500"
                 }`}
               >
                 <Trans>{link.label}</Trans>
               </Link>
             </li>
           ))}
         </ul>
        
         {/* Desktop actions */}
         <div className="hidden items-center gap-3 lg:flex">
           <LanguageSwitcher />
        
           <Link href="/contact">
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
