import { MUser } from './models';

/**
 * The UserTypes enum that corresponds to the tb_UserType in the database
 */
export const UserTypes = {
  PATIENT: 1,
  PROVIDER: 2,
  ADMINISTRATOR: 3
}

/**
 * The User defines the total user supertable.
 */
export class User {
  /**
   * Creates a new user, and returns the ID.
   * @param {integer} t_id - The type id from the UserTypes enum
   * @param {function} cb - Callback function that takes one argument (user)
   * @example
   * User.create(UserTypes.PATIENT);
   */
  static create(t_id, cb) {
    new MUser({type_id: t_id}).save()
    .then( (user) => cb(user.toJSON()) )
    .catch( (err) => cb(null, err) );
  }
}
