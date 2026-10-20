import ContactInfo from "./ContactInfo";
import ContactPanel from "./ContactPanel";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#F4F8FD] to-[#E4ECF7] px-4  sm:px-6 lg:px-50 2xl:px-85">
      {/* Soft blue glow at the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-65 h-130 w-240 max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,#BCD8FF_0%,rgba(188,216,255,0)_100%)]"
      />

      <div className="relative mx-auto grid items-start max-w-310 lg:px-8 lg:py-28 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <ContactInfo />
        <ContactPanel />
      </div>
    </section>
  );
}
