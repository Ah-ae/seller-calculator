/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
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
      dark: {
        blue: {
          100: "#8b97c6", // text color
          200: "#1e202a", // bg
          300: "#1f212e",
          400: "#252a41",
        },
      },
      toggle: {
        dark: { left: "#3eda82", right: "#378fe6" },
      },
    },
    extend: {},
  },
  plugins: [],
};
