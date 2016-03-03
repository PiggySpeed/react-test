var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    app: ['webpack/hot/dev-server', './src/entry.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: './public/built',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      }
    ]
  }
};