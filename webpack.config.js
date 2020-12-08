const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env", {
                  "useBuiltIns": "usage",
                  "corejs": 3
                }
              ]
            ]
          }
        }
      }
    ]
  },
};
