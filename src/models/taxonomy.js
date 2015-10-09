import db from '../Database';

import Sequelize from 'sequelize';

/**
 * The sequelize family model, so that we can create backrefs in other models.
 */
export const taxonomy = db.define('tb_Taxonomy', {
  code: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    field: 'code'
  },

  type: {
    type: Sequelize.STRING(512),
    allowNull: false,
    field: 'type'
  },

  classification: {
    type: Sequelize.STRING(512),
    allowNull: false,
    field: 'classification'
  },

  specialization: {
    type: Sequelize.STRING(512),
    allowNull: false,
    field: 'specialization'
  }
});

/**
 * The Taxonomy defines the taxonomy table within the UHRNinja database
 */
export class Taxonomy {

  /**
   * Get Taxonomy objects.
   * @param {object} [tax_code_obj] - The JSON Taxonomy Object used to query.
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Taxonomy.get({
        name: 'Smith Family'
     })
   */
  static get(tax_code_obj, cb) {
    cb(null, "Not implemented yet");
  }

}
