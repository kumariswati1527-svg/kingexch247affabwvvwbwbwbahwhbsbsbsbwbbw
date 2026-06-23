import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { Home, Timer, Trophy, UserCircle } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-center px-4">
        <h1
          className="bg-[var(--gradient-gold)] bg-clip-text text-3xl tracking-wide text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          King
        </h1>
      </header>

      <main className="flex-1 px-4 py-6 pb-28">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-foreground/10 bg-[var(--nav-surface)] backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-md grid-cols-5 items-center px-2">
          <NavLink to="/home" label="Home" icon={<Home className="h-6 w-6" />} />
          <NavLink to="/in-play" label="In-Play" icon={<Timer className="h-6 w-6" />} />
          <NavLink to="/sports" label="Sports" icon={<Trophy className="h-6 w-6" />} />
          <NavLink to="/casino" label="Casino" icon={<CasinoChipIcon />} />
          <NavLink to="/account" label="Account" icon={<UserCircle className="h-6 w-6" />} />
        </div>
      </nav>
    </div>
  );
}

function NavLink({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-medium transition ${
        active
          ? "bg-foreground/15 text-foreground"
          : "text-foreground/60 hover:text-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function CasinoChipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
