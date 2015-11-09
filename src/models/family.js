import { MFamily } from './models';


/**
 * The Family defines the family table within the UHRNinja database
 */
export default class Family {

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
    new MFamily(fam_obj).save(null, {method: 'insert'})
    .then((fam) => cb(fam.toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Get all the family members
   * @param {Number} [id] - The family id.
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Family.getMembers(1)
   */
  static getMembers(id, cb) {
    MFamily.where('id', id).fetch({withRelated: ['members']})
    .then((fam) => cb(fam.related('members').toJSON()))
    .catch((err) => cb(null, err));
  }
}
