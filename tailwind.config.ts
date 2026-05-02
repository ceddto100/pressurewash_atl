import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e0f4ff",
          100: "#b3e4ff",
          200: "#80d1ff",
          300: "#4dbeff",
          400: "#26b0ff",
          500: "#00A3FF",
          600: "#007ACC",
          700: "#005C99",
          800: "#003D66",
          900: "#002040"
        },
        accent: {
          300: "#FFE680",
          400: "#FFD700",
          500: "#E6C200",
          600: "#CCB000"
        },
        dark: {
          950: "#050810",
          900: "#080C18",
          800: "#0D1526",
          700: "#111E33",
          600: "#1A2A44",
          500: "#243555",
          400: "#2E4066"
        }
      },
      boxShadow: {
        soft: "0 20px 40px -20px rgba(0, 163, 255, 0.4)",
        glow: "0 0 30px rgba(0, 163, 255, 0.3)"
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
