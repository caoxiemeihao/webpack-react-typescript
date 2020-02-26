const fs = require('fs');
const path = require('path');
const { PATH } = require('../config/config');
require('colors');

/**
 * 在根目录下生产 env.js
 * @param NODE_ENV
 */
module.exports = function (NODE_ENV) {
  const str = `
// 构建时间戳
exports.BUILD_TIMESTAMP = '${Date.now()}';

// 构建环境
exports.NODE_ENV = '${NODE_ENV}';
`;

  try {
    fs.writeFileSync(path.join(PATH.ABS.root, 'env.js'), str);
  } finally {
    console.log('[set-env.js]', '写入 env.js', NODE_ENV.blue);
  }
};
