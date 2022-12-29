const path = require("path");

const { merge } = require("webpack-merge");
const commonConfig = require("./common.webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: "production",
  profile: true,
  plugins: [new BundleAnalyzerPlugin()],
});
