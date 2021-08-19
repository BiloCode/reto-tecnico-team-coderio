const path = require("path");
const webpackCommon = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { merge } = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = merge(webpackCommon, {
  mode : "development",
  target: "web",
  devtool: "eval-source-map",
  plugins : [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer : {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase : path.resolve(__dirname, "../build")
  }
});