const colors = require('tailwindcss/colors');
const plugins = require('tailwindcss/plugin');

const primary = '#E30B13';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary,
      black:colors.black,
      white:colors.white,
      transparent:colors.transparent,
      yellow: {
        700: '#F5C521'
      },
      gray: {
        300: '#d9dae8',
        500: '#999aa5',
        600: '#66676a',
      }
    },
    extend: {
      spacing: {
        0.5: '0.12rem',
        layout: '2.75rem',
      },
      fontSize: {
        '2lg': '1.38rem',
      },
      borderRadius: {
        image: '0.5rem',
        layout: '0.8rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '0.2s',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        animation: {
          fade: 'fade .5s ease-in-out',
          scaleIn: 'scaleIn .35s ease-in-out',

        }
      },
    },
  },
  plugins: [

  ],
}
