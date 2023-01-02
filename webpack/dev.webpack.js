const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createConfig } = require("./common.webpack");

module.exports = createConfig({
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    port: 9000,
  },
});
