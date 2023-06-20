/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      keyframes: {
        loading: {
          from: { transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg)' },
          to: { transform: ' translate(var(--tw-translate-x), var(--tw-translate-y))rotate(360deg)' },
        },
        width: {
          from: { width: 0 },
          to: { width: '100%' }
        }
      },
      colors: {
        'yellow': '#faff00'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
