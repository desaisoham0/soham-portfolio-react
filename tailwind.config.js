/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dinrounded: ['DINRounded', 'sans-serif'],
      },
      
        }
  },
  plugins: [],
}