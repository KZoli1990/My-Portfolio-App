import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blue-35px': '0 0 35px #1cd8fd',
        'red-35px': '0 0 35px red',
      },
      animation: {
        'showRight': 'showRight 1s ease forwards',
        'loadingRotate1': 'loadingRotate1 2s linear infinite',
        'loadingRotate2': 'loadingRotate2 2s linear infinite',
        'loadingRotate3': 'loadingRotate3 2s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
