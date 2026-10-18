import Link from "next/link";
import StatusPill from "@/Components/dashboard/shared/StatusPill";
import UserStatusPill, { type UserStatus } from "./UserStatus";
import { userGrid } from "./UserList";

export interface UserRowProps {
  /** Manage page, e.g. `/dashboard/users/${id}`. */
  href: string;
  name: string;
  email: string;
  /** Role name as the backend defines it, e.g. "Admin". */
  role: string;
  status: UserStatus;
  /** Already formatted, e.g. "2h ago" or "Never". */
  lastActive: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function UserRow({
  href,
  name,
  email,
  role,
  status,
  lastActive,
}: UserRowProps) {
  const inactive = status === "deactivated";

  return (
    <li>
      <Link
        href={href}
        className={`grid gap-3 px-5 py-4 transition-colors hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-pulse md:items-center md:gap-4 ${userGrid}`}
      >
        {/* User */}
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              inactive ? "bg-ink-100 text-ink-500" : "bg-[#E3ECF9] text-blue-sovereign"
            }`}
          >
            {initials(name)}
          </span>
          <div className="min-w-0">
            <p
              className={`truncate text-sm font-semibold ${inactive ? "text-ink-500" : "text-ink-900"}`}
            >
              {name}
            </p>
            <p className="truncate text-xs text-ink-500">{email}</p>
          </div>
        </div>

        {/* Role, status and last active: one row on mobile, three columns from md up */}
        <div className="flex flex-wrap items-center gap-2 md:contents">
          <span>
            <StatusPill tone="neutral">{role}</StatusPill>
          </span>
          <span>
            <UserStatusPill status={status} />
          </span>
          <span className="text-xs font-medium text-ink-500">{lastActive}</span>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hidden h-4 w-4 text-ink-300 md:block"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </Link>
    </li>
  );
}
