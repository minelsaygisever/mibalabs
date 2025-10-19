// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'miba-purple': '#4D2BB5',
        'miba-indigo': '#4f46e5',
        'miba-light': '#8b5cf6',

        'miba-purple-deep': '#503480',
        'miba-slate': '#94a3b8',
        'miba-gray': '#A0A0A0',
        'miba-dark-900': '#111827',
        'miba-dark-700': '#334155',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -40px) scale(1.03)' },
          '50%': { transform: 'translate(0, 0) scale(1)' },
          '75%': { transform: 'translate(-20px, 30px) scale(0.97)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      
      animation: {
        'float': 'float 8s ease-in-out infinite',         // 'animate-float'
        'float-slow': 'float 12s ease-in-out infinite', // 'animate-float-slow'
        'float-fast': 'float 6s ease-in-out infinite',  // 'animate-float-fast'
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'glow': 'glow-pulse 6s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}