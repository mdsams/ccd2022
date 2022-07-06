module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        lightPurple: '#818DD1',
        blackOlive: '#3b413c',
        lightGrey: '#878D89',
        lightBlue: '#B5D2E4',
        googleBlue: '#4285F4',
        googleGreen: '#34A853',
        googleYellow: '#FBBC05',
        googleRed: '#EA4335',
        regalBlue: '#2F327D',
        imageBlue: '#a9ced4'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
}
