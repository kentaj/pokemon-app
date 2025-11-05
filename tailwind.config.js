// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fef8',
          100: '#dafbee',
          200: '#b6f5dd',
          300: '#8df0c9',
          400: '#64eab5',
          500: '#3de29f',
          600: '#32c78a',
          700: '#27aa70',
          800: '#1d8c57',
          900: '#125b35',
        },
        alert: {
          50: '#fff6f0',
        }
      }
    }
  },
  plugins: [],
}