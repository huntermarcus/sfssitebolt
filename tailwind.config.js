/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#c00',
        'primary-blue': '#00008B',
        'light-white': '#f8f8f8',
      },
    },
  },
  plugins: [],
};
