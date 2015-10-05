const config = {
  development: {
    port: 8000,
    database: {
      name: 'ninja_db',
      user: 'uhrninja',
      pass: 'uhrninja',

      port: 15432,
      logging: false //console.log to turn on
    }
  },
  production: {
    port: process.env.PORT,
    database: {
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,

      port: process.env.DB_PORT,
      logging: false
    }
  }
  travis: {
    port: 3000,
    database: {
      name: 'ninja_db',
      user: 'postgres',
      pass: '',

      port: 5432,
      logging: false
    }
  }
};

/**
 * Export our configuration for the environment based on environment variable
 * NODE_ENV
 */
export default config[process.env.NODE_ENV || 'development'];
