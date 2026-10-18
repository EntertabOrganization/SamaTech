import StatusPill, { type PillTone } from "@/Components/dashboard/shared/StatusPill";

export type UserStatus = "active" | "invited" | "deactivated";

const map: Record<UserStatus, { label: string; tone: PillTone; dot?: boolean }> = {
  active: { label: "Active", tone: "success", dot: true },
  invited: { label: "Invited", tone: "warning", dot: true },
  deactivated: { label: "Deactivated", tone: "neutral" },
};

export default function UserStatusPill({ status }: { status: UserStatus }) {
  const s = map[status];
  return (
    <StatusPill tone={s.tone} dot={s.dot}>
      {s.label}
    </StatusPill>
  );
}
