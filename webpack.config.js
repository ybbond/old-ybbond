require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index'),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ybbond.dev',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.GITHUB_READ_ONLY_TOKEN': JSON.stringify(
        process.env.GITHUB_READ_ONLY_TOKEN,
      ),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};

if (process.env.WEBPACK_ANALYZE_WEB === 'true') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
