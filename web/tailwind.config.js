module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      logo: 'Doctor Glitch Regular',
    },
    extend: {
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#dfdfdf',
          500: '#929292',
          700: '#484848',
          900: '#111111',
        },
        green: {
          accent: '#0a8a00',
        },
      },
      spacing: {
        80: '20rem',
        100: '25rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
        220: '55rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
