/**
 * webpack 开发脚本
 */
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const ora = require('ora');
const argv = require('optimist').argv;
const configFactory = require('../config/webpack.config');
const { PATH } = require('../config/config');

const config = configFactory(argv.env);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);
const port = argv.port || config.devServer.port || 8080;
const spinner = ora();

server.listen(port, '127.0.0.1', () => {
  spinner.succeed(`Starting server on http://localhost:${port}`);
});

// Ctrl+c、kill 命令
['SIGINT', 'SIGTERM'].forEach(sig => {
  process.on(sig, () => {
    server.close();
    process.exit(0);
  });
});
