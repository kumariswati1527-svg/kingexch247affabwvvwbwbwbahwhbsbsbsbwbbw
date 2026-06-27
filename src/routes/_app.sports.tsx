import { createFileRoute } from "@tanstack/react-router";
import sportsPageImg from "@/assets/sports-page.jpg.asset.json";

export const Route = createFileRoute("/_app/sports")({
  head: () => ({
    meta: [
      { title: "Sports — King" },
      { name: "description", content: "Sports on King." },
    ],
  }),
  component: SportsPage,
});

function SportsPage() {
  return (
    <div className="-mx-4 -my-6 flex flex-col">
      <img
        src={sportsPageImg.url}
        alt="Sports page"
        width={1080}
        height={1920}
        loading="eager"
        className="block h-auto w-full"
      />
    </div>
  );
}
