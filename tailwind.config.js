/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pontano: ["Pontano Sans", "sans-serif"],
        rob: ["Roboto", "sans-serif"],
        slint: ["Stint Ultra Expanded", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      scrollbar: ['rounded', 'dark'],
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
