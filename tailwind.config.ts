import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'valorant-red': '#FF4655',
        'valorant-black': '#0F1923',
        'valorant-white': '#FFFBF5',
        'valorant-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
