var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var defineConfig = require('./defineConfig')

defineConfig['process.env'] = {
  NODE_ENV: '"production"'
}

console.log(defineConfig);

var outDir = (process.env.NODE_ENV==="production")?"dist":"dvlp"

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: [
    './src/main.ts'
  ],
  output: {
    path:  path.resolve(__dirname, './' + outDir),
    filename: 'js/app.js',
    chunkFilename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {

        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: './img/'
            }  
          }          
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './src'),
      '@dpub': path.join(__dirname, './src/kdmt/dpub'),
    }
  },
  performance: {
    hints: false
  },
  optimization: {

    splitChunks: {
      cacheGroups: {
          default: false,
          commons: {
              test: /node_modules/,
              name: "vendor",
              chunks: "initial",
              minSize: 1
          },
      }
    },

  },
  plugins: [
    new webpack.DefinePlugin(defineConfig),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
  ]
}
