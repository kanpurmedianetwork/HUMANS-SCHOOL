/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#07070A', // Deep midnight base
          surface: '#12121A', // Elevated cards
          red: '#EA1D24', // Core glow
          redHover: '#DC2626',
          gray: '#8A8A93' // Soft text
        }
      },
      backgroundImage: {
        'nixt-mesh': 'radial-gradient(circle at 50% 0%, #450a0a 0%, #07070A 100%)',
        'nixt-card': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'], // Tech/Web3 font
      }
    },
  },
  plugins: [],
}
