import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { User, Eye, EyeOff, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "King — Login" },
      { name: "description", content: "Login to King gaming." },
      { property: "og:title", content: "King — Login" },
      { property: "og:description", content: "Login to King gaming." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (username.trim()) {
      void navigate({ to: "/home" });
    }
  };

  const handleDemoLogin = () => {
    void navigate({ to: "/home" });
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center px-6 pt-6 pb-12">
      <button
        type="button"
        aria-label="Close"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-foreground shadow-[var(--shadow-close)] backdrop-blur-sm transition active:scale-95"
      >
        <X className="h-6 w-6" strokeWidth={3} />
      </button>

      <div className="mt-32 mb-14 select-none text-center">
        <h1
          className="text-8xl leading-none tracking-normal drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
          style={{
            fontFamily: "var(--font-display)",
            backgroundImage: "linear-gradient(180deg, #facc15 0%, #f59e0b 50%, #b45309 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          King
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-5"
      >
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="h-14 w-full rounded-lg bg-white px-5 pr-14 text-base text-neutral-800 placeholder:text-neutral-400 shadow-[var(--shadow-input)] outline-none focus:ring-2 focus:ring-[var(--gold)]"
          />
          <User className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-800" />
          {touched && !username.trim() && (
            <p className="mt-1.5 text-sm text-white/90">Please enter username.</p>
          )}
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-14 w-full rounded-lg bg-white px-5 pr-14 text-base text-neutral-800 placeholder:text-neutral-400 shadow-[var(--shadow-input)] outline-none focus:ring-2 focus:ring-[var(--gold)]"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-neutral-800"
          >
            {showPassword ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 h-14 w-full rounded-xl bg-[var(--gradient-button)] text-lg font-bold tracking-wide text-foreground shadow-[var(--shadow-button)] transition hover:bg-[var(--gradient-button-hover)] active:scale-[0.98]"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleDemoLogin}
          className="h-14 w-full rounded-xl bg-[var(--gradient-button)] text-lg font-bold tracking-wide text-foreground shadow-[var(--shadow-button)] opacity-95 transition hover:opacity-100 active:scale-[0.98]"
        >
          Login with Demo ID
        </button>
      </form>
    </main>
  );
}
