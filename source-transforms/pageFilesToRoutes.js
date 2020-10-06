const { readdirSync } = require('fs'),
      { parse } = require('path')

module.exports = function pageFilesToRoutes () {
  const files = readdirSync('./pages'),
        routes = files
          .filter(file => parse(file).name !== '_app')
          .map(file => {
            const { name: fileName } = parse(file),
                  href = `/${fileName.replace(/^index$/, '')}`,
                  name = fileName.replace(/-/g, ' ').replace(/^index$/, 'home')

            return { href, name }
          })

  // Log
  console.log(`${routes.length} pages added to nav`)

  return JSON.stringify(routes)
}

