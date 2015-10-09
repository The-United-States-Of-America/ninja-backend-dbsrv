import db from '../Database';
import { user } from '../user';
import { organization } from '../organization';

import Sequelize from 'sequelize';

const refUserOrganization = db.define('tb_RefUserOrganization', {
  userId: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    field: 'userId',

    references: {
      model: user,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  organizationId: {
    type: Sequelize.STRING(16),
    allowNull: false,
    primaryKey: true,
    field: 'organizationId',

    references: {
      model: organization,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  dateJoined: {
    type: Sequelize.DATE(),
    field: 'dateJoined',
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.NOW()
  },

  dateLeft: {
    type: Sequelize.DATE(),
    field: 'dateLeft',
    allowNull: true
  }
});

/**
 * The RefUserOrganization defines the relationship between users and their organizations
 */
export default class RefUserOrganization {

  /**
   * Creates a relation between a user and an organization.
   * @param {object} [ref_obj] - The JSON relational object that ties a user and org
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * RefUserOrganization.create({
        userId: 1,
        organizationId: 3
     })
   */
  static create(ref_obj, cb) {
    refUserOrganization.create(ref_obj)
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
