const baleada = require('@baleada/tailwind-theme'), // https://baleada.netlify.app/docs/theme/
      defaultConfig = require('tailwindcss/defaultConfig'),
      plugin = require('tailwindcss/plugin')

function markerNone ({ addUtilities }) {
  addUtilities({
    '.marker-none': {
      'list-style': 'none',
      '&::-webkit-details-marker': {
        display: 'none',
      }
    }
  })
}    

module.exports = {
  purge: {
    content: [
      './pages/**/*.html',
      './pages/**/*.tsx',
      './examples/**/*.html',
      './examples/**/*.tsx',
    ]
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fontFamily: {
      sans: ['Proxima Nova', ...defaultConfig.theme.fontFamily.sans],
    },
    ...baleada,
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-open-variant')(),
    plugin(markerNone),
  ],
  variants: {
    margin: [...defaultConfig.variants.margin, 'last'],
    transform: [...defaultConfig.variants.transform, 'open'],
    rotate: [...defaultConfig.variants.rotate, 'open'],
  }
}

