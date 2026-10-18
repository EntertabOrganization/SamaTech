"use client";

import { useState } from "react";
import { ApiError } from "@/lib/api";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** English source text of the error to show; translated by `FormStatus`. */
export function errorMessageFor(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 409) return "That time is no longer available. Please choose another.";
    if (error.status === 429) return "Too many attempts. Please wait a few minutes and try again.";
    if (error.status === 400) return "Please check your details and try again.";
  }
  return "Something went wrong. Please try again, or email us directly.";
}

/**
 * Runs `action` and tracks its status.
 * Returns true when it succeeded, so the caller can reset its form.
 */
export function useFormSubmit<T>(action: (payload: T) => Promise<unknown>) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<unknown>(null);

  async function submit(payload: T): Promise<boolean> {
    setStatus("submitting");
    setError(null);
    try {
      await action(payload);
      setStatus("success");
      return true;
    } catch (err) {
      setError(err);
      setStatus("error");
      return false;
    }
  }

  return { status, error, errorMessage: errorMessageFor(error), submit };
}
