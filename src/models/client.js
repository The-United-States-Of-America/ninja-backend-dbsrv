import { User, UserTypes } from './user';
import { MClient } from './models';

/**
 * The Client defines the patient table within the UHRNinja database
 */
export default class Client {

  /**
   * Create a new client after creating a new user.
   * @param {object} [user_obj] - The JSON User Object that is destructured then stored
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Client.create({
        ssn: 123456789,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: 'test'
     })
   */
  static create(user_obj, cb) {
    User.create(UserTypes.PATIENT, (user, err) => {
      if(err) return cb(null, err);
      user_obj.id = user.id;
      new MClient(user_obj).save(null, {method: 'insert'})
      .then((user) => cb(user.toJSON()))
      .catch((err) => cb(null, err));
    });
  }

  /**
   * Get a user based on the user's email.
   * @param {String} [clientEmail] - The user email to query.
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Client.get('sathyp@rpi.edu')
   */
  static get(clientEmail, cb) {
    MClient.where('email', clientEmail).fetch({withRelated: ['family', 'organizations']})
    .then((user) => cb(user.toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Join a family.
   * @param {object} [query_obj] - Query object that houses the client ID and familyID
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Client.joinFamily({
        clientId: 1,
        familyId: 1
     })
   */
  static joinFamily(query_obj, cb) {
    new MClient({
      id: query_obj.clientId,
      familyId: query_obj.familyId
    }).save()
    .then(() => cb({success: true}))
    .catch((err) => cb(null, err));
  }

  /**
   * Let a client join an organization.
   * @param {object} [query_obj] - Object containing userId and organizationId
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Client.joinOrganization({
       userId: 1,
       organizationId: 3
     })
   */
  static joinOrganization(query_obj, cb) {
    MClient.where('id', query_obj.userId).fetch({withRelated: ['organizations']})
    .then((user) => {
      user.organizations().attach({
        organizationId: query_obj.organizationId
      })
      .then(() => cb({success: true}))
      .catch((err) => cb(null, err));
    })
    .catch((err) => cb(null, err));
  }

}
