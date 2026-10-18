import Navbar from "@/Components/website/layout/Navbar";
import Footer from "@/Components/website/layout/Footer";
import GoogleTranslate from "@/Components/website/GoogleTranslate/GoogleTranslate";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <GoogleTranslate/>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}