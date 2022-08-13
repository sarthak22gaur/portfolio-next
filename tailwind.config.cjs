/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#6C63ff',
        'primary-light': 'hsla(0, 0%, 35%, 0.39)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
