"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import type { FormEvent } from "react";
import {
  Checkbox,
  Field,
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

  const { status, submit } = useFormSubmit("/api/contact");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const ok = await submit(Object.fromEntries(new FormData(form).entries()));
    if (ok) form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="font-semibold text-lead text-ink-900"><Trans>
        Tell us about your objectives
      </Trans></h2>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name" required>
          <TextInput name="name" required autoComplete="name" placeholder={translateText("Full name")} />
        </Field>
        <Field label="Organization">
          <TextInput name="organization" autoComplete="organization" placeholder={translateText("Organization")} />
        </Field>
        <Field label="Job title">
          <TextInput name="jobTitle" autoComplete="organization-title" placeholder={translateText("Job title")} />
        </Field>
        <Field label="Email" required>
          <TextInput
            name="email"
            type="email"
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
          rows={5}
          required
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
      />

      <p className="text-[10px] text-slate-400"><Trans>Fields marked * are required.</Trans></p>
    </form>
  );
}
