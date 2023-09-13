import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#5636D3',
        secondary: '#FF872C',
        success: '#12A454',
        danger: '#E83F5B',
        title: '#363F5F',
        text: '#969CB2',
        background: '#F0F2F5',
        backgroundCard: '#FFFFFF',
        primaryDark: '#3d24a2',
        secondaryDark: '#b24d00',
        titleDark: '#a5b7cc',
        textDark: '#babab7',
        backgroundDark: '#1f2223',
        backgroundCardDark: '#181a1b',
      },
      zIndex: {
        '100': '100',
      },
      margin: {
        '0-auto': '0 auto',
        '0-auto-8': '0px auto 4.6rem',
        '2-auto': '2rem auto',
      },
    },
  },
  plugins: [],
}
export default config
