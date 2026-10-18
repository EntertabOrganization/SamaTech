import PageHeader from "@/Components/dashboard/Layout/PageHeader";
import StatusTabs from "@/Components/dashboard/shared/StatusTabs";
import InviteUserCard from "@/Components/dashboard/users/InviteUserCard";
import UserList from "@/Components/dashboard/users/UserList";
import UserRow from "@/Components/dashboard/users/UserRow";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Users"
        description="People who can sign in to this dashboard."
      />

      <div className="grid items-start gap-4 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-4">
          {/* TODO(backend): active from ?status=, and add count to each tab */}
          <StatusTabs
            label="Filter by status"
            active="all"
            tabs={[
              { id: "all", label: "All users" },
              { id: "active", label: "Active" },
              { id: "invited", label: "Invited" },
              { id: "deactivated", label: "Deactivated" },
            ]}
          />

          <UserList>
            {/* TODO(backend): replace these two placeholder rows with users.map(...) */}
            <UserRow
              href="#"
              name="User name"
              email="name@organization.com"
              role="Role"
              status="active"
              lastActive="Last active"
            />
            <UserRow
              href="#"
              name="User name"
              email="name@organization.com"
              role="Role"
              status="invited"
              lastActive="Never"
            />
          </UserList>
        </div>

        <InviteUserCard />
      </div>
    </div>
  );
}
