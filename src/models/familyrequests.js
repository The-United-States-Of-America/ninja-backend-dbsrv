import db from '../Database';
import { Family } from './family';

import Sequelize from 'sequelize';

const familyrequests = db.define('tb_FamilyRequests', {
  clientId: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    field: 'clientId',

    references: {
      model: "tb_Client",
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  familyId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    field: 'familyId',

    references: {
      model: "tb_Family",
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
   * Create a new invite for a user into a family.
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

  /**
   * Get all the invites for a given user.
   * @param {object} [query] - Query object
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * FamilyRequests.get({
        clientId: 1
     })
   * @example
   * FamilyRequests.get({
        familyId: 3
     })
   */
  static get(query, cb) {
    familyrequests.findById(query.clientId)
    .then((fam) => Family.get(fam.familyId, cb))
    .catch((err) => cb(null, err));
  }

}
