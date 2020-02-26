
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const merge = require('webpack-merge');
const { PATH, DIRECTORY: DIR } = require('./config');


module.exports = function (env) {
  const isDev = env === 'development';

  const config = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    entry: {
      index: path.join(PATH.ABS.src, 'index.ts'),
    },
    output: {
      // publicPath: '/',
      path: PATH.ABS.dist,
      filename: isDev
        ? `${DIR.js}/[name].js`
        : `${DIR.js}/[name].[contenthash:9].js`,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': PATH.ABS.src,
        '@root': PATH.ABS.root, // 项目跟目录
      },
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: 'ts-loader', },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(PATH.ABS.root, 'public/index.html'),
      }),
    ],
  };
  // 开发环境配置
  const config_dev = {

  };
  // 生产环境配置
  const config_prod = {
    plugins: [
      new CleanWebpackPlugin(),
      new StatsWriterPlugin({
        filename: 'manifest.json',
      }),
    ],
  };

  return merge(config, isDev ? config_dev : config_prod);
};
