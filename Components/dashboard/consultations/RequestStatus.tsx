import { CheckIcon, CloseIcon } from "@/Components/dashboard/shared/icons";

export type RequestStatus = "pending" | "confirmed" | "declined";

const styles: Record<RequestStatus, { label: string; box: string }> = {
  pending: { label: "Pending", box: "border-[#F5D9A6] bg-[#FFF4E0] text-[#A15C00]" },
  confirmed: { label: "Confirmed", box: "border-[#BFE5CF] bg-[#E6F6EE] text-[#1B7F4B]" },
  declined: { label: "Declined", box: "border-[#F5C2C0] bg-[#FDECEC] text-[#B42318]" },
};

export default function RequestStatusPill({ status }: { status: RequestStatus }) {
  const s = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none ${s.box}`}
    >
      {status === "pending" && (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      )}
      {status === "confirmed" && <CheckIcon width={11} height={11} />}
      {status === "declined" && <CloseIcon width={11} height={11} />}
      {s.label}
    </span>
  );
}
