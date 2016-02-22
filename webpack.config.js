var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './entry.js',
  output: {
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};