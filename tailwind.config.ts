import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          border: "var(--sidebar-border)",
          muted: "var(--sidebar-muted)",
          accent: "var(--sidebar-accent)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
          dark: "#1d4ed8",
        },
        income: {
          DEFAULT: "#10b981",
          light: "#ecfdf5",
          dark: "#059669",
        },
        expense: {
          DEFAULT: "#f43f5e",
          light: "#fff1f2",
          dark: "#e11d48",
        },
        warning: {
          DEFAULT: "#f59e0b",
          light: "#fffbeb",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
