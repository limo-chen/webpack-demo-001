const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "production",
  devServer: {
    static: "./dist",
  },
  entry: "./src/index.js", //默认入口
  output: {
    filename: "[name].[contenthash].js",
    optimization: {
      runtimeChunk: "single",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "圆圆",
      template: "src/assets/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
