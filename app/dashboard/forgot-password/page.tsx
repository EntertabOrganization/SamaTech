"use client";

import { useState, type FormEvent } from "react";
import { MailCheck } from "lucide-react";
import { AuthBackLink, AuthButton, AuthForm, AuthHeading, AuthShell, AuthStatus, EmailField } from "@/Components/dashboard/auth";


export default function Page() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: add validation + call your reset-password API,
    // then call setSent(true) once the request succeeds.
    setSent(true);
  };

  return (
    <AuthShell
      brandTitle="Locked out? It happens."
      brandDescription="Enter the email you use for the CMS and we will send you a link to choose a new password."
      footer={<AuthBackLink href="/dashboard/login">Back to sign in</AuthBackLink>}
    >
      {sent ? (
        <AuthStatus
          icon={MailCheck}
          title="Check your email"
          description="If an account exists for that address, a reset link is on its way. It may take a minute to arrive."
        >
          <AuthButton variant="secondary" onClick={() => setSent(false)}>
            Use a different email
          </AuthButton>
        </AuthStatus>
      ) : (
        <>
          <AuthHeading
            title="Reset your password"
            description="We will email you a link to set a new one."
          />

          <AuthForm onSubmit={handleSubmit}>
            <EmailField />
            <AuthButton type="submit">Send reset link</AuthButton>
          </AuthForm>
        </>
      )}
    </AuthShell>
  );
}
