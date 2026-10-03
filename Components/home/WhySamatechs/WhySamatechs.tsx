// "use client";

// import { useState } from "react";

// /* ---------- Icons ---------- */

// const iconProps = {
//   width: 16,
//   height: 16,
//   viewBox: "0 0 24 24",
//   fill: "none",
//   stroke: "currentColor",
//   strokeWidth: 1.8,
//   strokeLinecap: "round" as const,
//   strokeLinejoin: "round" as const,
//   "aria-hidden": true,
// };

// const SeniorIcon = () => (
//   <svg {...iconProps}>
//     <path d="M6 6l12 12M18 6L6 18" />
//   </svg>
// );
// const ExpertiseIcon = () => (
//   <svg {...iconProps}>
//     <circle cx="6" cy="12" r="2" />
//     <circle cx="18" cy="6" r="2" />
//     <circle cx="18" cy="18" r="2" />
//     <path d="M8 11l8-4M8 13l8 4" />
//   </svg>
// );
// const EvidenceIcon = () => (
//   <svg {...iconProps}>
//     <circle cx="11" cy="11" r="6" />
//     <path d="M20 20l-4.2-4.2" />
//   </svg>
// );
// const DeliveryIcon = () => (
//   <svg {...iconProps}>
//     <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 8.5 4.8 4.8 0 0 0 7 18z" />
//   </svg>
// );
// const GlobalIcon = () => (
//   <svg {...iconProps}>
//     <circle cx="12" cy="12" r="9" />
//     <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
//   </svg>
// );

// const SmallDot = () => <span className="h-1.5 w-1.5 rounded-full bg-current" />;

// /* ---------- Visuals (one per commitment) ---------- */

// const subLabel = "text-[9px] font-medium uppercase tracking-wider text-slate-500";

// /** 1) Senior-led advisory: engagement team */
// function TeamVisual() {
//   const steps = [
//     { title: "Managing partner", subtitle: "Responsible through delivery oversight", tag: "Lead" },
//     { title: "Senior advisor", subtitle: "" },
//     { title: "Analyst", subtitle: "" },
//   ];
//   return (
//     <div>
//       <p className={subLabel}>Engagement team</p>
//       <ol className="mt-4 flex flex-col">
//         {steps.map((s, i) => {
//           const lead = i === 0;
//           return (
//             <li key={s.title} className="flex flex-col">
//               {i > 0 && <span aria-hidden="true" className="ml-8 h-3 w-px bg-slate-300" />}
//               <div
//                 className={`flex items-center gap-3 rounded-2xl px-4 ${
//                   lead
//                     ? "bg-white py-3 shadow-[0px_8px_20px_-8px_#121A2330]"
//                     : "bg-white/50 py-2.5 opacity-70"
//                 }`}
//               >
//                 <span
//                   className={`flex shrink-0 items-center justify-center rounded-lg ${
//                     lead ? "h-8 w-8 bg-[#E3ECF9] text-blue-pulse" : "h-6 w-6 bg-[#E9EEF5] text-slate-400"
//                   }`}
//                 >
//                   {lead ? <SeniorIcon /> : <SmallDot />}
//                 </span>
//                 <span className="min-w-0 flex-1">
//                   <span className={`block text-xs font-semibold ${lead ? "text-[#0F1B2D]" : "text-slate-500"}`}>
//                     {s.title}
//                   </span>
//                   {s.subtitle && (
//                     <span className="mt-0.5 block text-[10px] leading-snug text-slate-400">{s.subtitle}</span>
//                   )}
//                 </span>
//                 {s.tag && <span className="text-[10px] font-medium text-blue-pulse">{s.tag}</span>}
//               </div>
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// }

