import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { Home, Timer, Trophy, UserCircle } from "lucide-react";
import type { ReactNode } from "react";
import kingLogo from "../assets/king-logo.png.asset.json";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const usesGameGallery = pathname === "/home" || pathname === "/in-play";

  return (
    <div className={`flex min-h-screen flex-col ${usesGameGallery ? "game-gallery-shell" : ""}`}>
      <header className={`sticky top-0 z-20 ${usesGameGallery ? "game-gallery-header" : ""}`}>
        <div
          className={`mx-auto flex h-16 w-full items-center justify-center px-4 md:justify-between ${
            usesGameGallery ? "md:max-w-[640px] md:px-0" : "md:max-w-5xl md:px-8"
          }`}
        >
          <Link to="/home" aria-label="King home">
            <img
              src={kingLogo.url}
              alt="King"
              className="h-10 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] md:h-12"
            />
          </Link>

          {/* Desktop top navigation (hidden on mobile) */}
          <nav className="hidden items-center gap-2 md:flex">
            <TopNavLink to="/home" label="Home" icon={<Home className="h-5 w-5" />} />
            <TopNavLink to="/in-play" label="In-Play" icon={<Timer className="h-5 w-5" />} />
            <TopNavLink to="/sports" label="Sports" icon={<Trophy className="h-5 w-5" />} />
            <TopNavLink to="/casino" label="Casino" icon={<CasinoChipIcon className="h-5 w-5" />} />
            <TopNavLink to="/account" label="Account" icon={<UserCircle className="h-5 w-5" />} />
          </nav>
        </div>
      </header>

      <main className={`flex-1 pb-28 md:mx-auto md:w-full md:pb-10 ${usesGameGallery ? "game-gallery-main" : "px-4 py-6 md:max-w-5xl md:px-8"}`}>
        <Outlet />
      </main>

      {/* Mobile bottom navigation (hidden on desktop) */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-foreground/10 bg-[var(--nav-surface)] backdrop-blur-md md:hidden">
        <div className="mx-auto grid h-20 max-w-md grid-cols-5 items-center px-2">
          <NavLink to="/home" label="Home" icon={<Home className="h-6 w-6" />} />
          <NavLink to="/in-play" label="In-Play" icon={<Timer className="h-6 w-6" />} />
          <NavLink to="/sports" label="Sports" icon={<Trophy className="h-6 w-6" />} />
          <NavLink to="/casino" label="Casino" icon={<CasinoChipIcon className="h-6 w-6" />} />
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

function TopNavLink({
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
      className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-xs font-semibold transition ${
        active
          ? "bg-foreground/15 text-foreground"
          : "text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function CasinoChipIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
