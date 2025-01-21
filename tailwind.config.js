/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Archivo': ["Archivo"],
      'Antonio': ["Antonio"],
      'Roboto': ["Roboto"],
      'spartan': ['League Spartan', 'sans-serif'], // Add the custom font here

      // 'Archivo': ["Archivo"],
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 3s linear infinite',
      },
    },
  },
  plugins: [],
}