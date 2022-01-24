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
    extend: {
      spacing: {
        '23': '5.75rem'
      }
    },

    colors: {
      primary: '#1C1C1C',
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
      darkgray: '#F7F7F7'
    }
  },
  plugins: []
}
