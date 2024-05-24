const { Noto_Sans_Thai, Inter } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontFamily: {
        Noto_Sans_Thai,
        Inter,
      },
      colors: {
        "primary-color": "#A62020",
        "secondary-color": "#D5D5D5",
      },
    },
  },
  plugins: [],
};
