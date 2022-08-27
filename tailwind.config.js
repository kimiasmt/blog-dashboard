const plugin = require('tailwindcss/plugin');

module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  theme: {
    fontSize: {
      // name: ['fontSize', 'lineHeight']
      'xs-content': ['0.5em', '0.75em'],          // ['8px', '12px']     | Tiny small
      'sm-content': ['0.625em', '1em'],           // ['10px', '16px']    | Small
      'md-content': ['0.900em', '1.325em'],        // ['14px', '20px']    | Medium
      'lg-content': ['1em', '1.375em'],       // ['14px', '22px']    | Content
      'sm-title': ['0.625em', '0.790625em'],      // ['10px', '12.65px'] | Small Title
      'md-title': ['0.75em', '0.94875em'],        // ['12px', '15.18px'] | Medium Title
      'lg-title': ['0.875em', '1.106875em'],      // ['14px', '17.71px'] | Large Title
      'sm-base': ['0.625em', '0.790625em'],       // ['10px', '12.65px'] | Small-Button
      'md-base': ['0.75em', '1.25em'],            // ['12px', '20px']    | Medium-Button
      'lg-base': ['0.805em', '1.375em'],           // ['14px', '20px']    | Large-Button
      'xxs': ['0.875em', '1em'],                     // ['16px', '24px']    | H5
      'xs': ['1em', '1.5em'],                     // ['16px', '24px']    | H5
      'sm': ['1.125em', '1.5em'],                 // ['18px', '24px']    | H4
      'md': ['1.5em', '2em'],                     // ['24px', '32px']    | H3
      'lg': ['2em', '2.5em'],                     // ['32px', '48px']    | H2
      'xl': ['2.5em', '3.5em'],                   // ['40px', '56px']    | H1
    },
    borderWidth: {
      DEFAULT: '0.0625em',
      '0': '0',
      '2': '0.125em',
      '3': '0.1875',
      '4': '0.25em',
      '6': '0.475em',
      '8': '0.5em',
    },
    spacing: {
      '0': '0',
      'xxxs': '0.25em', // 4px
      'xxs': '0.5em', // 8px
      'xs': '0.75em', // 12px
      'sm': '1em', // 16px
      'md': '1.5em', // 24px
      'xl': '2em', // 32px
      'xxl': '3em', // 48px
      'xxxl': '4em', // 64px
      'xxxxl': '5em', // 80px
      'xxxxxl': '8em', // 128px
    },
    colors: {
      light: {
        blue: '#DCEDF6',
        gray: '#E2EED8',
        orange: '#FCF7E4',
        pink: '#EFDFDF',
      },
      gray: {
        DEFAULT: '#818A91',
        light: '#DDDDDD',
        lighter: '#ECEEEF',
      },
      black: {
        DEFAULT: '#373A3C',
        light: '#55595C',
        lighter: '#777777'
      },
      red: '#D9534F',
      green: '#5CB85C',
      orange: '#F0AD4E',
      blue: '#1C7CD5',
      lightBlue: '#56C0E0',
    },
    borderRadius: {
      'none': '0',
      'sm': '.5em', // 8px
      DEFAULT: '.625em', // 10px
      'lg': '1.25em', // 20px
      'xl': '1.875em', // 30px
      'xxl': '2.5em', // 40px
      'large': '3.125em', // 50px
      'full': '100%',
    },
    lineHeight: {
      '3': '.75em',
      '4': '1em',
      '5': '1.25em',
      '6': '1.5em',
      '7': '1.75em',
      '8': '2em',
      '9': '2.25em',
      '10': '2.5em',
    },
    screens: {
      'lg': '64em',
    },
    container: {
      center: true,
      padding: '1em',
      container: [],
    },
    extend: {
      outline: {
        cyan: '2px solid #6EF7E8',
        white: '2px solid #ffffff',
        'gray-darkest': '2px solid #323D3B',
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      padding: ['last'],
    },
  },
  plugins: [
  ],
};
