import ActionButton from "@/Components/dashboard/shared/ActionButton";
import SettingsCard from "@/Components/dashboard/shared/SettingsCard";
import { CheckIcon } from "@/Components/dashboard/shared/icons";

const field =
  "h-10 w-full rounded-xl border border-ink-100 bg-white px-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-blue-pulse focus:outline-none focus:ring-2 focus:ring-blue-pulse/20";

export default function InviteUserCard() {
  return (
    <SettingsCard
      title="Invite a user"
      description="Add a person who can sign in to the dashboard."
    >
      {/* TODO(backend): add action={inviteUser} to this form */}
      <form className="space-y-4 px-5 pb-5 pt-4">
        <label className="block">
          <span className="mb-1.5 block text-[11px] font-semibold text-ink-900">
            Email <span aria-hidden="true" className="text-blue-pulse">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="name@organization.com"
            className={field}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[11px] font-semibold text-ink-900">Role</span>
          {/* TODO(backend): replace these two options with the real roles */}
          <select name="role" defaultValue="editor" className={field}>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </label>

        <ActionButton type="submit" variant="dark" icon={<CheckIcon />} className="w-full">
          Send invite
        </ActionButton>
      </form>
    </SettingsCard>
  );
}
