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
};
