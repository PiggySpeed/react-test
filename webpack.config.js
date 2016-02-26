var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/entry.js']
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
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules', 'sass'],
        include: path.resolve(__dirname, './node_modules/react-flexbox-grid')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};