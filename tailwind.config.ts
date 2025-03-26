import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react")
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        B_Mitra: ['var(--font-B_Mitra)'],
        B_Narm: ['var(--font-B_Narm)'],
        B_Nazanin: ['var(--font-B_Nazanin)'],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [heroui()],
};
export default config;
