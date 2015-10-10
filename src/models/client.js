import { User, UserTypes } from './user';
import { MClient } from './models';

/**
 * The Client defines the patient table within the UHRNinja database
 */
export default class Client {

  /**
   * Create a new client after creating a new user.
   * @param {object} [user_obj] - The JSON User Object that is destructured then stores
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
   * Get a user based on the user ID.
   * @param {number} [clientId] - User object with the user ID.
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Client.get(1)
   */
  static get(clientId, cb) {
    MClient.where('id', clientId).fetch({withRelated: ['family']})
    .then((user) => cb(user.toJSON()))
    .catch((err) => cb(null, err));
  }

  /**
   * Join a family.
   * @param {object} [query_obj] - Query object that houses the client ID
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
    .then((obj) => cb(obj))
    .catch((err) => cb(null, err));
  }

}
