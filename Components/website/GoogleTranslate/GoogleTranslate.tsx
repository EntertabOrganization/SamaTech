
"use client";

import Script from "next/script";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };

    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  return (
    <>
      <div
        id="google_translate_element"
        style={{ display: "none" }}
      />

      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => {
          window.googleTranslateElementInit = () => {
            if (!window.google?.translate?.TranslateElement) {
              return;
            }

            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,ar",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          };

          window.googleTranslateElementInit();
        }}
      />
    </>
  );
}
