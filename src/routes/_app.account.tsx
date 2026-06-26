import { createFileRoute, Link } from "@tanstack/react-router";
import { User, ChevronRight, LogOut } from "lucide-react";

export const Route = createFileRoute("/_app/account")({
  head: () => ({
    meta: [
      { title: "Account — King" },
      { name: "description", content: "Your King account." },
    ],
  }),
  component: AccountPage,
});

const menuItems = [
  "My Profile",
  "Multi Markets",
  "Rolling Commission",
  "Account Statement",
  "Bets History",
  "Profit & Loss",
  "Password History",
  "Activity Log",
];

function AccountPage() {
  return (
    <div className="space-y-4">
      {/* Exchange user bar */}
      <div className="flex items-center gap-2 rounded-md bg-[#1e3a4d] px-4 py-2.5 text-sm font-medium text-white">
        <User className="h-5 w-5" />
        <span>exchange</span>
      </div>

      {/* Menu list */}
      <div className="overflow-hidden rounded-lg bg-white">
        {menuItems.map((label, index) => (
          <div
            key={label}
            className={`flex items-center justify-between px-4 py-3.5 ${
              index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-sm font-semibold text-blue-600">{label}</span>
            <div className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600">
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Logout button */}
      <Link
        to="/"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#d32f2f] py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow transition active:scale-[0.98]"
      >
        Logout
        <LogOut className="h-4 w-4" />
      </Link>
    </div>
  );
}
