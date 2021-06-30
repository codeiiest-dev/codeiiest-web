import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  attributify: true,
  theme: {
    // boxShadow: {
    //   red: '10px 10px 19px -1px rgba(220,38,38,0.5)',
    // },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.red[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
      colors: {
        dark: {
          50: '#f9faf9',
          100: '#f0f1f1',
          200: '#dddfe1',
          300: '#b7bcbe',
          400: '#889493',
          500: '#6a726d',
          600: '#545750',
          700: '#40413c',
          800: '#2c2b2a',
          900: '#121212',
        },
      },
    },
  },
})
