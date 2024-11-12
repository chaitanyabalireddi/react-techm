/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
              fraktur: ['UnifrakturMaguntia', 'serif'],
              sans: ['Roboto', 'sans-serif'], 
            },
    },
  },
  plugins: [],
}

