import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "big-stone": {
          "50": "#f4f7fb",
          "100": "#e8eef6",
          "200": "#cbddec",
          "300": "#9dc0dc",
          "400": "#699ec7",
          "500": "#4582b2",
          "600": "#346895",
          "700": "#2b5379",
          "800": "#274765",
          "900": "#253d55",
          "950": "#1d2f43",
        },
        bunting: {
          "50": "#eef6ff",
          "100": "#d9eaff",
          "200": "#bbdcff",
          "300": "#8cc6ff",
          "400": "#56a6ff",
          "500": "#2f82ff",
          "600": "#1861f8",
          "700": "#114be4",
          "800": "#143db9",
          "900": "#173991",
          "950": "#11204f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
