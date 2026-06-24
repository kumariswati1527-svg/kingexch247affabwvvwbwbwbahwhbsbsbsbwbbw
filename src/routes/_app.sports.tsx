import { createFileRoute } from "@tanstack/react-router";
import cricketImg from "@/assets/cricket.jpg";
import footballImg from "@/assets/football.jpg";
import tennisImg from "@/assets/tennis.jpg";
import basketballImg from "@/assets/basketball.jpg";
import horseImg from "@/assets/horse.jpg";
import esportsImg from "@/assets/esports.jpg";

const sportList = [
  { name: "Cricket", img: cricketImg },
  { name: "Football", img: footballImg },
  { name: "Tennis", img: tennisImg },
  { name: "Basketball", img: basketballImg },
  { name: "Horse Racing", img: horseImg },
  { name: "Esports", img: esportsImg },
];

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
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">All Sports</h2>
      <div className="grid gap-3">
        {sportList.map((sport) => (
          <div
            key={sport.name}
            className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-foreground shadow"
          >
            <img
              src={sport.img}
              alt={sport.name}
              width={512}
              height={512}
              loading="lazy"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="flex-1">{sport.name}</span>
            <span className="text-foreground/50">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
