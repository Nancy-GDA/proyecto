const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// Bundled files dir.
const DIR_BASE = path.join(__dirname, 'dist')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    home: './src/Client/js/home.js'
  },
  output: {
    path: DIR_BASE,
    publicPath: '/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: DIR_BASE,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: './' }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      title: 'Cut App'
    })
  ]
}
