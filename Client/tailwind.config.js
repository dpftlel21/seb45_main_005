module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {},
    keyframes: {
      'spin-slow': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'spin-slow': 'spin-slow 5s linear infinite',
      'fadeInBottomRight-fast': 'fadeInBottomRight 1s linear',
    },
  },
  plugins: [],
};
