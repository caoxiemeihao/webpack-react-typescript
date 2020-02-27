/**
 * webpack 构建脚本
 */

const program = require('commander');
const argv = require('optimist').argv;
require('./set-env')(argv.env);
const webpack = require('webpack');
// require('debug-trace');
const ora = require('ora');
const configFactory = require('../config/webpack.config');

const config = configFactory(argv.env);
const compiler = webpack(config);
const spinner = ora();

spinner.start('webpack 构建中...');
compiler.run((err, stats) => {
  spinner.stop();
  if (err) {
    // err 对象将只包含与webpack相关的问题，例如错误配置等
    spinner.fail('webpack 配置报错');
    process.exit(0);
  }
  if (stats.hasErrors()) {
    // webpack 构建报错
    const json = stats.toJson();
    // fs.writeFileSync(path.join(__dirname, './\.tmp/errors.json'), JSON.stringify(json, null, 2));
    json.errors.forEach(item => {
      console.log(item);
    });
    spinner.fail('webpack 构建报错');
    process.exit(0);
  }

  spinner.succeed('webpack 构建成功');
});
