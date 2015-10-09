import db from '../Database';
import { client } from '../client';
import { family } from '../family';

import Sequelize from 'sequelize';

/**
 * The sequelize family model, so that we can create backrefs in other models.
 */
const familyrequests = db.define('tb_FamilyRequests', {
  clientId: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    field: 'clientId',

    references: {
      model: client,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  familyId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    field: 'familyId',

    references: {
      model: family,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
});

/**
 * The FamilyRequests defines the family requests table within the UHRNinja database
 */
export default class FamilyRequests {

  /**
   * FamilyRequests create static function, used for inviting people into a family.
   * @param {object} [famreq_obj] - The JSON Family Request Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * FamilyRequests.create({
        clientId: 1,
        familyId: 3
     })
   */
  static create(famreq_obj, cb) {
    familyrequests.create(famreq_obj)
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
