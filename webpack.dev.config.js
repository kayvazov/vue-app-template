const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
module.exports =  {
  entry: "./dist/js/index.js",
  output: {
    filename: "./src/js/bundle.js"
  },
  devServer: {
    compress: true
  },
  mode: 'development',
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
      },
	  {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './dist/index.template.ejs',
      children: false,
      minify: true,
      title: 'Vue & PWA app template',
    }),

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
