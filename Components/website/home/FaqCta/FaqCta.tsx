"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionImg from '@/public/images/Group 2.png'
import Button from "../../ui/Button";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does an engagement usually begin?",
    answer:
      "With a short, confidential conversation about the decision in front of you. If the problem is well suited to our model, we propose a scoped diagnostic before any larger commitment.",
  },
  {
    question: "Do you deliver strategy only, or implementation as well?",
    answer:
      "Both. We design solutions to be implementation-ready, and we stay involved through delivery oversight so that decisions turn into results.",
  },
  {
    question: "Who leads the work day to day?",
    answer:
      "Experienced partners lead every engagement directly, supported by senior advisors and analysts who work as one team with yours.",
  },
  {
    question: "What does senior-led mean for a smaller organization?",
    answer:
      "You get the same senior attention as a larger client, with scope and team size matched to the decision you need to make.",
  },
  {
    question: "Can you support U.S.-GCC expansion end to end?",
    answer:
      "Yes. We support market-entry strategy, regulatory and commercial readiness, and stakeholder alignment across the U.S. and GCC.",
  },
  {
    question: "How do you handle confidentiality?",
    answer:
      "Every conversation and engagement is treated as confidential, and we agree on confidentiality terms before any sensitive material is shared.",
  },
];

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  const uid = useId();
  const panelId = `faq-panel-${uid}`;
  const buttonId = `faq-button-${uid}`;

  return (
    <div className="rounded-lg border border-ink-100 bg-white shadow-sm">
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-start text-body font-bold text-ink-900"
        >
          <Trans>{item.question}</Trans>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0078FF"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M5 12h14" />
            {/* vertical stroke fades out when open, turning + into − */}
            <path
              d="M12 5v14"
              className={`origin-center transition-all duration-200 ${
                open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
              }`}
              style={{ transformBox: "fill-box" }}
            />
          </svg>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-body-small font-medium leading-relaxed text-ink-500">
            <Trans>{item.answer}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqCta() {
  const { t: translateText } = useLanguage();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-ink-50 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: intro + visual */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col px-8 gap-[18px]">
                <p className="flex items-center gap-3 text-eyebrow font-bold uppercase tracking-wider text-blue-sovereign">
                  <span aria-hidden="true" className="h-px w-8 bg-blue-sovereign" /><Trans>
                  Common questions
                </Trans></p>
                <h2 className="mt-4 text-3xl font-heading font-bold tracking-tight text-ink-900"><Trans>
                  Before you get in touch
                </Trans></h2>
                <p className="mt-3 max-w-105 font-medium text-body-small leading-relaxed text-ink-500"><Trans>
                  If your question is not here, ask it directly, we answer within
                  one business day.
                </Trans></p>
            </div>
            <Image src={SectionImg} alt={translateText("Faq visual")} loading="eager" className="h-auto max-w-full" />
          </div>

          {/* Right: accordion */}
          <div className="space-y-5">
            {faqs.map((item, i) => (
              <FaqRow
                key={item.question}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div
          className="mx-auto mt-20 grid max-w-294 items-center gap-8 rounded-panel p-8 text-white shadow-[0px_24px_50px_-24px_#0078FF99] sm:p-10 md:grid-cols-[1.5fr_1fr]"
          style={{
            background:
              "linear-gradient(138.71deg, #3393FF 4.61%, #0078FF 56.57%, #005BC2 99.56%)",
          }}
        >
          <div>
            <h2 className="max-w-sm text-h1 font-heading font-bold leading-tight tracking-tight sm:text-4xl"><Trans>
              Complex
              </Trans><br/><Trans>
               challenges require integrated thinking.
            </Trans></h2>
            <p className="mt-5 max-w-149 text-lead font-medium leading-relaxed text-white/86"><Trans>
              Whether you are redefining enterprise strategy, strengthening
              governance, exploring AI-enabled transformation, or entering a new
              market, SAMATECHS can help you move from ambiguity to disciplined
              action.
            </Trans></p>
          </div>

          <div className="md:justify-self-center">
            <Link
              href="/contact"
            >
              <Button variant="inverse" size="md"><Trans>Start a Confidential Conversation
              </Trans><span aria-hidden="true" className="ml-1.5">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
