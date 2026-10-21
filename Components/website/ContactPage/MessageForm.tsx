"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import type { FormEvent } from "react";
import { sendContactMessage } from "@/lib/api";
import {
  Checkbox,
  Field,
  FormNote,
  FormStatus,
  MailIcon,
  SelectInput,
  SubmitButton,
  TextArea,
  TextInput,
} from "./fields";
import { useFormSubmit } from "./useFormSubmit";

const AREAS = [
  "Enterprise Strategy & Performance",
  "Risk, Governance & Decision Intelligence",
  "Digital Transformation & Cross-Border Growth",
  "Not sure yet",
];

export default function MessageForm() {
  const { t: translateText } = useLanguage();

  const { status, errorMessage, submit } = useFormSubmit(sendContactMessage);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (field: string) => String(data.get(field) ?? "").trim();

    const ok = await submit({
      name: text("name"),
      email: text("email"),
      organization: text("organization") || undefined,
      jobTitle: text("jobTitle") || undefined,
      service: text("area") || undefined,
      message: text("message"),
    });
    if (ok) form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4.5">
      <h2 className="pb-1 font-heading text-h4 font-semibold leading-h4 tracking-[-0.01em] text-ink-900">
        <Trans>Tell us about your objectives</Trans>
      </h2>

      <div className="grid gap-x-4 gap-y-3.75 sm:grid-cols-2">
        <Field label="Name" required>
          <TextInput name="name" required maxLength={200} autoComplete="name" placeholder={translateText("Full name")} />
        </Field>
        <Field label="Organization">
          <TextInput name="organization" maxLength={200} autoComplete="organization" placeholder={translateText("Organization")} />
        </Field>
        <Field label="Job title">
          <TextInput name="jobTitle" maxLength={200} autoComplete="organization-title" placeholder={translateText("Job title")} />
        </Field>
        <Field label="Email" required>
          <TextInput
            name="email"
            type="email"
            maxLength={254}
            required
            autoComplete="email"
            placeholder={translateText("name@organization.com")}
            icon={<MailIcon />}
          />
        </Field>
      </div>

      <Field label="Area of interest">
        <SelectInput name="area" placeholder={translateText("Select an area")} options={AREAS} />
      </Field>

      <Field label="Message" required>
        <TextArea
          name="message"
          maxLength={5000}
          required
          className="h-[158px]"
          placeholder={translateText("What are you trying to decide, and by when?")}
        />
      </Field>

      <Checkbox
        name="privacy"
        required
        label="I agree to the privacy policy"
        hint="We use your details only to respond to this enquiry."
      />

      <SubmitButton loading={status === "submitting"}><Trans>Send message</Trans></SubmitButton>

      <FormStatus
        status={status}
        successMessage="Thank you. We will reply within one business day."
        errorMessage={errorMessage}
      />

      <FormNote>Fields marked Name, Email and Message are required.</FormNote>
    </form>
  );
}
