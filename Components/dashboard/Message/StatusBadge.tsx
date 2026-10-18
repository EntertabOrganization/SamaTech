export type MessageStatus = "new" | "read" | "replied";

const styles: Record<MessageStatus, { label: string; box: string; dot?: string }> = {
  new: {
    label: "New",
    box: "border-[#C9D8EE] bg-[#E3ECF9] text-[#005BC2]",
    dot: "bg-blue-pulse",
  },
  read: {
    label: "Read",
    box: "border-ink-100 bg-white text-ink-500",
  },
  replied: {
    label: "Replied",
    box: "border-[#BFE5CF] bg-[#E6F6EE] text-[#1B7F4B]",
  },
};

export default function StatusBadge({ status }: { status: MessageStatus }) {
  const s = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none ${s.box}`}
    >
      {s.dot && (
        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      )}
      {s.label}
    </span>
  );
}
