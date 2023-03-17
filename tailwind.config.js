/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      red: {
        ...colors.red,
        500: "#F65261",
      },
    },
    extend: {},
  },
  plugins: [],
};
