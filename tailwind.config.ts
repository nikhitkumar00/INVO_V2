import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        quartinary: "var(--quartinary-color)",
        navbar: "var(--navbar-color)",
        background: "var(--background-color)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
