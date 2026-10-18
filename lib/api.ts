/**
 * Client for the SamaTechs backend (SamaTechBackend). The browser calls it
 * directly, so the backend sees each visitor's own IP for its rate limits.
 * Set NEXT_PUBLIC_API_URL to the backend's origin, e.g. https://api.samatechs.com.
 */
const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/+$/, "");

const TIMEOUT_MS = 15_000;

/** A failed request. `status` is 0 when the backend could not be reached. */
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_URL}/api${path}`, {
      ...init,
      headers: { Accept: "application/json", ...(init?.body ? { "Content-Type": "application/json" } : {}) },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    throw new ApiError(0, "The server could not be reached");
  }

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiError(response.status, body?.error ?? `Request failed with status ${response.status}`);
  }
  return body as T;
}

/* ---------- Contact ---------- */

export interface ContactMessageInput {
  name: string;
  email: string;
  organization?: string;
  jobTitle?: string;
  /** Area of interest. */
  service?: string;
  message: string;
}

export function sendContactMessage(input: ContactMessageInput) {
  return request<{ id: string }>("/contact", { method: "POST", body: JSON.stringify(input) });
}

/* ---------- Consultations ---------- */

/** One weekday's bookable times; dayOfWeek follows `Date.getDay()` (0 = Sunday). */
export interface DayAvailability {
  dayOfWeek: number;
  timeSlots: string[];
}

export async function getWeeklyAvailability(): Promise<DayAvailability[]> {
  return (await request<{ data: DayAvailability[] }>("/availability")).data;
}

/** Times already taken on `date` (YYYY-MM-DD). */
export async function getBookedTimes(date: string): Promise<string[]> {
  return (await request<{ data: string[] }>(`/consultations/booked?date=${encodeURIComponent(date)}`)).data;
}

export interface ConsultationInput {
  name: string;
  email: string;
  company?: string;
  notes?: string;
  /** YYYY-MM-DD */
  date: string;
  /** One of the day's `timeSlots`. */
  time: string;
}

export function bookConsultation(input: ConsultationInput) {
  return request<{ id: string; meetLink: string }>("/consultations", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
