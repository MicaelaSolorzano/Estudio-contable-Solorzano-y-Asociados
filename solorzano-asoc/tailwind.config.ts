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
        chambray: {
          "50": "#f2f5fc",
          "100": "#e2eaf7",
          "200": "#cbdaf2",
          "300": "#a7c2e9",
          "400": "#7da3dd",
          "500": "#5f84d2",
          "600": "#4b6ac5",
          "700": "#4158b4",
          "800": "#3a4a94",
          "900": "#334075",
          "950": "#232948",
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
