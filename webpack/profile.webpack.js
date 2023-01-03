const { createConfig } = require("./common.webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = createConfig({
  mode: "production",
  profile: true,
  plugins: [new BundleAnalyzerPlugin()],
});
