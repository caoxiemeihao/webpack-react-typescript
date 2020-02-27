
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const { PATH, DIRECTORY: DIR } = require('./config');


module.exports = function (env) {
  const isDev = env === 'development';

  const config = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    entry: {
      app: path.join(PATH.ABS.src, 'App.tsx'),
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
        // { test: /\.tsx?$/, loader: 'ts-loader', },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: PATH.ABS.src,
          loader: 'babel-loader',
          options: {
            // https://www.npmjs.com/package/babel-preset-react-app
            presets: [["react-app", { "flow": false, "typescript": true }]],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(PATH.ABS.root, 'public/index.html'),
        favicon: path.join(PATH.ABS.root, 'public/favicon.png'),
      }),
    ],
  };
  // 开发环境配置
  const config_dev = {
    devServer: {
      contentBase: PATH.ABS.dist,
      hot: true,
    },
  };
  // 生产环境配置
  const config_prod = {
    plugins: [
      new CleanWebpackPlugin(),
      new StatsWriterPlugin({
        filename: 'manifest.json',
      }),
      new CopyWebpackPlugin([
        // public 文件夹
        { from: path.join(PATH.ABS.root, 'public'), to: PATH.ABS.dist },
      ]),
    ],
  };

  return merge(config, isDev ? config_dev : config_prod);
};
