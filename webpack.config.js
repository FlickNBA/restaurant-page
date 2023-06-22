const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    devMiddleware: { writeToDisk: true }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/3images/", to: "./", force: true }
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Thai Food Near Me',
      template: './src/index.html',
      favicon: './src/favicon.ico'
    })
  ],
  output: {
      filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  optimization: {
    runtimeChunk: 'single',
  },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
};