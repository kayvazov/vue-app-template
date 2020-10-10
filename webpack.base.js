const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// config parts
const Workbox = require('./configs/workbox.js');

module.exports = (env, args) => {
  return {
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
      //https: true for https
    },
    optimization: {
      minimizer: [new TerserJSPlugin({})],
      splitChunks: {
        cacheGroups: {
          // js splitting
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
          // css splitting
          // future :)
        }
      }
    },
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
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use:  [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                hmr: true,
                // force reload
                reloadAll: true,
              }
            },
            // работаем с @import и url()
            {
              loader: 'css-loader'
            },
            // далее, по .css файлу проходиться postcss-loader да бы, проставить все нужные полифиллы и префиксы к свойствам
            'postcss-loader',
            // в начале sass-loader переводить .scss файл в .css
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers'),
                  indentedSyntax: true // optional
                },
              }
            }
          ]
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 1,
            publicPath: 'fonts',
            name: '[name].[sha1:hash:base64:5].[ext]'
          },
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'dist/imgs',
            name: '[name].[ext]'
          },
        },
        {
          test: /\.(svg)$/,
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'dist/icons/[name].[sha1:hash:base64:5].[ext]'
          },
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/main.[hash:4].css',
        chunkFilename: 'css/[name].[hash:4].css'
      }),
      new VueLoaderPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({

      }),
      //Workbox
    ],
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue: 'vue/dist/vue.runtime.min.js',
        'vue-router': 'vue-router/dist/vue-router.min.js',
        'vuex': 'vuex/dist/vuex.min.js',
        'images': path.resolve(__dirname, './src/imgs'),
        'icons': path.resolve(__dirname, './src/icons')
      }
    },
    node: {
      module: 'empty',
      fsevents: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  }
};
