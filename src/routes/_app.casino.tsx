import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import casinoLobby from "@/assets/casino-lobby.jpg.asset.json";

export const Route = createFileRoute("/_app/casino")({
  head: () => ({
    meta: [
      { title: "Casino — King" },
      { name: "description", content: "Casino lobby on King." },
    ],
  }),
  component: CasinoPage,
});

function CasinoPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-40 flex flex-col justify-end bg-black/70">
      <button
        onClick={() => navigate({ to: "/home" })}
        className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full text-red-500"
        aria-label="Close casino"
      >
        <X className="h-8 w-8" strokeWidth={3} />
      </button>

      <div className="flex h-[50vh] w-full flex-col justify-end overflow-hidden rounded-t-2xl bg-black">
        <img
          src={casinoLobby.url}
          alt="Casino lobby"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

