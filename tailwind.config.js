module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        dark: '#211B3D',
        primary: '#7839F3',
        secondary: '#31B380',
        purple: {
          100: '#F5EFFF',
          200: '#ECE3FE',
        },
        gray: {
          600: '#5B5575',
        },
        slate: {
          900: '#211B3D',
        },
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.3125rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '2.5xl': ['1.75rem', { lineHeight: '2.625rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.8125rem' }],
        '4xl': ['2.625rem', { lineHeight: '3.9375rem' }],
      },
      lineHeight: {
        4.5: '1.3125rem',
        5: '1.625rem',
        6: '1.75rem',
        7: '1.875rem',
      },
    },
  },
  plugins: [],
};
