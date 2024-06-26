import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'zero': '0px',
        'one': '50px',
        'two': '100px',
        'three':'150px'
      },
      inset: {
        'zero': '0px',
        'one': '50px',
        'two': '100px',
        'three':'150px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
