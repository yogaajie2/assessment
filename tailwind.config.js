/* eslint-disable quote-props */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        lg: '7rem'
      }
    },

    extend: {
      spacing: {
        '18': '4.5rem',
        '23': '5.75rem',
        '30': '7.5rem'
      }
    },

    colors: {
      primary: {
        DEFAULT: '#1C1C1C',
        light: '#363A45'
      },
      secondary: {
        DEFAULT: '#676767',
        light: '#ACACAC',
        lighter: '#C5C5C5',
        lightest: '#F0EFEF'
      },
      white: '#FFF',
      red: '#EE6352',
      blue: '#00A5CF',
      green: '#00B14F',
      gray: '#F9FBFD',
      darkgray: '#F7F7F7',
      footernew: '#EAEFF2',
      transparent: 'transparent'
    }
  },
  plugins: []
}
