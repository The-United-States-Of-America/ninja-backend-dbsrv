import { MFamilyRequests } from './models';

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
    new MFamilyRequests(famreq_obj).save(null, {method: 'insert'})
    .then((obj) => cb(obj.toJSON()))
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
   */
  static get(query, cb) {
    MFamilyRequests.where('clientId', query.clientId).fetch({withRelated: ['family']})
    .then((fam) => cb(fam.related('family').toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Delete an invite for a given user.
   * @param {object} [query] - Query object
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * FamilyRequests.delete({
        clientId: 1
     })
   */
  static delete(query, cb) {
    cb(null, 'Not implemented yet');
    // familyrequests.destroy({where: {clientId: query.clientId}})
    // .then((destroyed) => cb(destroyed))
    // .catch((err) => cb(null, err));
  }

}
