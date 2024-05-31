const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
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
      boxShadow: {
        column:
          "-5px -5px 20px 4px rgba(0,0,0,0.2), 10px 10px 30px 4px rgba(0,0,0,0.2)",
        row: "25px 25px 10px -8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
