/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      grayscale: {
        0 : '0%',
        20 : '20%',
        50 : '50%',
        80 : '80%',
        100 : '100%',
      }
    },
  },
  plugins: [],
}