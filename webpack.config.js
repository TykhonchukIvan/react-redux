const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname,"./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.less$/, /\.css$/],
        use: [CssWebpackPlugin.loader, "css-loader", "less-loader"]
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    watchOptions: {
      //poll: true,
    },
    hot: true,
    open: false,
    host: 'localhost',
    port: 3333,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html"
    }),
    new CssWebpackPlugin({
      filename: "style.css"
    })
  ],
};