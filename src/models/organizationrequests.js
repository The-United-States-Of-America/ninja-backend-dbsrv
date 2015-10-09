import db from '../Database';
import { user } from '../user';
import { organization } from '../organization';

import Sequelize from 'sequelize';

/**
 * The sequelize family model, so that we can create backrefs in other models.
 */
const organizationrequests = db.define('tb_OrganizationRequests', {
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
    type: Sequelize.BIGINT,
    allowNull: false,
    field: 'organizationId',

    references: {
      model: organization,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  dateRequested: {
    type: Sequelize.DATE(),
    field: 'dateRequested',
    allowNull: false,
    defaultValue: Sequelize.NOW()
  }
});

/**
 * The OrganizationRequests defines the organization requests table within the UHRNinja database
 */
export default class OragnizationRequests {

  /**
   * OragnizationRequests create static function, used for inviting people into an organization.
   * @param {object} [orgreq_obj] - The JSON Organization Request Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * OragnizationRequests.create({
        userId: 1,
        orgId: 3
     })
   */
  static create(orgreq_obj, cb) {
    organizationrequests.create(orgreq_obj)
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
