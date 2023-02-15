const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const config = {
  mode: "production",
  devtool: "cheap-module-source-map",
  entry: {
    background: path.join(__dirname, "./src/pages/background/index.js"),
    content: path.join(__dirname, "./src/pages/content/index.js"),
    options: path.join(__dirname, "./src/pages/options/index.jsx"),
    popup: path.join(__dirname, "./src/pages/popup/index.jsx"),
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./build"),
    filename: "[name]/[name].js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "options",
        meta: {
          charset: "utf-8",
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          "theme-color": "#000000"
        },
        filename: "options/options.html",
        template: "./src/pages/options/options.html",
        chunks: ["options"],
        hash: false,
    }),
    new HtmlWebpackPlugin({
        title: "popup",
        meta: {
          charset: "utf-8",
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          "theme-color": "#000000"
        },
        filename: "popup/popup.html",
        template: "./src/pages/popup/popup.html",
        chunks: ["popup"],
        hash: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "./static", to: "" },
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: '[name]/[name].css'
        },
        use: ["sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};

module.exports = config;