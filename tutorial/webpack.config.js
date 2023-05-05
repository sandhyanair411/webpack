const { type } = require("os");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/inline",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
    ],
  },
};
