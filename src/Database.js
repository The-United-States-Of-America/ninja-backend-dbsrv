import knex from 'knex';
import bookshelf from 'bookshelf';

import config from './config';

var conn = knex({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : config.database.port,
    user     : config.database.user,
    password : config.database.pass,
    database : config.database.name,
    charset  : 'utf8'
  },
  pool: {
    min: 0,
    max: 1
  }
});

if(config.database.logging) conn.on('query', (query) => console.log(query));

export default bookshelf(conn);
