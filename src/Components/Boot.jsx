import { useEffect, useState } from "react";

const LINES = [
  "loading kabir//os · 1987",
  "reading tape ▓▓▓▓▓▓▓▓ 100%",
  "sys check ····· ok",
  "ready.",
];

/* One-shot arcade-style boot screen. */
const Boot = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => Math.min(v + 1, LINES.length)), 320);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void-900 animate-[bootOut_0.5s_ease-in_1.25s_forwards]">
      <div className="relative flex items-center justify-center w-24 h-24 mb-8">
        <span className="absolute inset-0 border-2 rounded-full border-iris-pink/50 animate-spin-slow shadow-[0_0_20px_#ff2e97]" />
        <span className="absolute border-2 rounded-full inset-3 border-iris-cyan/50 animate-spin-slower shadow-[0_0_16px_#05d9e8]" />
        <span className="font-display text-xl font-black chrome-text">MK</span>
      </div>
      <div className="w-[min(90vw,360px)] font-mono text-sm text-cyan-300/80 space-y-2">
        {LINES.map((l, idx) => (
          <div
            key={l}
            className={`flex gap-2 transition-opacity duration-300 ${
              idx < i ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="neon-pink">&gt;</span>
            <span className={idx === LINES.length - 1 ? "neon-cyan" : ""}>
              {l}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-8 font-display text-xs tracking-[0.4em] uppercase text-iris-pink animate-blink">
        Insert Coin
      </p>
    </div>
  );
};

export default Boot;
