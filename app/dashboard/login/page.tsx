"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { AuthBackLink, AuthButton, AuthForm, AuthHeading, AuthShell, EmailField, PasswordField } from "@/Components/dashboard/auth";


export default function Page() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: add validation + sign in logic
  };

  return (
    <AuthShell
      brandTitle="Manage your website content in one place."
      brandDescription="Reply to consultation requests, answer contact messages, and update your pages without touching code."
      footer={
        <AuthBackLink href="/" showArrow={false}>
          Back to website
        </AuthBackLink>
      }
    >
      <AuthHeading
        title="Sign in"
        description="Use your admin account to open the dashboard."
      />

      <AuthForm onSubmit={handleSubmit}>
        <EmailField />

        <PasswordField
          id="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          labelAddon={
            <Link
              href="/dashboard/forgot-password"
              className="rounded text-sm font-medium text-blue-600 outline-none transition hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              Forgot password?
            </Link>
          }
        />

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500/30"
          />
          Keep me signed in
        </label>

        <AuthButton type="submit">Sign in</AuthButton>
      </AuthForm>
    </AuthShell>
  );
}

