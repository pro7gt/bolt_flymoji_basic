/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6B46C1',
        'secondary-blue': '#4F46E5',
      },
      fontFamily: {
        'main': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
