const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  performance: {
    hints: false,
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    compress: true,
    port:8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|png|gif|jpeg|jpg|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
};
