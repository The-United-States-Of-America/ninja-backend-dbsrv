import Appointments from '../models/appointments';
import Express from 'express'

const rtr = Express.Router();

/**
 * FamilyRoute serves all family related endpoints.
 */
export default class AppointmentRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    /**
     * @api {post} /appt/create/ Create New Appointment
     * @apiName CreateAppointment
     * @apiGroup Appointments
     *
     * @apiParam {number} clientId The ID of the client
     * @apiParam {number} providerId The ID of the provider
     * @apiParam {number} state [1: Requested, 2: Modified, 3: Approved]
     * @apiParam {string} info Miscellaenous pre-appt information
     * @apiParam {string} comments Doctor comments for the appointments.

     * @apiSuccess {Object} result JSON object of the appointment.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/create', (req, res) => {
      Appointments.create(req.body, (fam, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fam);
      });
    });

    /**
     * @api {post} /appt/update/ Update An Appointment
     * @apiName UpdateAppointment
     * @apiGroup Appointments
     *
     * @apiParam {object} query An object with clientId, providerId and dateRequested
     * @apiParam {object} update An object with [optional], info, comments, dateRequested, state

     * @apiSuccess {Object} result JSON object of the updated appointment.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/update', (req, res) => {
      Appointments.update(req.body.query, req.body.update, (fam, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fam);
      });
    });

    /**
     * @api {get} /appt/client/:id Get appointments for a client
     * @apiName GetClientAppts
     * @apiGroup Appointments
     *
     * @apiParam {number} id Id of the client we want appointments for
     * @apiSuccess {Object} result JSON object with all appointments.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.get('/client/:id', (req, res) => {
      Appointments.client_appointments(req.params.id, (fam, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fam);
      });
    });

    /**
     * @api {get} /appt/provider/:id Get appointments for a provider
     * @apiName GetProviderAppts
     * @apiGroup Appointments
     *
     * @apiParam {number} id Id of the provider we want appointments for
     * @apiSuccess {Object} result JSON object with all appointments.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.get('/provider/:id', (req, res) => {
      Appointments.provider_appointments(req.params.id, (fam, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fam);
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
