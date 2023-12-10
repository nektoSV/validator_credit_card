const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, 'localhost', (err) => {
  if (err) {
    return;
  }// eslint-disable-next-line
  if (process.send) {
    // eslint-disable-next-line
    process.send('ok');
  }
});
