/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "azure-web": "#E9F8F9ff",
        "ghost-white": "#E4E7EFff",
        "raisin-black": "#2C2E37ff",
        white: "#FCFDFDff",
        timberwolf: "#D2D1D2ff",
        "azure-web-2": "#E4F5F6ff",
        "battleship-gray": "#8E8580ff",
        seasalt: "#F7F8F8ff",
        verdigris: "#35AEAAff",
        "white-2": "#FEFEFEff",
      },
    },
  },
  plugins: [],
};
