const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports =  {
  entry: "./dist/js/index.js", // Откуда выводить
  output: {
    filename: "./src/js/bundle.js"
  },
  devServer: {
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-loader'
          },
          {
            loader: 'svg-inline-loader'
          }
        ]
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ['file-loader?name=[name].html', 'extract-loader', 'html-loader']
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ],
  resolve: {
    alias: {
      // jquery: 'jquery/src/jquery',
      vue: 'vue/dist/vue.js'
    }
  },
  node: {
    module: 'empty',
    fsevents: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
