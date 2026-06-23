import { createFileRoute } from "@tanstack/react-router";

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
  const sports = [
    "Cricket",
    "Football",
    "Tennis",
    "Basketball",
    "Horse Racing",
    "Esports",
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">All Sports</h2>
      <div className="grid gap-3">
        {sports.map((sport) => (
          <div
            key={sport}
            className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-4 text-sm font-semibold text-foreground shadow"
          >
            {sport}
            <span className="text-foreground/50">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
