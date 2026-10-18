"use client";

import { useState } from "react";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * POSTs JSON to `endpoint` and tracks the status.
 * Returns true when the request succeeded, so the caller can reset its form.
 */
export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function submit(payload: unknown): Promise<boolean> {
    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
      return res.ok;
    } catch {
      setStatus("error");
      return false;
    }
  }

  return { status, submit };
}
