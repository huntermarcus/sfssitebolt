/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#B80000',
        'primary-blue': '#00008B',
        'secondary-red': '#E53E3E',
        'secondary-blue': '#4299E1',
        'accent-gold': '#FFD700',
        'neutral-dark': '#1A202C',
        'neutral-light': '#F7FAFC',
        'neutral-gray': '#A0AEC0',
      },
    },
  },
  plugins: [],
};
