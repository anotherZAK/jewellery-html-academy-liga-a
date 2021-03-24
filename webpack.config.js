const path = require('path');

var config = {
  module: {},
};

var mainConfig = Object.assign({}, config, {
  name: 'main',
  entry: [
    './source/js/burger-menu.js',
    './source/js/accordion.js',
    './source/js/modal.js',
    './source/js/filter-menu.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'source/js'),
    iife: true,
  },
  devtool: false
});

var vendorConfig = Object.assign({}, config, {
  name: 'vendor',
  entry: './source/js/swiper.js',
  output: {
    filename: 'vendor.js',
    path: path.resolve(__dirname, 'source/js'),
    iife: true,
  },
  devtool: false
});

module.exports = [
  mainConfig, vendorConfig
];
