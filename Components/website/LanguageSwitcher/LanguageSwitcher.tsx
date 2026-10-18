"use client";

import Button from "../ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "ar" : "en";

  return (
    <Button size="sm" variant="outline" className="cursor-pointer" type="button" lang={next} dir={next === "ar" ? "rtl" : "ltr"}
      aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      onClick={() => setLanguage(next)}>
      {language === "en" ? "العربية" : "English"}
    </Button>
  );
}
