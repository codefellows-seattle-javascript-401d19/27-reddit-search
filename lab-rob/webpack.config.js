'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HTMLPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: '#content'
});

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },
  plugins: [htmlWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};