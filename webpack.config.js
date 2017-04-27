const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/jsx/app.jsx',
  output: {
    path: __dirname + '/public/js',
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
      }
    ]
  },
}