
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import WebsiteLoader from "@/Components/website/layout/WebsiteLoader";
import Navbar from "@/Components/website/layout/Navbar";
import Footer from "@/Components/website/layout/Footer";
import { cookies } from "next/headers";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language =
    (await cookies()).get("samatechs-language")?.value === "ar"
      ? "ar"
      : "en";

  return (
    <LanguageProvider initialLanguage={language}>
      <WebsiteLoader>
        <Navbar />
        {children}
        <Footer />
      </WebsiteLoader>
    </LanguageProvider>
  );
}
