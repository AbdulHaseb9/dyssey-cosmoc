/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/herobg.png')",
        'background-two': "url('./src/assets/images/background2.png')",
      },
    },
  },
  plugins: [],
};
