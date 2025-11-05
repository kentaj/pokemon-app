/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e5fff5',
          100: '#a3ffda',
          200: '#a3ffda',
          300: '#75ffc8',
          400: '#47ffb6',
          500: '#1affa3',
          600: '#7bffa3',
          650: '#00e88c',
          700: '#00ad68',
          800: '#007546',
          900: '#003822',
          950: '#001f12',
        },
        alert: {
          50: '#fff6f0',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bounceFast: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        bounceFast: 'bounceFast 0.8s infinite',
      },
    },
  },
  plugins: [],
};
