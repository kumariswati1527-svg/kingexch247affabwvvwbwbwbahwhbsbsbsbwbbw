import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/home")({
  head: () => ({
    meta: [
      { title: "Home — King" },
      { name: "description", content: "King gaming home." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = ["Cricket", "Football", "Roulette", "Slots"];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-lg">
        <h2 className="text-xl font-bold text-foreground">Welcome to King</h2>
        <p className="mt-1 text-sm text-foreground/70">
          Pick a game and start playing.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/80">
          Featured
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {featured.map((game) => (
            <div
              key={game}
              className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-foreground shadow"
            >
              {game}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
