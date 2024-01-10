/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Taviraj"],
      heading: ["Poppins"],
    },
    colors: {
      'yellow': '#DAA520',
      'red': '#FF6666',
      'white': '#FFFFFF',
    },
    animation: {
      marquee: 'marquee 8s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(100%)' },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}