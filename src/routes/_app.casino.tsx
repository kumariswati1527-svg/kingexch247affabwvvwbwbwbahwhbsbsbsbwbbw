import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/casino")({
  head: () => ({
    meta: [
      { title: "Casino — King" },
      { name: "description", content: "Casino games on King." },
    ],
  }),
  component: CasinoPage,
});

function CasinoPage() {
  const games = [
    "Roulette",
    "Blackjack",
    "Slots",
    "Baccarat",
    "Poker",
    "Andar Bahar",
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Casino</h2>
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <div
            key={game}
            className="flex aspect-square items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-foreground shadow"
          >
            {game}
          </div>
        ))}
      </div>
    </div>
  );
}
