export type CmsIconKey =
  | "dashboard"
  | "content"
  | "consultations"
  | "availability"
  | "messages"
  | "users";

export interface CmsNavItem {
  label: string;
  href: string;
  icon: CmsIconKey;
}

export interface CmsNavGroup {
  label: string;
  items: CmsNavItem[];
}

/** One entry per page in the "02 — CMS Dashboard" task list. */
export const cmsNav: CmsNavGroup[] = [
  {
    label: "Overview",
    items: [{ label: "Dashboard", href: "/dashboard", icon: "dashboard" }],
  },
  {
    label: "Inbox",
    items: [
      { label: "Consultation requests", href: "/dashboard/consultations", icon: "consultations" },
      { label: "Contact messages", href: "/dashboard/messages", icon: "messages" },
    ],
  },
  {
    label: "Website",
    items: [{ label: "Content", href: "/dashboard/content", icon: "content" }],
  },
  {
    label: "Settings",
    items: [
      { label: "Availability", href: "/dashboard/availability", icon: "availability" },
      { label: "Users", href: "/dashboard/users", icon: "users" },
    ],
  },
];
