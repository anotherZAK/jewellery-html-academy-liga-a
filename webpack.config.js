const path = require("path");

module.exports = {
  entry: [
    "./source/js/burger-menu.js",
    "./source/js/accordion.js",
    "./source/js/modal.js",
    "./source/js/filter-menu.js",
    "./source/js/swiper.js",
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "source/js"),
    iife: false
  },
  devtool: false
};
