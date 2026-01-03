import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      brand: {
        orange: "#ff8c00",
        "orange-dark": "#d97706",
        black: "#0b0b0b",
        white: "#ffffff",
        gray: "#f4f4f5",
      },
      gray: {
        300: "#d1d5db",
        600: "#4b5563",
        700: "#374151",
        900: "#111827",
      },
      transparent: "transparent",
    },
    fontFamily: {
      serif: ["Cardo", "serif"],
      display: ["League Spartan", "sans-serif"],
      sans: ["Cardo", "serif"],
    },
  },
} satisfies Config;
