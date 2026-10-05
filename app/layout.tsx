import { Montserrat, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import GoogleTranslate from "@/Components/GoogleTranslate/GoogleTranslate";

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
  title: "Samateches",
  description: "Informative Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${quicksand.variable}`}
      >
        <GoogleTranslate/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}