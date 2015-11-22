import { MOrganization } from './models';


/**
 * The Organization defines the organization table within the UHRNinja database
 */
export default class Organization {

  /**
   * Create a new organization
   * @param {object} [org_obj] - The JSON Family Object that is destructured then stores
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Organization.create({
        name: 'Primary Provider',
        state: 'NY',
        address: '123 Test Lane',
        zip: '12345',
        phone: '123456790'
     })
   */
  static create(org_obj, cb) {
    new MOrganization(org_obj).save(null, {method: 'insert'})
    .then((org) => cb(org.toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Get all the doctors in a given organization
   * @param {number} [org_id] - Get all the doctors within an organization
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Organization.get_providers(org_id)
   */
  static get_providers(org_id, cb) {
    MOrganization.where('id', org_id).fetch({withRelated: ['providers']})
    .then((org) => cb(org.related('providers').toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Get all the people in a given organization
   * @param {number} [org_id] - Get all the people within an organization
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Organization.get_all(org_id)
   */
  static get_all(org_id, cb) {
    MOrganization.where('id', org_id).fetch({withRelated: ['providers', 'clients', 'admins']})
    .then((org) => cb(org.toJSON()))
    .catch((err) => cb(null, err));
  }
}
