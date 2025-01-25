var fs = require('fs-extra')
var path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: ['**/node_modules', '**/public']
    },
    resolve: {
      fallback: {
        fs: false,
      },
    },
  })
}

exports.onPostBuild = (pages, callback) => {
  // Copy profile.
  fs.copySync(path.join(__dirname, '/data'), path.join(__dirname, '/public/api'))
}
