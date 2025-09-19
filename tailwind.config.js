/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1s',
        'float-slow': 'float 4s ease-in-out infinite 2s',
        'marquee-left-slow': 'marqueeLeft 45s linear infinite forwards',
        'marquee-left': 'marqueeLeft 35s linear infinite forwards',
        'marquee-left-fast': 'marqueeLeft 25s linear infinite forwards',
        'marquee-right-slow': 'marqueeRight 45s linear infinite forwards',
        'marquee-right': 'marqueeRight 35s linear infinite forwards',
        'marquee-right-fast': 'marqueeRight 25s linear infinite forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        marqueeRight: {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        restart: {
          '0%': { animationPlayState: 'running' },
          '100%': { animationPlayState: 'running' }
        },
      },
      colors: {
        orange: {
          400: '#FF6B35',
          500: '#FF5722',
          600: '#E64A19',
        }
      }
    },
  },
  plugins: [],
}