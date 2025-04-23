import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jaka': ['Roboto', 'sans-serif'],
        'sans': ['Roboto', ...fontFamily.sans], 
      },
      colors: {
        'primary': '#3B82F6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};