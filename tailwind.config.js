/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff2d55',
          blue: '#0ff',
          yellow: '#f7d002',
        },
        cyber: {
          black: '#0a0a0f',
          darker: '#070709',
          dark: '#151519',
        }
      },
      animation: {
        'glow-pink': 'glow-pink 2s ease-in-out infinite alternate',
        'glow-blue': 'glow-blue 2s ease-in-out infinite alternate',
        'glow-yellow': 'glow-yellow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 1s ease-in-out infinite alternate',
        'scanline': 'scanline 6s linear infinite',
      },
      keyframes: {
        'glow-pink': {
          '0%': { 'box-shadow': '0 0 5px #ff2d55, 0 0 10px #ff2d55, 0 0 15px #ff2d55' },
          '100%': { 'box-shadow': '0 0 10px #ff2d55, 0 0 20px #ff2d55, 0 0 30px #ff2d55' },
        },
        'glow-blue': {
          '0%': { 'box-shadow': '0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff' },
          '100%': { 'box-shadow': '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff' },
        },
        'glow-yellow': {
          '0%': { 'box-shadow': '0 0 5px #f7d002, 0 0 10px #f7d002, 0 0 15px #f7d002' },
          '100%': { 'box-shadow': '0 0 10px #f7d002, 0 0 20px #f7d002, 0 0 30px #f7d002' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};