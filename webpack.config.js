var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: "./js/all.js",
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: "all.min.js"
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '/dist'), 
    stats: 'errors-only',
    inline: true,
    hot: true,
    historyApiFallback: true,
    port: 8000
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: []
};
