import ActionButton from "@/Components/dashboard/shared/ActionButton";
import SettingsCard from "@/Components/dashboard/shared/SettingsCard";
import { CheckIcon } from "@/Components/dashboard/shared/icons";

const field =
  "h-10 w-full rounded-xl border border-ink-100 bg-white px-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-blue-pulse focus:outline-none focus:ring-2 focus:ring-blue-pulse/20";

const label = "mb-1.5 block text-[11px] font-semibold text-ink-900";

/**
 * POST /users  →  { name, email, password }
 * There is no invite email and no role: the user can sign in right away
 * with the password set here.
 */
export default function CreateUserCard() {
  return (
    <SettingsCard
      title="Create a user"
      description="Add a person who can sign in to the dashboard right away."
    >
      {/* TODO(backend): add action={createUser} (POST /users) to this form */}
      <form className="space-y-4 px-5 pb-5 pt-4">
        <label className="block">
          <span className={label}>
            Name <span aria-hidden="true" className="text-blue-pulse">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            placeholder="Full name"
            className={field}
          />
        </label>

        <label className="block">
          <span className={label}>
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
          <span className={label}>
            Password <span aria-hidden="true" className="text-blue-pulse">*</span>
          </span>
          <input
            type="password"
            name="password"
            required
            autoComplete="new-password"
            placeholder="Choose a password"
            className={field}
          />
          <span className="mt-1.5 block text-xs text-ink-500">
            Share it with the person yourself. They will sign in with it.
          </span>
        </label>

        <ActionButton type="submit" variant="dark" icon={<CheckIcon />} className="w-full">
          Create user
        </ActionButton>
      </form>
    </SettingsCard>
  );
}
