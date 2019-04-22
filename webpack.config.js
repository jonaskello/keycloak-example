const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./packages/client/lib/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
  },
  stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "./packages/client/index.html",
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
  },
  devServer: {
    // host: "localhost",
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api": { target: "http://localhost:3001", secure: false },
    },
    // contentBase: path.resolve(__dirname, "./assets"),
    // overlay: true,
    // stats: "errors-only",
  },
};
