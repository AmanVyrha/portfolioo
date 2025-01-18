/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-glow': 'text-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'text-glow': {
          'from': {
            'text-shadow': '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          },
          'to': {
            'text-shadow': '0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00',
          },
        },
      },
    },
  },
  plugins: [],
};