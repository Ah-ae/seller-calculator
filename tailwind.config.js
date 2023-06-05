/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    tahiti: {
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },

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
