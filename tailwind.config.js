/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        ink: '#0B0B0B',
        muted: '#9A9A9A',
        line: '#E6E6E6',
      },
      fontFamily: {
        display: ['Bodoni Moda', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Bricolage Grotesque', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
