module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '1040px': '1040px',
        '1200px': '1200px',
        '400': '400px',
        '485': '485px',
        '500px': '500px',
        '700': '700px',
        '900': '900px',
      },
      backgroundColor: {
        'gray-custom': '#B3B3B3',
        'gray-custom-2': '#332E30',
      },
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    keyframes: {
      'spin-slow': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      'fadeInBottomRight-fast': {
        '0%': {
          transform: 'translateX(100%) translateY(100%) scale(0)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateX(0) translateY(0) scale(1)',
          opacity: 1,
        },
      },
      'scale-anim': {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      'spin-slow': 'spin-slow 5s linear infinite',
      'scale-anim': 'scale-anim 2s ease-in-out',
      'fadeIn': 'fadeIn 1s linear',
      'slideOutUp-fast': 'slideOutUp 1s',
      'fadeInBottomRight-fast':
        'fadeInBottomRight 2s cubic-bezier(0.42, 0, 0.02, 0.96)',
      'bounceIn': 'bounceIn 500ms ease-in-out',
    },
  },
  plugins: [],
};
