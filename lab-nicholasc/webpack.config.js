// 'use strict';
//
// const webPackConfig = module.exports = {};
//
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// //=======================================
//
// webPackConfig.entry = `${__dirname}/src/index.js`;
// webPackConfig.output = {
//   path: `${__dirname}/build`,
//   filename: 'bundle.[hash].js',
// },
//
// //=======================================
//
// webPackConfig.plugins = [
//   new HTMLWebpackPlugin(),
//   new ExtractTextPlugin('bundle.[hash].css'),
// ];
//
// //=======================================
//
// webPackConfig.module = {
//   rules: [
//     {
//       test: /\.js$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//     },
//     {
//       test: /\.scss$/,
//       loader: 'style-loader!css-loader!sass-loader',
//     },
//   ],
// },
//
// webPackConfig.devtool = 'eval-source-map';
//
// webPackConfig.devServer = {
//   historyApiFallback: true,
// };

'use strict';

const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: '#content',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.[hash].js',
  },
  plugins: [htmlWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
