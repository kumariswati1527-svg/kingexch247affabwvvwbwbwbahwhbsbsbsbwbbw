import { createFileRoute } from "@tanstack/react-router";
import inPlayImg from "@/assets/in-play-cropped.jpg";
import homeGames from "@/assets/home-games-white.jpg";
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
    <div className="game-gallery-page">
      <img
        src={inPlayImg}
        alt="In-Play events"
        width={1152}
        height={1220}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="game-gallery-image block h-auto w-full"
      />

      <img
        src={homeGames}
        alt="Game cards"
        width={1536}
        height={2752}
        loading="eager"
        decoding="async"
        className="game-gallery-image block h-auto w-full"
      />

      <img
        src={moreGames.url}
        alt="More games"
        width={1152}
        height={1614}
        loading="eager"
        decoding="async"
        className="game-gallery-image block h-auto w-full"
      />
    </div>
  );
}
