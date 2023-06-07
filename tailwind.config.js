/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      gray: {
        100: "#F1F3F6",
        200: "#CACFD9",
        300: "#A1A9B4",
        400: "#788290",
        500: "#3D4755",
        600: "#272E3A",
      },
      blue: {
        100: "#E3F0FF",
        200: "#90C2FF",
        300: "#377CFB",
      },
    },
    extend: {},
  },
  plugins: [],
};
