import { createFileRoute } from "@tanstack/react-router";
import homeRef from "@/assets/home-ref.jpg.asset.json";
import homeGames from "@/assets/home-games-white.jpg";
import moreGames from "@/assets/more-games.jpg.asset.json";
import { GameTabs } from "@/components/GameTabs";

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
    <div className="game-gallery-page">
      <img
        src={homeRef.url}
        alt="Home"
        width={640}
        height={1136}
        loading="eager"
        className="game-gallery-image block h-auto w-full"
      />

      <GameTabs
        popular={
          <>
            <img
              src={homeGames}
              alt="Game cards"
              width={1080}
              height={1920}
              loading="lazy"
              className="game-gallery-image block h-auto w-full"
            />

            <img
              src={moreGames.url}
              alt="More games"
              width={1080}
              height={1920}
              loading="lazy"
              className="game-gallery-image block h-auto w-full"
            />
          </>
        }
      />
    </div>
  );
}
