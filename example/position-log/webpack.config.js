const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const positionLog = require('../../packages/position-log')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options:{
              plugins: [
                [positionLog]
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}