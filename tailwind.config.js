const baleada = require('@baleada/tailwind-theme') // https://baleada.netlify.app/docs/theme/

module.exports = {
  purge: {
    content: [
      './pages/**/*.html',
      './pages/**/*.tsx',
      './components/**/*.html',
      './components/**/*.tsx',
    ]
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: baleada
}
