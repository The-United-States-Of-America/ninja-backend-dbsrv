import db from '../Database';
import { provider } from '../provider';
import { taxonomy } from '../taxonomy';

import Sequelize from 'sequelize';

const refProviderTaxonomy = db.define('tb_RefProviderTaxonomy', {
  providerId: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    field: 'providerId',

    references: {
      model: provider,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  taxonomyCode: {
    type: Sequelize.STRING(16),
    allowNull: false,
    field: 'taxonomyCode',

    references: {
      model: taxonomy,
      key: 'code',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
});

/**
 * The RefProviderTaxonomy defines the relationship between doctors and their specializations
 */
export default class RefProviderTaxonomy {

  /**
   * Creates a relation between a doctor and a taxonomy code.
   * @param {object} [ref_obj] - The JSON relational object that ties a doctor and taxonomy code
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * RefProviderTaxonomy.create({
        providerId: 1,
        taxonomyCode: 'USDA-123888X'
     })
   */
  static create(ref_obj, cb) {
    refProviderTaxonomy.create(ref_obj)
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
