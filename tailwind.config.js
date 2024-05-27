/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        BgLive: "url('/BgLiveStream.png')",
      },
      fontFamily: {
        head: "var(--inter-font)",
        body: "var(--noto-sans-font)",
      },
      colors: {
        "primary-color": "#A62020",
        "secondary-color": "#D5D5D5",
      },
    },
  },
  plugins: [],
};
