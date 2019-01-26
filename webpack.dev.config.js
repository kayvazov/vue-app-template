const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  entry: [
    "./dist/js/index.js",
  ],
  output: {
    path: './src/',
    filename: "js/bundle.js"
  },
  devServer: {
    compress: true,
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'imgs'
          }
        }]
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'dist/scss'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',

            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'svg-loader'
        }, ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'src/css/main.css',
      allChunks: true
    }),
    new VueLoaderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.template.ejs',
      children: false,
      minify: true,
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
      vue: 'vue/dist/vue.js',
      img: path.resolve(__dirname, 'dist/imgs/'),
      icon: path.resolve(__dirname, 'dist/icons')
    }
  },
  node: {
    module: 'empty',
    fsevents: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};