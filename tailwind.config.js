/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    colors: {
      a: "#FFF67E",
      b: "#BFEA7C",
      c: "#9BCF53",
      d: "#416D19",
      white: "#FFFFFF",
      red: "#DC3545",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
