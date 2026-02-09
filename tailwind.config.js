/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e74c3c',
          dark: '#c0392b',
        },
        secondary: {
          DEFAULT: '#2c3e50',
          dark: '#1a252f',
        },
      },
      fontFamily: {
        sans: ['Bahij TheSansArabic', 'sans-serif'],
        bahij: ['Bahij TheSansArabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
