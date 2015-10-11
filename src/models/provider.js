import { User, UserTypes } from './user';
import { MProvider } from './models';

/**
 * The Provider defines the provider table within the UHRNinja database
 */
export default class Provider {

  /**
   * Create a new provider after creating a new user.
   * @param {object} [user_obj] - The JSON User Object that is destructured then stored
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Provider.create({
        ssn: 123456789,
        npi: 123456789,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: 'test',
        prefix: 'Mr.'
     })
   */
  static create(user_obj, cb) {
    User.create(UserTypes.PROVIDER, (user, err) => {
      if(err) return cb(null, err);
      user_obj.id = user.id;
      new MProvider(user_obj).save(null, {method: 'insert'})
      .then((user) => cb(user.toJSON()))
      .catch((err) => cb(null, err));
    });
  }

  /**
   * Get a user based on the user's email.
   * @param {String} [provider] - The user email to query.
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Provider.get('sathyp@rpi.edu')
   */
  static get(provider, cb) {
    MProvider.where('email', provider).fetch()
    .then((user) => cb(user.toJSON()))
    .catch((err) => cb(null, err));
  }

}
