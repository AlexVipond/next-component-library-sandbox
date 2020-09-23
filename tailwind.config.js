const baleada = require('@baleada/tailwind-theme') // https://baleada.netlify.app/docs/theme/

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
  theme: baleada,
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
