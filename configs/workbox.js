const { GenerateSW } = require('workbox-webpack-plugin');

const options = {
  importWorkboxFrom: 'cdn',
  include: [
    /\.html$/,
    /\.js$/,
    /\.json$/,
    /\.(png|jpg|svg|ico|woff|woff2)$/
  ],
  precacheManifestFilename: 'wb-manifest.[manifestHash].js',
  cacheId: 'my-app',
};

module.exports = new GenerateSW(options);