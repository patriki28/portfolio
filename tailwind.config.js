/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,vue}", "./components/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
