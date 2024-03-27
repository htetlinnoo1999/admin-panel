/** @type {import('tailwindcss').Config} */
import THEMES from "daisyui/src/theming/themes"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...THEMES["light"],
          primary: '#333C4D',
          secondary: "teal",
        },
      },
      "dark",
      {
        synthwave: {
          ...THEMES["synthwave"],
          primary: '#FFFFFF'
        }
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
