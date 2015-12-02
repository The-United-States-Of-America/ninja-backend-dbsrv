import { MAppointments } from './models';
import Bookshelf from '../Database.js';
// /**
//  * The AppointmentTypes enum that corresponds to the tb_UserType in the database
//  */
// export const AppointmentTypes = {
//   REQUESTED: 1,
//   MODIFIED: 2,
//   APPROVED: 3
// }

/**
 * The User defines the total user supertable.
 */
export default class AppointmentsRoute {
  /**
   * Creates a new appointment, and returns it.
   * @param {object} query_obj - The entire appointment object
   * @param {function} cb - Callback function that takes one argument (user)
   * @example
   * Appointments.create({
       clientId: 1,
       providerId: 3,
       state: 1,
       info: "",
       comments: ""
     });
   */
  static create(query_obj, cb) {
    new MAppointments(query_obj).save(null, {method: 'insert'})
    .then( (appt) => cb(appt.toJSON()) )
    .catch( (err) => cb(null, err) );
  }

  /**
   * Update a previously made appointment.
   * @param {object} query_obj - Must have the clientId, providerId and dateRequested, then modified fields
   * @param {object} update_obj - The fields we want to update on the given model
   * @param {function} cb - Callback function that takes one argument (user)
   * @example
   * Appointments.update({
       clientId: 1,
       providerId: 3,
       dateRequested: 2015-02-11
     }, {
       comments: "I do not think I will be able to make this day",
       state: 2
     });
   */
  static update(query_obj, update_obj, cb) {
    new MAppointments(query_obj).save(update_obj, {method: 'update'})
    .then( (appt) => cb(appt.toJSON()) )
    .catch( (err) => cb(null, err) );
  }

  /**
   * Get all appointments for a client.
   * @param {number} client_id - The client id we want appointments for
   * @param {function} cb - Callback function that takes one argument (user)
   * @example
   * Appointments.client_appointments(1);
   */
  static client_appointments(client_id, cb) {
    // new MAppointments().where('clientId', client_id).fetchAll({withRelated: ['provider']})
    // .then( (appts) => {
    //   console.log(appts)
    //   cb(appts.toJSON())
    // })
    // .catch( (err) => cb(null, err) );
    Bookshelf.knex.raw('SELECT * from "tb_Appointments" WHERE "clientId" = \'' + client_id + '\'').then((appts) => {
      var ret = []
      for(let i = 0; i < appts.rows.length; i++) {
        Bookshelf.knex.raw('SELECT * from "tb_Provider" WHERE "id" = \'' + appts.rows[i].providerId + '\'').then((provider) => {
          appts.rows[i].provider = provider.rows[0]
          ret.push(appts.rows[i]);
          if(i == appts.rows.length - 1) cb(ret);
        });
      }
      if(appts.rows.length === 0) cb(ret);
    })
    .catch( (err) => cb(null, err) );
  }

  /**
   * Get all appointments for a provider.
   * @param {number} provider_id - The provider id we want appointments for
   * @param {function} cb - Callback function that takes one argument (user)
   * @example
   * Appointments.provider_appointments(3);
   */
  static provider_appointments(provider_id, cb) {
    // new MAppointments().where('providerId', provider_id).fetchAll({withRelated: ['client']})
    // .then( (appts) => cb(appts.toJSON()) )
    // .catch( (err) => cb(null, err) );
    Bookshelf.knex.raw('SELECT * from "tb_Appointments" WHERE "providerId" = \'' + provider_id + '\'').then((appts) => {
      var ret = []
      for(let i = 0; i < appts.rows.length; i++) {
        Bookshelf.knex.raw('SELECT * from "tb_Client" WHERE "id" = \'' + appts.rows[i].clientId + '\'').then((client) => {
          appts.rows[i].client = client.rows[0]
          ret.push(appts.rows[i]);
          if(i == appts.rows.length - 1) cb(ret);
        });
      }
      if(appts.rows.length === 0) cb(ret);
    })
    .catch( (err) => cb(null, err) );
  }
}
