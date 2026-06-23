import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Wallet, History, Settings, LogOut } from "lucide-react";

export const Route = createFileRoute("/_app/account")({
  head: () => ({
    meta: [
      { title: "Account — King" },
      { name: "description", content: "Your King account." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 shadow">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gradient-button)] text-foreground shadow">
          <User className="h-7 w-7" />
        </div>
        <div>
          <div className="text-lg font-bold text-foreground">Demo Player</div>
          <div className="text-xs text-foreground/70">@demo_king</div>
        </div>
      </div>

      <div className="grid gap-3">
        <MenuRow icon={<Wallet className="h-5 w-5" />} label="Wallet" />
        <MenuRow icon={<History className="h-5 w-5" />} label="History" />
        <MenuRow icon={<Settings className="h-5 w-5" />} label="Settings" />
      </div>

      <Link
        to="/"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-button)] py-4 text-sm font-bold text-foreground shadow-[var(--shadow-button)] transition active:scale-[0.98]"
      >
        <LogOut className="h-5 w-5" />
        Logout
      </Link>
    </div>
  );
}

function MenuRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-foreground shadow">
      {icon}
      <span className="flex-1">{label}</span>
      <span className="text-foreground/50">›</span>
    </div>
  );
}
