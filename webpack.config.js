const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js',
    publicPath: "/"
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true,
    port: 8001,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env',
            '@babel/react'

          ]
        }
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
}