/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: 'var(--font)',
      colors: {
        blue: 'var(--pastel-blue)',
        aqua: 'var(--pastel-aqua)',
        red: 'var(--pastel-red)',
        purple: 'var(--pastel-purple)',
        green: 'var(--pastel-green)',
        yellow: 'var(--pastel-yellow)',
        black: 'var(--black)',
        slate: 'var(--slate)',
        'dark-slate': 'var(--dark-slate)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
};
