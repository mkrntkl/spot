/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "blue-main": "#0ea5e9",
        "blue-dark": "#0284c7",
        "blue-light": "#e0f2fe",
        "red-error": "#b91c1c",
        "pink-main": "#e57373",
        "pink-light": "#ffa4a2",
        "pink-dark": "#af4448",
      },
      transitionProperty: {
        maxHeight: "max-height",
        height: "height",
      },
    },
  },
  plugins: [],
};
