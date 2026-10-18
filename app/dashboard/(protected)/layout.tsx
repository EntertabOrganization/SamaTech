import CmsShell from "@/Components/dashboard/Layout/CmsShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CmsShell user={{ name: "Admin User", role: "Admin" }}>{children}</CmsShell>;
}