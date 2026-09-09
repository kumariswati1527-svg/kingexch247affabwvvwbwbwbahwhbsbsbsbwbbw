import { useState, type ReactNode } from "react";
import universeLive1 from "@/assets/universe-live-1.jpg.asset.json";
import universeLive2 from "@/assets/universe-live-2.jpg.asset.json";
import universeOriginal from "@/assets/universe-original.jpg.asset.json";


type TabId = "popular" | "universe-live" | "universe-original";

const TABS: { id: TabId; label: string }[] = [
  { id: "popular", label: "Popular" },
  { id: "universe-live", label: "Universe Live" },
  { id: "universe-original", label: "Universe Original" },
];

export function GameTabs({ popular }: { popular: ReactNode }) {
  const [active, setActive] = useState<TabId>("popular");

  return (
    <div>
      <div
        className="flex items-center justify-around gap-1 px-2 py-3"
        style={{ background: "#0e5c3f" }}
        role="tablist"
        aria-label="Game categories"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`whitespace-nowrap px-2 pb-1 text-sm font-bold text-white transition sm:text-base ${
              active === tab.id
                ? "border-b-[3px] border-white"
                : "border-b-[3px] border-transparent text-white/85 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "universe-original" ? (
        <div>
          <img
            src={universeOriginal.url}
            alt="Universe Original games — Vimaan, Balloon, Heads & Tails, Dream Catcher, Lucky 0 to 9"
            width={576}
            height={526}
            loading="lazy"
            className="game-gallery-image block h-auto w-full"
          />
        </div>
      ) : active === "universe-live" ? (
        <div>
          <img
            src={universeLive1.url}
            alt="Universe Live games — 20-20 Teenpatti, Lucky 7, 1 Day Teenpatti, Joker Teenpatti, Dragon Tiger, Baccarat, Andar Bahar, 32 Cards, Poker"
            width={576}
            height={773}
            loading="lazy"
            className="game-gallery-image block h-auto w-full"
          />
          <img
            src={universeLive2.url}
            alt="More Universe Live games — DTL, 1 Day Dragon Tiger, Muflis Teenpatti, Card Race, Amar Akbar Anthony, Dragon Tiger"
            width={576}
            height={511}
            loading="lazy"
            className="game-gallery-image block h-auto w-full"
          />
        </div>
      ) : (
        popular
      )}
    </div>
  );
}
