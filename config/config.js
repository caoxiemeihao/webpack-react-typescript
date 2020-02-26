process.chdir(__dirname);
const path = require('path');

const _js = '_js';
const _css = '_css';
const _static = '_static';
const _src = '../src';
const _root = '..';
const _dist = '../dist';
const _dist_js = `../dist/${_js}`;
const _dist_css = `../dist/${_css}`;
const _dist_static = `../dist/${_static}`;

exports.DIRECTORY = {
  js: _js,
  css: _css,
  static: _static,
};

exports.PATH = {
  src: _src,
  root: _root,
  dist: _dist,
  dist_js: _dist_js,
  dist_css: _dist_css,
  static: _dist_static,
  // 绝对路径
  ABS: {
    src: path.join(__dirname, _src),
    root: path.join(__dirname, _root),
    dist: path.join(__dirname, _dist),
    dist_js: path.join(__dirname, _dist_js),
    dist_css: path.join(__dirname, _dist_css),
    dist_static: path.join(__dirname, _dist_static),
  },
};
