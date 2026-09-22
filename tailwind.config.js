/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#12131A',
          700: '#2B2D3A',
          500: '#5C5F72',
          300: '#9799AB',
        },
        brand: {
          50: '#EEF0FF',
          100: '#DFE2FF',
          200: '#C2C6FF',
          400: '#6C6FE0',
          500: '#4F46E5',
          600: '#4338CA',
          700: '#372FA3',
        },
        canvas: '#F6F7FB',
        line: '#E7E8F0',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18, 19, 26, 0.04), 0 1px 8px rgba(18, 19, 26, 0.03)',
        panel: '-4px 0 24px rgba(18, 19, 26, 0.06)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slide-in 220ms ease-out',
        'fade-in': 'fade-in 160ms ease-out',
      },
    },
  },
  plugins: [],
}
