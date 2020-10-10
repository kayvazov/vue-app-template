const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = _ => {
  new HtmlWebpackPlugin({
    minify: {
      removeComments: true,
      collapseWhitespace: true
    },
    filename: '../index.html',
    template: './src/template/index.template.ejs',
    children: false,
    // template info
    manifest: './dist/pwa/manifest.json',
    icon: {
      shortcut: './dist/site-icon/app-logo.png',
      apple: {
        '57x57': './dist/site-icon/app-logo.png',
        '60x60': './dist/site-icon/app-logo.png',
        '72x72': './dist/site-icon/app-logo.png',
        '76x76': './dist/site-icon/app-logo.png',
        '114x114': './dist/site-icon/app-logo.png',
        '120x120': './dist/site-icon/app-logo.png',
        '144x144': './dist/site-icon/app-logo.png',
        '152x152': './dist/site-icon/app-logo.png',
        '180x180': './dist/site-icon/app-logo.png',
      }
    },
    meta: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at blanditiis consectetur cupiditate dignissimos esse, fugiat illum laudantium nihil, nisi numquam obcaecati officiis optio placeat, quas quasi sequi soluta voluptatibus?',
      title: 'Vue & PWA app',
      url: '//your-site-link.com'
    }
  })
}
