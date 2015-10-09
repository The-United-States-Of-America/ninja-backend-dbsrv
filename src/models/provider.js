import db from '../Database';
import { user, User, UserTypes } from './user';

import Sequelize from 'sequelize';

/**
 * The sequelize provider model, so that we can create backrefs in other models.
 */
export const provider = db.define('tb_Provider', {
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

  npi: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true,
    field: 'npi'
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
  },

  prefix: {
    type: Sequelize.STRING(16),
    allowNull: false,
    field: 'password'
  }
});

/**
 * The Provider defines the doctor table within the UHRNinja database
 */
export class Provider {

  /**
   * Provider create static function, facilitates creation of new User and Provider.
   * @param {object} [user_obj] - The JSON User Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Provider.create({
        ssn: 123456789,
        npi: 123456789,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: 'test',
        prefix: 'Mr.'
     })
   */
  static create(user_obj, cb) {
    User.create(UserTypes.PATIENT, (user) => {
      user_obj.id = user.id;
      provider.create(user_obj)
      .then((obj) => cb(obj))
      .catch((err) => cb(null, err));
    });
  }

}
