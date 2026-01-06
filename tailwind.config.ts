import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // KUBER Brand Colors
        primary: {
          DEFAULT: "#2A7AC1",
          600: "#1F66A6",
        },
        secondary: "#559DD1",
        tertiary: "#93BFE1",
        surface: "#ECF1F4",
        background: "#FFFFFF",
        text: {
          DEFAULT: "#0B1B2A",
          muted: "#4B5B6B",
        },
        border: "#D9E2EA",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

