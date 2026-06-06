import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef8ef",
          100: "#d9efdc",
          200: "#b4dfbb",
          300: "#84c791",
          400: "#55aa67",
          500: "#318b49",
          600: "#246f39",
          700: "#1f5931",
          800: "#1a4729",
          900: "#143a22"
        },
        soil: {
          100: "#f2e4cf",
          300: "#c79f6c",
          500: "#8a5a2b",
          700: "#5f3a1c"
        },
        seed: {
          100: "#fff1c4",
          300: "#f4c35a",
          500: "#c4861f"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(20, 58, 34, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
