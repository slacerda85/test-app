const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          /* options: {
            presets: ["@babel/preset-env"],
          }, */
        },
      },
      /* {
        test: /\.tsx?$/,
        use: "ts-loader",
      }, */
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 3000,
    static: "./dist",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
