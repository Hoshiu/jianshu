module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '240': '60rem',
      },
      lineHeight: {
        '14': '3.5rem',
      },
      backgroundImage: theme => ({
        'jianshu-logo': "url('./statics/logo.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
