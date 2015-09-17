import Router from './Router';

const cluster = require('cluster');

if (cluster.isMaster && !module.parent) {
  const exemptCores = 0;
  const cpuCount = (require('os')).cpus().length;

  for (let i = 1; i <= cpuCount - exemptCores; i++) {
    cluster.fork(i);
  }

  cluster.on('exit', () => cluster.fork());
} else {
  const express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');

  const app = express();
  const env = process.env.NODE_ENV || 'development';
  const config = (require('./config'))[env];

  app.use(bodyParser.json());
  app.use(cors());

  // Setup our Router
  new Router(app)

  let server = app.listen(config.port);

  // Export our server, so Mocha can start and stop it.
  if(module.parent) module.exports = server;
}
