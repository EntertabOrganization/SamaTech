"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "ar" : "en";

  return (
    <button
      type="button"
      lang={next}
      dir={next === "ar" ? "rtl" : "ltr"}
      aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      onClick={() => setLanguage(next)}
      className="flex h-[33px] min-w-18 cursor-pointer items-center justify-center rounded-full border border-ink-200 bg-white px-4 text-[13px] font-bold text-ink-500 transition-colors hover:border-ink-300"
    >
      {language === "en" ? "العربية" : "English"}
    </button>
  );
}
