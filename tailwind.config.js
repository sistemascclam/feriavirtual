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
        // 'inicio': `url('/feriaprueba/images/fondoinicio.jpg')`,
        // 'entrada': `url('/feriaprueba/images/entrada.jpg')`,
        // 'feria': `url('/feriaprueba/images/feriafondo.jpg')`,
        // 'speakersbanner': `url('/feriaprueba/images/speakersbanner.jpg')`,
        // 'conferenciafondo': `url('/feriaprueba/images/conferenciafondo.jpg')`,   
        
        'inicio': `url('/images/fondoinicio.jpg')`,
        'entrada': `url('/images/entrada.jpg')`,
        'feria': `url('/images/feriafondo.jpg')`,
        'speakersbanner': `url('/images/speakersbanner.jpg')`,
        'conferenciafondo': `url('/images/conferenciafondo.png')`,
        
      }),
      opacity: {
        '15': '0.15',
      },
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
        },
        bouncesoft: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
           ' animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
           ' animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        bounceright:{
          '0%, 100%': {
            transform: 'translateX(-15%)',
           ' animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
           ' animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 3s linear infinite',
        bouncesoft: 'bouncesoft 1s infinite',
        bounceright: 'bounceright 1s infinite',
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
