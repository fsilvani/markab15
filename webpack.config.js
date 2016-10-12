var webpack = require('webpack');
var path = require('path');
// var CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'app/js');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js'
  },
  module : {
    loaders : [{
      test : /\.js?/,
      include : APP_DIR,
      exclude: /node_modules/,
      loader : 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    // },{
    //   test: /(\.scss|\.css)$/,
    //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
    }]
  },
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, 'theme/_theme.scss') + '";'
  }
};

module.exports = config;
