import StatusTabs from "@/Components/dashboard/shared/StatusTabs";
import type { MessageStatus } from "./StatusBadge";

export type MessageFilter = "all" | MessageStatus;

const tabs: Array<{ id: MessageFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "read", label: "Read" },
  { id: "replied", label: "Replied" },
];

interface MessageFiltersProps {
  /** Which tab looks selected. The page decides it from the URL. */
  activeStatus?: MessageFilter;
  /** Current search text, to keep it in the box after submitting. */
  query?: string;
  /** Optional chips on the tabs. Leave out until the backend provides them. */
  counts?: Partial<Record<MessageFilter, number>>;
}

/**
 * Filtering is just `?status=new&q=text` in the URL (links + a GET form),
 * so there is no state and no client JS. The backend reads the params on the server.
 */
export default function MessageFilters({
  activeStatus = "all",
  query,
  counts,
}: MessageFiltersProps) {
  return (
    <form
      method="get"
      role="search"
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      {activeStatus !== "all" && (
        <input type="hidden" name="status" value={activeStatus} />
      )}

      <StatusTabs
        label="Filter by status"
        active={activeStatus}
        tabs={tabs.map((t) => ({ ...t, count: counts?.[t.id] }))}
      />

      <label className="relative block w-full sm:w-72">
        <span className="sr-only">Search messages</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="M20 20l-4.2-4.2" />
        </svg>
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search by name, email or message"
          className="h-10 w-full rounded-full border border-ink-100 bg-white pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-300 focus:border-blue-pulse focus:outline-none focus:ring-2 focus:ring-blue-pulse/20"
        />
      </label>
    </form>
  );
}
