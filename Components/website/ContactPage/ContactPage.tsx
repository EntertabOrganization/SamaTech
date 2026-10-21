import ContactInfo from "./ContactInfo";
import ContactPanel from "./ContactPanel";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-mist px-4 sm:px-6 lg:px-8">
      {/* Figma "Gradient": brand glow centred on the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,120,255,0.28)_0%,rgba(0,120,255,0)_70%)]"
      />

      <div className="relative mx-auto grid max-w-310 items-start gap-10 pb-16 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16 lg:pb-24 lg:pt-22">
        <ContactInfo />
        <ContactPanel />
      </div>
    </section>
  );
}
