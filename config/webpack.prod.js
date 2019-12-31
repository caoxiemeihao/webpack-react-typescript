const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const config = require('./webpack.config');


module.exports = merge(config, {
  plugins: [
    new CleanWebpackPlugin(), 
    new ManifestPlugin(),
  ],
});
