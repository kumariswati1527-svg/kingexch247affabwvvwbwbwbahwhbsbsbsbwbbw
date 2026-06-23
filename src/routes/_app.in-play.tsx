import { createFileRoute } from "@tanstack/react-router";

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
          className="flex items-center justify-between rounded-xl bg-white/10 p-4 shadow"
        >
          <div>
            <div className="text-sm font-semibold text-foreground">{m.teams}</div>
            <div className="mt-1 text-xs text-foreground/70">{m.sport}</div>
          </div>
          <span className="rounded-full bg-red-500/20 px-2 py-1 text-[10px] font-bold text-red-300">
            LIVE
          </span>
        </div>
      ))}
    </div>
  );
}
