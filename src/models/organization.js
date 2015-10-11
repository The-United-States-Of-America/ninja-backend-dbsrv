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
}
