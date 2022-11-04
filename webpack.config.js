var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", //默认入口
  output: {
    filename: "[name].[contenthash].js",
  },
};
