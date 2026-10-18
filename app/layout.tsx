
import { cookies } from "next/headers";
import { Montserrat, Quicksand, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

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

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: "SAMATECHS | ساماتكس",
  description:
    "Strategic advisory and analytics | الاستشارات الاستراتيجية والتحليلات",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language =
    cookieStore.get("samatechs-language")?.value === "ar"
      ? "ar"
      : "en";

  return (
    <html
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={`${montserrat.variable} ${quicksand.variable} ${arabic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
