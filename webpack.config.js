var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { 
    path: __dirname + "/dist", 
    filename: 'bundle.js',
    publicPath: "/dist"
  },
  module: {
    loaders: [
      {
        text: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  }
};
