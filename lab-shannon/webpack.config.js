const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new htmlWebpackPlugin({template: `./src/index.html`}),
    new ExtractPlugin('bundle.[hash].js'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: `${__dirname}/src/style`,
            },
          },
        ],
      },
    ],
  },
};
