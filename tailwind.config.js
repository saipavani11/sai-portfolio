/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {
    fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pixel: ["'Press Start 2P'", "cursive"],
      },
  } },
  plugins: [],
};
