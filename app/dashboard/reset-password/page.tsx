"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import {
  AuthBackLink,
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthShell,
  AuthStatus,
  PasswordField,
  authButtonStyles,
} from "@/Components/auth";

export default function Page() {
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: read the reset token (e.g. from searchParams), add validation,
    // call your API, then call setDone(true) once it succeeds.
    setDone(true);
  };

  return (
    <AuthShell
      brandTitle="Pick a new password and get back to work."
      brandDescription="Choose something you have not used on other sites. You will use it the next time you sign in."
      footer={
        !done && (
          <AuthBackLink href="/dashboard/login">Back to sign in</AuthBackLink>
        )
      }
    >
      {done ? (
        <AuthStatus
          icon={CheckCircle2}
          tone="success"
          title="Password updated"
          description="Your password has been changed. Sign in with the new one to open the dashboard."
        >
          <Link
            href="/dashboard/login"
            className={`flex items-center justify-center ${authButtonStyles()}`}
          >
            Go to sign in
          </Link>
        </AuthStatus>
      ) : (
        <>
          <AuthHeading
            title="Set a new password"
            description="Enter it twice to make sure it is right."
          />

          <AuthForm onSubmit={handleSubmit}>
            <PasswordField
              id="password"
              name="password"
              label="New password"
              placeholder="Enter a new password"
              autoComplete="new-password"
            />
            <PasswordField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm password"
              placeholder="Enter it again"
              autoComplete="new-password"
            />
            <AuthButton type="submit">Update password</AuthButton>
          </AuthForm>
        </>
      )}
    </AuthShell>
  );
}

