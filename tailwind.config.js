/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#B80000',
        'primary-blue': '#00008B',
        'secondary-red': '#FF5733',
        'secondary-blue': '#4169E1',
        'light-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