// /** 2) Integrated expertise: a centered model with disciplines around it */
// function ExpertiseVisual() {
//   const items = [
//     { label: "Enterprise strategy", inset: 28, fade: "opacity-40" },
//     { label: "Analytics & AI", inset: 14, fade: "opacity-60" },
//     { label: "Integrated advisory model", inset: 0, fade: "" },
//     { label: "Risk & governance", inset: 14, fade: "opacity-60" },
//     { label: "Cross-border growth", inset: 28, fade: "opacity-40" },
//   ];
//   return (
//     <ul className="flex flex-col gap-2.5">
//       {items.map((item, i) => {
//         const center = i === 2;
//         return (
//           <li
//             key={item.label}
//             style={{ marginInline: item.inset }}
//             className={`flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs ${item.fade} ${
//               center
//                 ? "bg-white font-semibold text-[#0F1B2D] shadow-[0px_8px_20px_-8px_#121A2330]"
//                 : "bg-white/60 text-slate-500"
//             }`}
//           >
//             <span className={center ? "text-blue-pulse" : "text-slate-400"}>
//               {center ? <ExpertiseIcon /> : <SmallDot />}
//             </span>
//             {item.label}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// /** 3) Evidence-based recommendations: root-cause chart */
// function EvidenceVisual() {
//   const bars = [
//     { label: "A", height: 38 },
//     { label: "B", height: 52 },
//     { label: "C", height: 100, highlight: true },
//     { label: "D", height: 34 },
//     { label: "E", height: 22 },
//   ];
//   return (
//     <div className="rounded-2xl bg-white p-4 shadow-[0px_8px_20px_-10px_#121A2330]">
//       <div className="flex items-center justify-between">
//         <p className="text-xs font-semibold text-[#0F1B2D]">Root-cause contribution</p>
//         <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400">Modeled</span>
//       </div>
//       <div className="mt-4 flex h-24 items-end gap-2" role="img" aria-label="Bar chart: cause C contributes most">
//         {bars.map((b) => (
//           <div key={b.label} className="flex h-full flex-1 flex-col justify-end">
//             <div
//               className="w-full rounded-t-md"
//               style={{
//                 height: `${b.height}%`,
//                 background: b.highlight
//                   ? "linear-gradient(180deg, #3393FF 0%, #0078FF 100%)"
//                   : "#D7E4F7",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="mt-1.5 flex gap-2">
//         {bars.map((b) => (
//           <span key={b.label} className="flex-1 text-center text-[9px] text-slate-400">
//             {b.label}
//           </span>
//         ))}
//       </div>
//       <p className="mt-3 flex items-center gap-2 rounded-lg bg-[#EAF1FB] px-3 py-2 text-[10px] text-slate-600">
//         <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-blue-pulse" />
//         Primary driver isolated, not assumed.
//       </p>
//     </div>
//   );
// }

// /** 4) Implementation-ready design: milestone timeline */
// function DeliveryVisual() {
//   const milestones = [
//     { title: "Operating model defined", subtitle: "Owners, decision rights, cadence", done: true },
//     { title: "Success metrics baselined", subtitle: "Targets agreed with the executive team", done: true },
//     { title: "Delivery oversight in place", subtitle: "Cadence in motion at each gate", done: false },
//   ];
//   return (
//     <ol className="relative flex flex-col gap-3">
//       <span aria-hidden="true" className="absolute bottom-6 left-2.75 top-6 w-px bg-[#C9D8EE]" />
//       {milestones.map((m) => (
//         <li key={m.title} className="relative flex items-center gap-3">
//           <span
//             className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
//               m.done ? "bg-blue-pulse text-white" : "border border-[#C9D8EE] bg-white text-slate-300"
//             }`}
//           >
//             {m.done ? (
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                 <path d="M5 12.5l4.5 4.5L19 7.5" />
//               </svg>
//             ) : (
//               <SmallDot />
//             )}
//           </span>
//           <div className="flex-1 rounded-2xl bg-white px-4 py-3 shadow-[0px_8px_20px_-10px_#121A2330]">
//             <p className="text-xs font-semibold text-[#0F1B2D]">{m.title}</p>
//             <p className="mt-0.5 text-[10px] text-slate-400">{m.subtitle}</p>
//           </div>
//         </li>
//       ))}
//     </ol>
//   );
// }

// /** 5) Global capabilities, local relevance */
// function GlobalVisual() {
//   const checks = ["Regulation", "Stakeholders", "Market norms"];
//   return (
//     <div className="rounded-2xl border border-ink-100 bg-white p-4 shadow-[0px_8px_20px_-10px_#121A2330]">
//       <div className="flex items-center justify-between">
//         <p className="text-xs font-semibold text-[#0F1B2D]">Global practice, locally applied</p>
//         <span className="text-blue-pulse">
//           <GlobalIcon />
//         </span>
//       </div>
//       <ul className="mt-3">
//         {checks.map((c) => (
//           <li
//             key={c}
//             className="flex items-center gap-2.5 border-t border-[#E6ECF4] py-2 text-[11px] text-slate-600 first:border-t-0"
//           >
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0078FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
//               <circle cx="12" cy="12" r="9" />
//               <path d="M8.5 12.5l2.5 2.5 4.5-5" />
//             </svg>
//             {c}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// /* ---------- Data ---------- */

// interface Commitment {
//   id: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   Visual: React.ComponentType;
// }

