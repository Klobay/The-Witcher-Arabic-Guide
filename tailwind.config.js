/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#050505', 2: '#0a0a0a', 3: '#121212' },
        panel: { DEFAULT: '#161616', 2: '#1c1c1c' },
        line: { DEFAULT: '#2a2a2a', 2: '#3a3a3a' },
        ink: { DEFAULT: '#f5f5f0', 2: '#b8b8b0', 3: '#80807a' },
        gold: { DEFAULT: '#c9a227', 2: '#e6c14e', dim: '#8b6914' },
        ember: { DEFAULT: '#b04a1e', 2: '#d96b3a' },
        frost: { DEFAULT: '#4a8fa8', 2: '#6db5cf' },
        blood: { DEFAULT: '#8b1a1a', 2: '#b52525' },
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
        serif: ['Amiri', 'serif'],
        display: ['Amiri', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.8s ease both',
      },
    },
  },
  plugins: [],
};
