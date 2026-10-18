"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function LoadingScreen() {
  const { t } = useLanguage();

  return (
    <div className="website-loader" role="status" aria-live="polite" aria-label={t("Loading website...")}>
      <span className="website-loader__spinner" aria-hidden="true" />
      <p className="website-loader__brand">{t("SAMATECHS")}</p>
      <p className="website-loader__label">{t("Loading website...")}</p>
    </div>
  );
}
