import { useEffect, useState } from "react";
import JollyRoger from "./JollyRoger";

const LINES = [
  "raising the anchor ····· ok",
  "hoisting the sails ▓▓▓▓▓▓ 100%",
  "log pose locked on the next island",
  "set sail.",
];

/* One-shot "leaving port" boot screen. */
const Boot = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => Math.min(v + 1, LINES.length)), 320);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sea-950 animate-[bootOut_0.5s_ease-in_1.25s_forwards]">
      <div className="relative flex items-center justify-center w-28 h-28 mb-8">
        <span className="absolute inset-0 border-2 rounded-full border-gold/40 animate-spin-slow shadow-[0_0_22px_rgba(244,196,48,0.5)]" />
        <span className="absolute border border-dashed rounded-full inset-2 border-gold/25 animate-spin-slower" />
        <JollyRoger size={58} className="text-gold animate-sway" />
      </div>

      <div className="w-[min(90vw,380px)] font-mono text-sm text-parch-light/85 space-y-2">
        {LINES.map((l, idx) => (
          <div
            key={l}
            className={`flex gap-2 transition-opacity duration-300 ${
              idx < i ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-gold">&gt;</span>
            <span className={idx === LINES.length - 1 ? "text-gold" : ""}>
              {l}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 font-pirate text-lg tracking-[0.35em] uppercase text-pirate-red animate-blink">
        Weigh Anchor
      </p>
    </div>
  );
};

export default Boot;
