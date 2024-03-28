/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#1d1d20',
        'cinza': {
          100: '#f1f1f1',
          200: '#e3e3e3',
          300: '#d9d9d9',
          400: '#2b2a33',
          500: '#777777',
        }
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

