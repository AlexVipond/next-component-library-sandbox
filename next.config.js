const VirtualModulesPlugin = require('virtual-module-webpack-plugin'),
      pageFilesToRoutes = require('./source-transforms/pageFilesToRoutes'),
      virtualRoutesPlugin = new VirtualModulesPlugin({
        moduleName: 'node_modules/virtual-routes.json',
        contents: pageFilesToRoutes()
      })
      
module.exports = {
  webpack: config => {
    config.plugins.push(virtualRoutesPlugin)
    return config
  },
}
