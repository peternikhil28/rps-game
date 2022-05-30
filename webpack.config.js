const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
var WebpackObfuscator = require('webpack-obfuscator');
var ip = require('ip');

const webpack = require('webpack');

let config = {
  mode: 'development',

  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      NTEngine: path.resolve(__dirname, 'NTEngine')
    },
    extensions: ['.tsx','.ts', '.js'],
  },

  module: {
    rules: [
        {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
},

  plugins: [
    new CleanWebpackPlugin(),
    
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyPlugin({
      patterns: [
        { from: 'res/', to: 'res/'}
      ],
    }),

    new webpack.ProvidePlugin({
      PIXI: 'pixi.js'
    })
  ],

  devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      host: ip.address(),
      port: 8080,
      disableHostCheck: true,
    }
}

module.exports = (env, argv) => {


  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

    config.node = {
        fs: 'empty',
    }

  return config;
};