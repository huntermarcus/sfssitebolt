/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',
        'secondary': '#F5A623',
        'background': '#FFFFFF',
        'text-primary': '#333333',
        'text-secondary': '#555555',
        'border': '#DDDDDD',
      },
    },
  },
  plugins: [],
};
