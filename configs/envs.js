exports = (args) => {
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'develop'
  })
}
