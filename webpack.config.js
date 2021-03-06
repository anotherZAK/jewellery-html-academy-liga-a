const path = require("path");

module.exports = {
  entry: [
    "./source/js/burger-menu.js"
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "source/js"),
    iife: false
  },
  devtool: false
};
