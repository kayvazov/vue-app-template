const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: [
    "./dist/js/index.js",
    "./dist/scss/index.scss"
  ],
  output: {
    filename: "./src/js/bundle.js"
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'postcss-loader',
            'css-validator-loader',
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded'
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
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './src/imgs/[name].[ext]',
          }
        }]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './dist/css/main.css',
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
      '$img': path.resolve('dist/imgs'),
      'icon': path.resolve(__dirname, 'dist/icons')
    }
  },
  node: {
    module: 'empty',
    fsevents: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};