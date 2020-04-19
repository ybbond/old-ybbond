require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ZopfliPlugin = require('zopfli-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const robotOptions = {
  policy: [
    {
      userAgent: 'Googlebot',
      allow: '/',
      crawlDelay: 2,
    },
    {
      userAgent: '*',
      allow: '/',
      crawlDelay: 2,
    },
  ],
  sitemap: 'http://ybbond.dev/sitemap.xml',
  host: 'http://ybbond.dev',
};

const paths = ['/', '/uses/', '/uses', '/about/', '/about'];

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
      title: 'Yohanes Bandung',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new RobotstxtPlugin({
      options: robotOptions,
    }),
    new SitemapPlugin('https://ybbond.dev', paths),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.GITHUB_READ_ONLY_TOKEN': JSON.stringify(
        process.env.GITHUB_READ_ONLY_TOKEN,
      ),
    }),
    new ZopfliPlugin({
      asset: '[path].gz[query]',
      algorithm: 'zopfli',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8,
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
