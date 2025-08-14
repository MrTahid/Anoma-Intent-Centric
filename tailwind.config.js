/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        neon: "#39FF14",
        darkblue: "#0B1020"
      }
    },
  },
  plugins: [],
};
