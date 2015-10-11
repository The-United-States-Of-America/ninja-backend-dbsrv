import { User, UserTypes } from './user';
import { MAdministrator } from './models';

/**
 * The Administrator defines the administrator table within the UHRNinja database
 */
export default class Administrator {

  /**
   * Create a new administrator after creating a new user.
   * @param {object} [user_obj] - The JSON User Object that is destructured then stored
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Administrator.create({
        firstName: 'Test',
        lastName: 'Admin',
        email: 'test@admin.com',
        password: 'test'
     })
   */
  static create(user_obj, cb) {
    User.create(UserTypes.ADMINISTRATOR, (user, err) => {
      if(err) return cb(null, err);
      user_obj.id = user.id;
      new MAdministrator(user_obj).save(null, {method: 'insert'})
      .then((user) => cb(user.toJSON()))
      .catch((err) => cb(null, err));
    });
  }

  /**
   * Get a user based on the user's email.
   * @param {String} [provider] - The user email to query.
   * @param {function} [cb] - Callback function that takes two argument (obj, err)
   * @example
   * Administrator.get('test@admin.com')
   */
  static get(provider, cb) {
    MAdministrator.where('email', provider).fetch()
    .then((user) => cb(user.toJSON()))
    .catch((err) => cb(null, err));
  }

}
