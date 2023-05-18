import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
      letterSpacing: {
        widest: ".25em",
      },
      boxShadow: {
        "3xl": "0 0px 20px 0px hsl(150, 100%, 66%)",
      },
      maxWidth: {
        "1/2": "450px",
      },
    },
  },
  plugins: [],
} satisfies Config;
/** @type {import('tailwindcss').Config} */
