import { createFileRoute } from "@tanstack/react-router";
import homeRef from "@/assets/home-ref.jpg.asset.json";
import vimaanImg from "@/assets/vimaan.jpg";
import teenpatti2020Img from "@/assets/teenpatti-2020.jpg";
import lucky7Img from "@/assets/lucky7.jpg";
import teenpatti1dayImg from "@/assets/teenpatti-1day.jpg";
import jokerTeenpattiImg from "@/assets/joker-teenpatti.jpg";
import dragonTigerImg from "@/assets/dragon-tiger.jpg";
import baccaratImg from "@/assets/baccarat.jpg";
import andarBaharImg from "@/assets/andar-bahar.jpg";
import cards32Img from "@/assets/32cards.jpg";

const games = [
  { name: "Vimaan", img: vimaanImg },
  { name: "20-20 Teenpatti", img: teenpatti2020Img },
  { name: "Lucky 7", img: lucky7Img },
  { name: "1 Day Teenpatti", img: teenpatti1dayImg },
  { name: "Joker Teenpatti", img: jokerTeenpattiImg },
  { name: "Dragon Tiger", img: dragonTigerImg },
  { name: "Baccarat", img: baccaratImg },
  { name: "Andar Bahar", img: andarBaharImg },
  { name: "32 Cards", img: cards32Img },
];

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
  return (
    <div className="-mx-4 -my-6 flex flex-col">
      <img
        src={homeRef.url}
        alt="Home"
        width={640}
        height={1136}
        loading="eager"
        className="block h-auto w-full"
      />

      <section className="px-4 py-6">
        <h2 className="mb-4 text-lg font-bold text-foreground">Popular Games</h2>
        <div className="grid grid-cols-3 gap-3">
          {games.map((game) => (
            <div
              key={game.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={game.img}
                alt={game.name}
                width={640}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <span className="block text-center text-xs font-bold leading-tight text-foreground drop-shadow">
                  {game.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
