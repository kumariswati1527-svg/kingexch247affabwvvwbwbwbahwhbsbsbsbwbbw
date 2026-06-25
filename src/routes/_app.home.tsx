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
import pokerImg from "@/assets/game-poker.jpg";
import dtlImg from "@/assets/game-dtl.jpg";
import dayDragonTigerImg from "@/assets/game-1day-dragon-tiger.jpg";

const games = [
  { name: "VIMAAN", img: vimaanImg },
  { name: "20-20 TEENPATTI", img: teenpatti2020Img },
  { name: "LUCKY 7", img: lucky7Img },
  { name: "1 DAY TEENPATTI", img: teenpatti1dayImg },
  { name: "JOKER TEENPATTI", img: jokerTeenpattiImg },
  { name: "DRAGON TIGER", img: dragonTigerImg },
  { name: "BACCARAT", img: baccaratImg },
  { name: "ANDAR BAHAR", img: andarBaharImg },
  { name: "32 CARDS", img: cards32Img },
  { name: "POKER", img: pokerImg },
  { name: "DTL", img: dtlImg },
  { name: "1 DAY DRAGON TIGER", img: dayDragonTigerImg },
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
                <span className="block text-center text-xs font-bold italic leading-tight text-foreground drop-shadow">
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


