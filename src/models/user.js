import db from '../Database';
import Sequelize from 'Sequelize';

/**
 * The sequelize user model, so that we can create backrefs in other models.
 */
export const user = db.define('tb_User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },

  type_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'type_id'
  }
});

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
    user.create({type_id: t_id}).then(
      (user) => cb(user)
    );
  }
}
