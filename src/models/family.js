import db from '../Database';

import Sequelize from 'sequelize';

/**
 * The sequelize family model, so that we can create backrefs in other models.
 */
export const family = db.define('tb_Family', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },

  name: {
    type: Sequelize.STRING(128),
    allowNull: false,
    field: 'name'
  }
});

/**
 * The Family defines the family table within the UHRNinja database
 */
export class Family {

  /**
   * Family create static function, facilitates creation of new families.
   * @param {object} [fam_obj] - The JSON Family Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Family.create({
        name: 'Smith Family'
     })
   */
  static create(fam_obj, cb) {
    family.create(fam_obj)
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
