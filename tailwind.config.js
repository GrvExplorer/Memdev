/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        Primary: {
          DEFAULT: "#40dd90",
          'red': "#ef3158",
        },
        secondary: "#4262a9",
        "bg": "#ffffff",
        "part": "#d9d9d9",
        "text": '#646466',
        "head": "#4d4d52", 
        "imp": '#000000',

      },
      maxWidth: {
        "10xl": "1440px",
        "9xl": "1280px",
        "8xl": "1024px"
      },
      borderRadius: {
        10: "10px",

      },
    },
  },
  plugins: [],
}

