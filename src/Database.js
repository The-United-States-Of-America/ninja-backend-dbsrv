import Sequelize from 'sequelize';
import config from './config';
/**
 * Database connection object
 */
export default new Sequelize(config.database.name, config.database.user, config.database.pass, {
  host: 'localhost',
  dialect: 'postgres',
  port: config.database.port,

  define: {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  },

  omitNull: true,
  logging: config.database.logging,

  pool: {
    max: 1,
    min: 0,
    idle: 10000
  },

});
