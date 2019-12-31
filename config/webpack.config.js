const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const isProd = process.env.NODE_ENV === 'production';
const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  entry: {
    app: resolve('../src/App.ts'),
  },
  output: {
    path: resolve('../dist'),
    filename: isProd ? 'js/[name].[contenthash:9].js' : 'js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@src': resolve('../src'),
    }
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader', },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
    }),
  ],
};
