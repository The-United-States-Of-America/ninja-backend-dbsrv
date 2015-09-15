let cluster = require('cluster');

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
  let express = require('express');
  let cors = require('cors');
  let bodyParser = require('body-parser');
  let mongoose = require('mongoose');

  let app = express();
  let env = process.env.NODE_ENV || 'development';
  let config = (require('./config'))[env];

  app.use(bodyParser.json());
  app.use(cors());

  mongoose.connect(config.db_url);

  let routes = require('./routes');
  for (let route in routes) {
    app.use('/' + route, routes[route]);
  }

  app.listen(config.port);
}
