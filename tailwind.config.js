/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monster: ["Montserrat", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        pop: ["Poppins", "cursive"],
        pango: ["Pangolin", "cursive"],
        robo: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
