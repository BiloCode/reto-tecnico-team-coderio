const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @localtypes {import('webpack').Configuration} */
module.exports = {
  entry : path.resolve(__dirname, "../src/index.tsx"),
  output : {
    path : path.resolve(__dirname, "../build"),
    filename : "[name].[contenthash].js",
    clean: true
  },
  module : {
    rules : [
      {
        use:"babel-loader",
        test: /.(jsx|js|ts|tsx)/,
        exclude: /node_modules/
      },
      {
        test: /.s[ac]ss$/i,
        use : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/
      },
      {
        type : "asset/resource",
        test : /.(jpg|jpeg|png|svg|gif|json)/,
      }
    ]
  },
  plugins : [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname, "../public/index.html")
    })
  ],
  resolve : {
    extensions : [".jsx",".js",".ts",".tsx", ".json"],
    preferRelative : true,
    alias: {
      "@store" : path.resolve(__dirname, "../src/store"),
      "@shared" : path.resolve(__dirname, "../src/shared"),
      "@types" : path.resolve(__dirname, "../src/types"),
      "@config" : path.resolve(__dirname, "../src/config"),
      "@utils" : path.resolve(__dirname, "../src/utils"),
      "@views" : path.resolve(__dirname, "../src/views"),
    }
  }
}