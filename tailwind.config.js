module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    fontFamily: {
      karla: ['Karla', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'outline-primary': '0 0 0 2px rgba(119, 241, 202, 0.5)',
        btn:
          '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'
      },
      colors: {
        primary: '#77f1ca',
        secondary: '#172a45',
        'light-grey': '#ccd6f6',
        'light-grey-secondary': '#8892b0',
        'dark-blue': '#0a192f'
      },
      spacing: {
        '2/3': '50%'
      },
      height: {
        '70': '20rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
