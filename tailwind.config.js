module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      backgroundImage: theme => ({
        // 'inicio': `url('/feriavirtual/images/fondoinicio.png')`,
        // 'feria': `url('/feriavirtual/images/feria.webp')`,
        // 'speakersbanner': `url('/feriavirtual/images/speakersbanner.jpg')`,
        // 'conferenciafondo': `url('/feriavirtual/images/conferenciafondo.png')`,
        
        'inicio': `url('/images/fondoinicio.png')`,
        'feria': `url('/images/feriafondotemp.png')`,
        'speakersbanner': `url('/images/speakersbanner.jpg')`,
        'conferenciafondo': `url('/images/conferenciafondo.png')`,
      }),
      colors: {
        blackText: '#3E3E3E',
      },
      margin:{
        '25':'6.4rem'
      },
      borderRadius: {
        'large': '1.5rem'
      },
      scale: {
        'invert': '-1',
        '101': '1.01',
      },
      rotate: {
        'new': '-25deg'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translate(0px, 0px)'
          },
          '25%': {
            transform: 'translate(5px, -5px)'
          },
          '50%': {
            transform: 'translate(10px, 0px)'
          },
          '75%': {
            transform: 'translate(5px, 5px)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 3s linear infinite',
      },
      screens: {
      'xs': "480px"
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
