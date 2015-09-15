module.exports = {
  development: {
    db_port: 27017,
    db_url: 'mongodb://user:pass@host/db',
    port: 8000
  },
  production: {
    db_port: process.env.DB_PORT,
    db_url: process.env.DB_URL,
    port: process.env.PORT
  }
};
