const path = require("path");
const webpackCommon = require("./webpack.common");

const { merge } = require("webpack-merge");

module.exports = merge(webpackCommon, {
  mode : "production",
  devtool: "source-map",
  devServer : {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase : path.resolve(__dirname, "../build")
  },
  optimization : {
    minimize: true,
    splitChunks : {
      chunks : "all"
    }
  }
});