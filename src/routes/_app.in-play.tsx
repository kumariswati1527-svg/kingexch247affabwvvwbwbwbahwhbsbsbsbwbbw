import { createFileRoute } from "@tanstack/react-router";
import inPlayImg from "@/assets/in-play.jpg.asset.json";
import homeGames from "@/assets/home-games-latest.jpg.asset.json";
import moreGames from "@/assets/more-games.jpg.asset.json";

export const Route = createFileRoute("/_app/in-play")({
  head: () => ({
    meta: [
      { title: "In-Play — King" },
      { name: "description", content: "Live in-play events on King." },
    ],
  }),
  component: InPlayPage,
});

function InPlayPage() {
  return (
    <div className="-mx-4 -my-6 flex flex-col">
      <img
        src={inPlayImg.url}
        alt="In-Play events"
        width={1080}
        height={1920}
        loading="eager"
        className="block h-auto w-full"
      />

      <img
        src={homeGames.url}
        alt="Game cards"
        width={1080}
        height={1920}
        loading="lazy"
        className="block h-auto w-full"
      />

      <img
        src={moreGames.url}
        alt="More games"
        width={1080}
        height={1920}
        loading="lazy"
        className="block h-auto w-full"
      />
    </div>
  );
}

