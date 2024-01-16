/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'title-anim': 'titleAnim 250ms ease-out forwards',
      },
      keyframes: {
        titleAnim: {
          '0%': {
            transform: 'translateY(-30px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-intersect')
  ],
  daisyui: {
    themes: ["light", "dark"],
  },

}

