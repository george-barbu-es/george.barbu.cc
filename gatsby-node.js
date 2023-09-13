var fs = require('fs-extra')
var path = require('path')

exports.onCreateWebpackConfig = ({actions}) => {
  const watchConf = {
    watchOptions: {
      aggregateTimeout: 500, // delay before reloading
      poll: 1000, // enable polling since fsevents are not supported in docker
      ignored: ['**/node_modules', '**/public'] // keep CPU usage minimal
    },
    resolve: {
      fallback: {
        fs: false,
      },
    },
  }
  actions.setWebpackConfig(watchConf)
}