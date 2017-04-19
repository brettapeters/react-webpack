/* eslint-disable no-console */
import colors from 'colors';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const getConfig = require('../webpack.config');

const serve = (webpackDevHost = 'localhost', webpackDevPort = 8080) => {
  const config = getConfig(webpackDevPort);
  const compiler = webpack(config);

  const webpackDevServer = new WebpackDevServer(
    compiler,
    {
      hot: true,
      historyApiFallback: true,
      publicPath: config.output.publicPath,
      contentBase: config.output.path,
      quiet: false,
      noInfo: false,
      stats: {
        colors: true,
        assets: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: true
      }
    }
  );

  webpackDevServer.listen(
    webpackDevPort,
    webpackDevHost,
    (err, res) => {
      if (err) console.log(err);
      console.log(`Webpack Dev Server listening at http://${webpackDevHost}:${webpackDevPort}`.yellow);
    }
  );
};

serve();