export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure the content paths are correct
  ],
  theme: {
    extend: {  fontFamily: {
      playfair: ["Nunito", 'serif'], // Add Playfair Display
    },
      keyframes: {
        rotateIcon: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        luckyIconAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotateIcon: 'rotateIcon 4s infinite',
        luckyIconAnimation: 'luckyIconAnimation 3s infinite',
      },
    },
  },
  plugins: [],
}
