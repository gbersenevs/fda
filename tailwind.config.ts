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
        // FDA SERVICE Brand Colors - Light design with turquoise accents
        primary: {
          DEFAULT: "#00C9A7", // Main turquoise accent
          50: "#E6FBF7",
          100: "#B3F3E7",
          200: "#80EBD7",
          300: "#4DE3C7",
          400: "#1ADBB7",
          500: "#00C9A7", // Main
          600: "#00A186",
          700: "#007965",
          800: "#005144",
          900: "#002923",
        },
        secondary: "#26D6BB", // Lighter turquoise
        tertiary: "#F1F5F9", // Light grey for backgrounds
        surface: "#F8FAFC", // Very light grey
        background: "#FFFFFF",
        text: {
          DEFAULT: "#1E293B", // Dark slate for main text
          muted: "#64748B", // Medium grey for secondary text
          light: "#94A3B8", // Light grey
        },
        border: "#E2E8F0", // Light grey border
        accent: {
          turquoise: "#00C9A7",
          light: "#26D6BB",
          pale: "#E6FBF7",
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
        'hero-pattern': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)',
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
