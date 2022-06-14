const { defaultTheme  } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'pdf': '816px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#e14631',
      secondary: '#313638',
      white: '#FFF'
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'norwester': ['Norwester', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
      screens: {
        'print': {'raw': 'print'},
        'lg': {'raw': 'print, (min-width: 1024px)'},
      },
    },
    orphans: [ 1, 2, 3 ],
    widows: [ 1, 2, 3 ],
    boxDecorationBreak: [ 'slice', 'clone' ],
    breakBefore: [
        'auto', 'avoid', 'avoid-page', 'page', 'always', 'left', 'right',
        'recto', 'verso', 'avoid-column', 'column', 'avoid-region', 'region',
    ],
    breakAfter: [
        'auto', 'avoid', 'avoid-page', 'page', 'always', 'left', 'right',
        'recto', 'verso', 'avoid-column', 'column', 'avoid-region', 'region',
    ],
    breakInside: [ 'auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region' ],
    
  },
  variants: { // all the following default to ['responsive']
    orphans: ['responsive'],
    widows: ['responsive'],
    boxDecorationBreak: ['responsive'],
    breakBefore: ['responsive'],
    breakAfter: ['responsive'],
    breakInside: ['responsive'],
  },
  plugins: [
    require('tailwindcss-break')(), 
  ], 
};
