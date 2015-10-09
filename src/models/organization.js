import db from '../Database';

import Sequelize from 'sequelize';

/**
 * The sequelize organization model, so that we can create backrefs in other models.
 */
export const organization = db.define('tb_Organization', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },

  name: {
    type: Sequelize.STRING(128),
    allowNull: false,
    field: 'name',
    unique: true
  },

  state: {
    type: Sequelize.STRING(2),
    allowNull: false,
    field: 'state'
  },

  address: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    field: 'address'
  },

  zip: {
    type: Sequelize.STRING(5),
    allowNull: false,
    field: 'zip'
  },

  phone: {
    type: Sequelize.STRING(16),
    allowNull: false,
    field: 'phone'
  }
});

/**
 * The Organization defines the organization table within the UHRNinja database
 */
export class Organization {

  /**
   * Organization create static function, facilitates creation of new organizations.
   * @param {object} [org_obj] - The JSON Organization Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Organization.create({
        name: 'Primary Practice',
        state: 'NY',
        address: '123 Test Lane',
        zip: '12345',
        phone: '1234567890'
     })
   */
  static create(org_obj, cb) {
    organization.create(org_obj)
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
