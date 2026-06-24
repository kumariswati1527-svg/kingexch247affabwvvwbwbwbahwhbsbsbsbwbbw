import { createFileRoute } from "@tanstack/react-router";
import cricketImg from "@/assets/cricket.jpg";
import footballImg from "@/assets/football.jpg";
import tennisImg from "@/assets/tennis.jpg";

const matchImg: Record<string, string> = {
  Cricket: cricketImg,
  Football: footballImg,
  Tennis: tennisImg,
};

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
  const matches = [
    { id: 1, teams: "India vs Australia", sport: "Cricket" },
    { id: 2, teams: "Real Madrid vs Barcelona", sport: "Football" },
    { id: 3, teams: "Nadal vs Djokovic", sport: "Tennis" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Live Now</h2>
      {matches.map((m) => (
        <div
          key={m.id}
          className="flex items-center gap-3 rounded-xl bg-white/10 p-3 shadow"
        >
          <img
            src={matchImg[m.sport]}
            alt={m.sport}
            width={512}
            height={512}
            loading="lazy"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground">{m.teams}</div>
            <div className="mt-0.5 text-xs text-foreground/70">{m.sport}</div>
          </div>
          <span className="rounded-full bg-red-500/20 px-2 py-1 text-[10px] font-bold text-red-300">
            LIVE
          </span>
        </div>
      ))}
    </div>
  );
}
