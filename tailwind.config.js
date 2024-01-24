/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      backgroundImage: {
        hero: "./src/assets/images/herobg.png",
      },
    },
  },
  plugins: [],
};
