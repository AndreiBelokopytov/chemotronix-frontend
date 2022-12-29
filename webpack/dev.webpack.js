const path = require("path");

const { merge } = require("webpack-merge");
const commonConfig = require("./common.webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    port: 9000,
  },
});
