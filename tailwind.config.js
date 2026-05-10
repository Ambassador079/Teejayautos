/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2E9',
        'cream-2': '#EDE7D9',
        gold: '#C8A84B',
        'gold-light': '#E2C97E',
        'gold-dark': '#A5821F',
        ink: '#0C0C0C',
        'ink-2': '#181818',
        stone: '#6B6354',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      height: { screen: '100dvh' },
    },
  },
  plugins: [],
}
