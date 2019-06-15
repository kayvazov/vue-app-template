const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    "./src/js/index.js",
    './src/scss/index.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    https: true
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        },
        global: {
          name: 'global',
          test: /global/,
          chunks: 'all',
          enforce: true
        },
        pages: {
          name: 'pages',
          test: /pages/,
          chunks: 'all',
          enforce: true
        },

      }
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ''
          }
        }
      },
      {
        test: /\.scss$/,
        use:  [
          'style-loader',
          MiniCssExtractPlugin.loader,
          // работаем с @import и url()
          {
            loader: 'css-loader',
            options: {

            }
          },
          // далее, по .css файлу проходиться postcss-loader да бы, проставить все нужные полифиллы и префиксы к свойствам
          'postcss-loader',
          // в начале sass-loader переводить .scss файл в .css
          'sass-loader'
        ]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|svg|eot|ttf|woff|woff2|png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 1,
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[hash:4].css',
    }),
    new VueLoaderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.template.ejs',
      children: false,
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
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
  node: {
    module: 'empty',
    fsevents: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};