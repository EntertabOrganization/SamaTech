import { Montserrat, Quicksand, Noto_Sans_Arabic } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import WebsiteLoader from "@/Components/layout/WebsiteLoader";

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["500", "700"],
});

export const metadata = {
  title: "SAMATECHS | ساماتكس",
  description: "Strategic advisory and analytics | الاستشارات الاستراتيجية والتحليلات",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = (await cookies()).get("samatechs-language")?.value === "ar" ? "ar" : "en";
  return (
    <html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${montserrat.variable} ${quicksand.variable} ${arabic.variable}`}
      >
        <LanguageProvider initialLanguage={language}>
          <WebsiteLoader>
            <Navbar />
            {children}
            <Footer />
          </WebsiteLoader>
        </LanguageProvider>
      </body>
    </html>
  );
}
