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
        // FDA SERVICE Brand Colors - Light theme with grey and blue accents
        primary: {
          DEFAULT: "#4B8BBE", // Professional blue
          50: "#EFF6FB",
          100: "#D9EAF5",
          200: "#B3D5EB",
          300: "#8DC0E1",
          400: "#67ABD7",
          500: "#4B8BBE",
          600: "#3A6F98",
          700: "#2A5372",
          800: "#1A374C",
          900: "#0A1B26",
        },
        secondary: "#6B7B8A", // Grey-blue
        tertiary: "#94A3B8", // Lighter grey
        surface: "#F8FAFC", // Very light grey
        background: "#FFFFFF",
        text: {
          DEFAULT: "#1E293B", // Dark slate
          muted: "#64748B", // Medium grey
          light: "#94A3B8", // Light grey
        },
        border: "#E2E8F0", // Light border
        accent: {
          blue: "#4B8BBE",
          grey: "#64748B",
          light: "#F1F5F9",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FB 50%, #F1F5F9 100%)',
        'section-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
