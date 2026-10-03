"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from ".././../public/horizontal-logo 1.svg";
import Image from "next/image";
import Button from "../ui/Button";

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
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink-100 bg-[#FFFFFFDB] shadow-sm backdrop-blur-[14px] font-body">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo (استبدلي الـ SVG ده بـ next/image واللوجو بتاعك) */}
        <Link href="/" className="flex items-center gap-2" aria-label="Samatechs home">
          <Image
            src={Logo}
            alt="Samatechs logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm transition-colors hover:text-ink-900 ${
                  isActive(link.href) ? "font-semibold text-ink-900" : "text-ink-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/ar"
          >
            <Button size="sm" variant="outline">العربية</Button>
          </Link>
          <Link
            href="/contact"
          >
            <Button size="sm">Schedule a consultation
            <span aria-hidden="true">→</span></Button>
            
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden">
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
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/ar"
              onClick={() => setOpen(false)}
            >
              <Button variant="outline">العربية</Button>
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
            >
              <Button> Schedule a consultation →</Button>
             
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}