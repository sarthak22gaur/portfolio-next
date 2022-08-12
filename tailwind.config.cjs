/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'hsl(178, 100%, 50%)',
        'primary-light': 'hsla(0, 0%, 35%, 0.39)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
