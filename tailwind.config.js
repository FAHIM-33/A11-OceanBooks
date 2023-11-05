
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        low: 'rgb(var(--color-low) / <alpha-value>)',
        mid: 'rgb(var(--color-mid) / <alpha-value>)',
        high: 'rgb(var(--color-high) / <alpha-value>)',
        crim: 'rgb(var(--color-crim) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        // high: '#111',
        // mid : '#222',
        // low : '#333',
        fadegray : '#8f8f8f2d'
      },
    },
  },
  plugins: [],
}