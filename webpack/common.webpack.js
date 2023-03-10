const env = require("dotenv-extended").load({
  errorOnMissing: true,
  errorOnExtra: true,
  errorOnRegex: false,
  includeProcessEnv: true,
});
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { mergeWithRules } = require("webpack-merge");

const merge = (baseConfig) => (config) =>
  mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(baseConfig, config);

const commonConfig = {
  entry: path.resolve(__dirname, "../src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(env),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      title: env.APP_NAME,
    }),
  ],
};

module.exports = {
  createConfig: merge(commonConfig),
};