// const commitments: Commitment[] = [
//   {
//     id: "senior-led",
//     title: "Senior-Led Advisory",
//     description:
//       "Every engagement is led directly by experienced partners who remain involved from problem diagnosis through execution alignment and delivery oversight.",
//     icon: <SeniorIcon />,
//     Visual: TeamVisual,
//   },
//   {
//     id: "integrated",
//     title: "Integrated Expertise",
//     description:
//       "Strategy, risk, technology, and cross-border perspectives work as one team, so recommendations hold up across the whole organization.",
//     icon: <ExpertiseIcon />,
//     Visual: ExpertiseVisual,
//   },
//   {
//     id: "evidence",
//     title: "Evidence-Based Recommendations",
//     description:
//       "Every recommendation is grounded in rigorous analysis and data, with the reasoning shown so leadership can challenge it and decide with confidence.",
//     icon: <EvidenceIcon />,
//     Visual: EvidenceVisual,
//   },
//   {
//     id: "implementation",
//     title: "Implementation-Ready Design",
//     description:
//       "Solutions are designed with delivery in mind, with owners, milestones, and governance defined before the engagement closes.",
//     icon: <DeliveryIcon />,
//     Visual: DeliveryVisual,
//   },
//   {
//     id: "global",
//     title: "Global Capabilities, Local Relevance.",
//     description:
//       "International experience is applied with a clear understanding of regional context, regulation, and stakeholders.",
//     icon: <GlobalIcon />,
//     Visual: GlobalVisual,
//   },
// ];

// const labelClass = "text-[9px] font-medium uppercase tracking-wider text-slate-400";

// /* ---------- Section ---------- */

// export default function WhySamatechs() {
//   const [activeId, setActiveId] = useState<string>(commitments[0].id);
//   const active = commitments.find((c) => c.id === activeId) ?? commitments[0];

//   return (
//     <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//       <div className="mx-auto max-w-5xl">
//         {/* Header */}
//         <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-pulse">
//           <span aria-hidden="true" className="h-px w-8 bg-blue-pulse" />
//           Why Samatechs
//         </p>
//         <h1 className="mt-4 max-w-md font-heading font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
//           Five commitments behind every engagement
//         </h1>

//         {/* Mobile: all five visuals stacked in one card */}
//         <div className="mt-10 space-y-10 rounded-3xl bg-[#F1F5FB] p-5 lg:hidden">
//           {commitments.map((c) => (
//             <div key={c.id}>
//               <p className={`${labelClass} mb-3`}>{c.title}</p>
//               <c.Visual />
//             </div>
//           ))}
//         </div>

//         {/* Desktop: panel + list */}
//         <div className="mt-12 hidden items-start gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
//           <div
//             id="commitment-panel"
//             role="tabpanel"
//             aria-labelledby={`why-tab-${active.id}`}
//             className="flex min-h-85 flex-col rounded-panel bg-ink-50 p-6"
//           >
//             <p className={labelClass}>{active.title}</p>
//             <div className="flex flex-1 items-center pt-4">
//               <div className="w-full">
//                 <active.Visual />
//               </div>
//             </div>
//           </div>

//           <div
//             role="tablist"
//             aria-orientation="vertical"
//             aria-label="Our commitments"
//             className="flex flex-col"
//           >
//             {commitments.map((c) => {
//               const selected = c.id === activeId;
//               return (
//                 <button
//                   key={c.id}
//                   type="button"
//                   role="tab"
//                   id={`why-tab-${c.id}`}
//                   aria-selected={selected}
//                   aria-controls="commitment-panel"
//                   onClick={() => setActiveId(c.id)}
//                   className={`px-4 text-left transition-colors ${
//                     selected
//                       ? "rounded-2xl bg-[#E3ECF9] py-4"
//                       : "border-b border-ink-100 py-3.5 hover:bg-slate-50"
//                   }`}
//                 >
//                   <span className="flex items-center gap-3">
//                     <span className={selected ? "text-blue-pulse" : "text-slate-500"}>{c.icon}</span>
//                     <span
//                       className={`text-sm font-heading font-semibold ${selected ? "text-ink-900" : "text-ink-700"}`}
//                     >
//                       {c.title}
//                     </span>
//                   </span>
//                   {selected && (
//                     <span className="mt-2 block pl-7 text-xs leading-relaxed text-ink-500">
//                       {c.description}
//                     </span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import SectionHeader from "../shared/SectionHeader";
import Showcase from "../shared/Showcase";
import { commitments } from "./commitments";

export default function WhySamatechs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          as="h1"
          eyebrow="Why Samatechs"
          title="Five commitments behind every engagement"
        />

        <Showcase
          items={commitments}
          label="Our commitments"
          variant="soft"
          tabsClassName="mt-12"
        />
      </div>
    </section>
  );
}
