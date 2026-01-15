/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assests/images/hero.jpg')",
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
