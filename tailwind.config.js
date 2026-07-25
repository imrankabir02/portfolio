/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Cabin = clean readable body; Cinzel = epic roman-caps display;
        // Pirata One = pirate flair (logo, hero name); Special Elite = wanted-poster typewriter.
        sans: ["Cabin", "Inter", "ui-sans-serif", "sans-serif"],
        display: ["Cinzel", "Georgia", "serif"],
        pirate: ['"Pirata One"', "Cinzel", "cursive"],
        mono: ['"Special Elite"', "ui-monospace", "monospace"],
      },
      colors: {
        // Grand Line palette: deep sea, treasure gold, pirate red, aged parchment.
        sea: {
          950: "#04121f",
          900: "#071d30",
          800: "#0a2740",
          700: "#0e3557",
          600: "#14507f",
          500: "#1b6ba3",
          400: "#3a90c4",
        },
        gold: {
          light: "#ffe08a",
          DEFAULT: "#f4c430",
          deep: "#d99a1c",
          dark: "#a9761a",
        },
        pirate: {
          red: "#c1272d",
          deep: "#8f1d22",
          dark: "#5e1216",
        },
        parch: {
          light: "#f8eed4",
          DEFAULT: "#f0ddb4",
          dark: "#e0c48c",
          ink: "#3a2817",
          soft: "#6b4f34",
        },
        sunset: {
          hi: "#ffd27a",
          mid: "#ff9e5e",
          lo: "#ff6b4a",
        },
        // legacy alias kept so stray references don't break
        signal: "#3ddc84",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        sway: {
          "0%,100%": { transform: "rotate(-1.4deg)" },
          "50%": { transform: "rotate(1.4deg)" },
        },
        flag: {
          "0%,100%": { transform: "skewY(0deg) scaleX(1)" },
          "50%": { transform: "skewY(-2.5deg) scaleX(0.98)" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseRing: {
          "0%,100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        wave: { to: { transform: "translateX(-50%)" } },
        stampIn: {
          "0%": { opacity: "0", transform: "rotate(-18deg) scale(2.4)" },
          "60%": { opacity: "1", transform: "rotate(-11deg) scale(0.92)" },
          "100%": { opacity: "0.9", transform: "rotate(-11deg) scale(1)" },
        },
        sunPulse: {
          "0%,100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.12)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        bob: "bob 6s ease-in-out infinite",
        sway: "sway 5s ease-in-out infinite",
        flag: "flag 3.4s ease-in-out infinite",
        "spin-slow": "spinSlow 26s linear infinite",
        "spin-slower": "spinSlow 60s linear infinite reverse",
        shimmer: "shimmer 6s linear infinite",
        pulseRing: "pulseRing 2.4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        marquee: "marquee 32s linear infinite",
        wave: "wave 12s linear infinite",
        "wave-slow": "wave 20s linear infinite",
        stamp: "stampIn 0.5s cubic-bezier(0.2,0.8,0.2,1) forwards",
        "sun-pulse": "sunPulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
