import { createFileRoute } from "@tanstack/react-router";
import cricketImg from "@/assets/cricket.jpg";
import footballImg from "@/assets/football.jpg";
import rouletteImg from "@/assets/roulette.jpg";
import slotsImg from "@/assets/slots.jpg";

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
  const featured = [
    { label: "Cricket", img: cricketImg },
    { label: "Football", img: footballImg },
    { label: "Roulette", img: rouletteImg },
    { label: "Slots", img: slotsImg },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-lg">
        <h2 className="text-xl font-bold text-foreground">Welcome to King</h2>
        <p className="mt-1 text-sm text-foreground/70">
          Pick a game and start playing.
        </p>
      </section>

      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/80">
          Featured
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {featured.map(({ label, img }) => (
            <div
              key={label}
              className="flex flex-col overflow-hidden rounded-xl bg-white/10 shadow"
            >
              <img
                src={img}
                alt={label}
                width={512}
                height={512}
                loading="lazy"
                className="h-20 w-full object-cover"
              />
              <div className="flex flex-1 items-center justify-center p-3 text-sm font-semibold text-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
