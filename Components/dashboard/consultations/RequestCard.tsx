import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarIcon, ClockIcon } from "@/Components/dashboard/Layout/icons";
import ActionButton, { actionButtonClass } from "@/Components/dashboard/shared/ActionButton";
import InfoTile from "@/Components/dashboard/shared/InfoTile";
import { CheckIcon, InfoIcon } from "@/Components/dashboard/shared/icons";
import RequestStatusPill, { type RequestStatus } from "./RequestStatus";

export interface RequestCardProps {
  /** Detail page, e.g. `/dashboard/consultations/${id}`. */
  href: string;
  organization: string;
  requesterName: string;
  /** "What would you like to discuss?" from the booking form. */
  topic: string;
  /** Already formatted, e.g. "Sun, 18 Oct · 09:30". */
  slot: string;
  /** Already formatted, e.g. "2h ago". */
  receivedAt: string;
  status: RequestStatus;
  /**
   * Replaces the default second button, so the backend can wrap it in a form
   * or server action: `<form action={confirm}><ActionButton variant="dark" type="submit">…`.
   */
  primaryAction?: ReactNode;
}

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

/** UI-only defaults. Nothing happens on click until the backend wires it. */
const defaultPrimary: Record<RequestStatus, ReactNode> = {
  pending: (
    <ActionButton variant="dark" icon={<CheckIcon />} className="w-full">
      Confirm
    </ActionButton>
  ),
  confirmed: (
    <ActionButton
      variant="dark"
      icon={<CalendarIcon width={14} height={14} />}
      className="w-full"
    >
      Reschedule
    </ActionButton>
  ),
  declined: null,
};

export default function RequestCard({
  href,
  organization,
  requesterName,
  topic,
  slot,
  receivedAt,
  status,
  primaryAction,
}: RequestCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-4 shadow-sm">
      {/* Header: organization + status */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E3ECF9] text-[11px] font-bold text-blue-sovereign"
          >
            {initials(organization)}
          </span>
          <p className="truncate text-sm font-semibold text-ink-900">{organization}</p>
        </div>
        <RequestStatusPill status={status} />
      </div>

      {/* Slot + received */}
      <div className="grid grid-cols-2 gap-2">
        <InfoTile
          icon={<CalendarIcon width={14} height={14} />}
          label="Requested slot"
          value={slot}
        />
        <InfoTile
          icon={<ClockIcon width={14} height={14} />}
          label="Received"
          value={receivedAt}
        />
      </div>

      {/* Requester + topic */}
      <div>
        <h3 className="font-heading text-base font-bold text-ink-900">{requesterName}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-500">{topic}</p>
      </div>

      {/* Actions */}
      <div className="mt-auto grid auto-cols-fr grid-flow-col gap-2">
        <Link href={href} className={actionButtonClass("light", "w-full")}>
          <InfoIcon />
          View details
        </Link>
        {primaryAction ?? defaultPrimary[status]}
      </div>
    </article>
  );
}
