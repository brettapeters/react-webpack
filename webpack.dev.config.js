const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackDevHost = 'localhost';

module.exports = (webpackDevPort) => {
  return {
    context: resolve(__dirname, 'src'),

    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      `webpack-dev-server/client?http://${webpackDevHost}:${webpackDevPort}`,
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      './index.js'
      // the entry point of the app
    ],

    output: {
      filename: 'bundle.js',
      // the output bundle

      path: resolve(__dirname, 'dist'),

      publicPath: '/'
      // necessary for HMR to know where to load the hot update chunks
    },

    devtool: 'inline-source-map',

    module: {
      rules: [
        {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
        {test: /(\.css|\.scss)$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader']},
        {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
        {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates

      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src/index.html'),
        filename: resolve(__dirname, 'dist/index.html')
      })
      // generate index.html file with bundle injected
    ],

    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  };
};