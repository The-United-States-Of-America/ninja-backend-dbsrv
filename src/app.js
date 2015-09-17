import Router from './Router';

const cluster = require('cluster');

if (cluster.isMaster) {
  const exemptCores = 0;
  const cpuCount = (require('os')).cpus().length;

  for (let i = 1; i <= cpuCount - exemptCores; i++) {
    cluster.fork(i);
  }

  cluster.on('exit', function(worker) {
    return cluster.fork();
  });
} else {
  //const Router = require('./Router');

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

  app.listen(config.port);
}
