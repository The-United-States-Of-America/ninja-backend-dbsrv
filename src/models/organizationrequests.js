import { MOrganizationRequests } from './models';

/**
 * The OrganizationRequests defines the organization requests table within the UHRNinja database
 */
export default class OrganizationRequests {

  /**
   * Create a new invite for a user into a organization.
   * @param {object} [orgreq_obj] - The JSON Org Request Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * OrganizationRequests.create({
        clientId: 1,
        organizationId: 3
     })
   */
  static create(orgreq_obj, cb) {
    new MOrganizationRequests(orgreq_obj).save(null, {method: 'insert'})
    .then((obj) => cb(obj.toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Get all the invites for a given user.
   * @param {number} [user_id] - The client id we want invites for
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * OrganizationRequests.get(1)
   */
  static get(user_id, cb) {
    MOrganizationRequests.where('userId', user_id).fetch({ withRelated: ['organization'] })
    .then((org) => cb(org.related('organization').toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Delete an invite for a given user.
   * @param {object} [query] - Query object
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * OrganizationRequests.delete({
        userId: 1,
        organizationId: 3
     })
   */
  static delete(query, cb) {
    new MOrganizationRequests(query).destroy()
    .then(() => cb({success: true}))
    .catch((err) => cb(null, err));
  }

}
