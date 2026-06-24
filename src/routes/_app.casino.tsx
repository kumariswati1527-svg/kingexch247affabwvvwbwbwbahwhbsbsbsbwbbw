import { createFileRoute } from "@tanstack/react-router";
import rouletteImg from "@/assets/roulette.jpg";
import slotsImg from "@/assets/slots.jpg";
import cardsImg from "@/assets/cards.jpg";

const games = [
  { name: "Roulette", img: rouletteImg },
  { name: "Blackjack", img: cardsImg },
  { name: "Slots", img: slotsImg },
  { name: "Baccarat", img: cardsImg },
  { name: "Poker", img: cardsImg },
  { name: "Andar Bahar", img: cardsImg },
];

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
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Casino</h2>
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <div
            key={game.name}
            className="flex flex-col overflow-hidden rounded-xl bg-white/10 shadow"
          >
            <img
              src={game.img}
              alt={game.name}
              width={512}
              height={512}
              loading="lazy"
              className="h-20 w-full object-cover"
            />
            <div className="flex flex-1 items-center justify-center p-3 text-sm font-semibold text-foreground">
              {game.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
