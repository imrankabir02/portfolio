/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Rajdhani = condensed 80s body; Orbitron = arcade display; Share Tech Mono = CRT terminal.
        sans: ["Rajdhani", "Inter", "ui-sans-serif", "sans-serif"],
        display: ["Orbitron", "Rajdhani", "sans-serif"],
        mono: ["Share Tech Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // token names kept from before; values remapped to a synthwave palette.
        void: {
          900: "#0d0221",
          800: "#150633",
          700: "#1e0a45",
          600: "#2a0f5c",
        },
        iris: {
          cyan: "#05d9e8", // neon cyan
          blue: "#2de2e6", // aqua
          violet: "#b967ff", // electric purple
          pink: "#ff2e97", // hot magenta
        },
        signal: "#39ff14", // neon green
        sunset: {
          hi: "#fff200",
          mid: "#ff9e00",
          lo: "#ff2e97",
        },
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseRing: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        gridScroll: { to: { backgroundPositionY: "40px" } },
        flicker: {
          "0%,19%,21%,23%,25%,54%,56%,100%": { opacity: "1" },
          "20%,24%,55%": { opacity: "0.55" },
        },
        sunPulse: {
          "0%,100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.18)" },
        },
        scan: { to: { transform: "translateY(6px)" } },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        "spin-slow": "spinSlow 26s linear infinite",
        "spin-slower": "spinSlow 44s linear infinite reverse",
        shimmer: "shimmer 6s linear infinite",
        pulseRing: "pulseRing 2.4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        marquee: "marquee 32s linear infinite",
        "grid-scroll": "gridScroll 1.4s linear infinite",
        flicker: "flicker 4s infinite",
        "sun-pulse": "sunPulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
