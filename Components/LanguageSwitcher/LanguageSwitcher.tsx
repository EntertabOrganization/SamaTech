
"use client";

import { useSyncExternalStore } from "react";

type Language = "en" | "ar";

const getLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = localStorage.getItem("language");

  return savedLanguage === "ar" ? "ar" : "en";
};

const subscribe = (callback: () => void) => {
  window.addEventListener("languagechange", callback);

  return () => {
    window.removeEventListener("languagechange", callback);
  };
};

const getServerSnapshot = (): Language => {
  return "en";
};

const changeDirection = (lang: Language) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
};

export default function LanguageSwitcher() {
  const language = useSyncExternalStore(
    subscribe,
    getLanguage,
    getServerSnapshot
  );

  const changeLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);

    changeDirection(lang);

    // Tell React that the language changed
    window.dispatchEvent(new Event("languagechange"));

    // Google Translate
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;

    if (!select) {
      console.log("Google Translate is not ready yet");
      return;
    }

    select.value = lang;

    select.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );
  };

  const toggleLanguage = () => {
    const newLanguage: Language =
      language === "en" ? "ar" : "en";

    changeLanguage(newLanguage);
  };

  return (
    <button type="button" onClick={toggleLanguage}>
      {language === "en" ? "العربي" : "English"}
    </button>
  );
}
