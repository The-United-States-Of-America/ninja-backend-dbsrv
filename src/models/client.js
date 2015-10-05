import db from '../Database';
import { user, User, UserTypes } from './user';

import Sequelize from 'sequelize';

const client = db.define('tb_Client', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',

    references: {
      model: user,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  ssn: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true,
    field: 'ssn'
  },

  firstName: {
    type: Sequelize.STRING(64),
    allowNull: false,
    field: 'firstName'
  },

  lastName: {
    type: Sequelize.STRING(64),
    allowNull: false,
    field: 'lastName'
  },

  email: {
    type: Sequelize.STRING(64),
    allowNull: false,
    unique: true,
    field: 'email'
  },

  password: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    field: 'password'
  }
});

/**
 * The Client defines the patient table within the UHRNinja database
 */
export default class Client {

  /**
   * Client create static function, facilitates creation of new User and Client.
   * @param {object} [user_obj] - The JSON User Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Client.create({
        ssn: 123456789,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: 'test'
     })
   */
  static create(user_obj, cb) {
    User.create(UserTypes.PATIENT, (user) => {
      user_obj.id = user.id;
      client.create(user_obj)
      .then((obj) => cb(obj))
      .catch((err) => cb(null, err));
    });
  }

}
