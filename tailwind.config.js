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
      gray: {
        ...colors.gray,
        400: "#555555",
        500: "#424242",
        600: "#232323",
      },
    },
    extend: {},
  },
  plugins: [],
};
