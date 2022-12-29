const { merge } = require("webpack-merge");
const commonConfig = require("./common.webpack");

module.exports = merge(commonConfig, {
  mode: "production",
});
