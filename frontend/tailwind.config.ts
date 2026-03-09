import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0f172a",
        panel: "#111827",
        border: "#1e293b",

        primary: "#06b6d4",
        secondary: "#3b82f6",

        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",

        muted: "#94a3b8",
      },
    },
  },
  plugins: [],
};

export default config;