var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
process.env.NODE_ENV = 'development';

var baseConfig = require('./webpack.config.base')
var buildConfig = merge(baseConfig, {
  optimization: {
    minimize: false,
  },
  devServer: {
    contentBase: false
  },

});

//console.log("buildConfig", buildConfig.optimization.minimize);

module.exports = buildConfig;

