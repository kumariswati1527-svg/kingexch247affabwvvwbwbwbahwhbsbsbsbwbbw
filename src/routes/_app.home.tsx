import { createFileRoute } from "@tanstack/react-router";
import homeRef from "@/assets/home-ref.jpg.asset.json";
import homeGames from "@/assets/home-games.png.asset.json";

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

      <img
        src={homeGames.url}
        alt="Game cards"
        width={1080}
        height={1920}
        loading="lazy"
        className="block h-auto w-full"
      />
    </div>
  );
}
