const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Expensify-app',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};