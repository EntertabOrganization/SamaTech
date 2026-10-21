"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FaqImage from "@/public/figma/faq-image.png";
import PlusIcon from "@/public/figma/plus-16.svg";
import MinusIcon from "@/public/figma/minus-16.svg";
import ArrowIcon from "@/public/figma/arrow-dark-19.svg";

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
    question: "Can you support U.S.–GCC expansion end to end?",
    answer:
      "Yes. We support market-entry strategy, regulatory and commercial readiness, and stakeholder alignment across the U.S. and GCC.",
  },
  {
    question: "How do you handle confidentiality?",
    answer:
      "Every conversation and engagement is treated as confidential, and we agree on confidentiality terms before any sensitive material is shared.",
  },
];

const FAQ_IMAGE_OVERLAY =
  "linear-gradient(158.77deg, rgba(18, 26, 35, 0.9) 0%, rgba(18, 26, 35, 0.78) 46%, rgba(18, 26, 35, 0.95) 100%)";

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
    <div
      className={`overflow-hidden rounded-media border bg-white transition-colors ${
        open ? "border-blue-haze" : "border-ink-100"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-start font-body text-body font-bold leading-[1.25] text-ink-900"
        >
          <Trans>{item.question}</Trans>
          <Image src={open ? MinusIcon : PlusIcon} alt="" width={16} height={16} className="shrink-0 -scale-y-100" />
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
          <p className="max-w-[538.5px] px-6 pb-5.5 text-body-small font-medium leading-[1.65] text-ink-500">
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
    <>
      <section className="bg-ink-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1502px] items-start gap-10 lg:grid-cols-[minmax(0,808fr)_minmax(0,694fr)] lg:gap-0">
          {/* Left: intro + visual */}
          <div className="flex h-full flex-col justify-between gap-10 lg:min-h-[522px]">
            <div className="flex flex-col gap-4.5 sm:px-8">
              <p className="flex items-center gap-3.25 text-eyebrow font-bold uppercase leading-[1.2] tracking-eyebrow text-blue-sovereign">
                <span aria-hidden="true" className="h-px w-10 bg-blue-pulse" />
                <Trans>Common questions</Trans>
              </p>
              <h2 className="font-heading text-3xl font-bold leading-h2 tracking-[-0.01em] text-ink-900 lg:text-h2">
                <Trans>Before you get in touch</Trans>
              </h2>
              <p className="max-w-[460px] text-body-small font-medium leading-[1.65] text-ink-500">
                <Trans>If your question is not here, ask it directly — we answer within one business day.</Trans>
              </p>
            </div>
            <div className="relative aspect-[723/338.77] w-full overflow-hidden rounded-3xl lg:w-[89.5%]">
              <Image
                src={FaqImage}
                alt={translateText("Faq visual")}
                fill
                sizes="(min-width: 1024px) 723px, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ background: FAQ_IMAGE_OVERLAY }} />
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
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
      </section>

      {/* CTA banner */}
      <section className="bg-ink-50 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-294 items-center gap-8 rounded-panel bg-gradient-mark p-8 text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)] sm:p-10 lg:min-h-[430.55px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14 lg:px-16 lg:py-18">
          <div className="flex flex-col gap-5">
            <h2 className="max-w-[717px] font-heading text-3xl font-bold leading-h1 tracking-[-0.01em] sm:text-4xl lg:text-h1">
              <Trans>Complex</Trans>
              <br />
              <Trans>challenges require integrated thinking.</Trans>
            </h2>
            <p className="max-w-[649px] text-base font-medium leading-[1.55] text-white/86 lg:text-lead">
              <Trans>
                Whether you are redefining enterprise strategy, strengthening
                governance, exploring AI-enabled transformation, or entering a new
                market, SAMATECHS can help you move from ambiguity to disciplined
                action.
              </Trans>
            </p>
          </div>

          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-base font-bold tracking-[0.16px] text-ink-900 transition-colors hover:bg-ink-50"
            >
              <Trans>Start a Confidential Conversation</Trans>
              <Image src={ArrowIcon} alt="" width={19} height={19} className="directional-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
