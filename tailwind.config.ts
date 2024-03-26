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
        navBackground: "var(--nav-background-color)",
        navPrimary: "var(--nav-primary-color)",
        navSecondary: "var(--nav-secondary-color)",
        tableOdd: "var(--table-odd)",
        tableHover: "var(--table-hover)",
        dashOdd: "var(--dash-odd)",
        dashEven: "var(--dash-even)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
