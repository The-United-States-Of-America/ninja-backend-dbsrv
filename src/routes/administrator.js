import Administrator from '../models/administrator';

import Express from 'express'
const rtr = Express.Router();

/**
 * AdministratorRoute serves all administrator related endpoints.
 */
export default class AdministratorRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {
    /**
     * @api {get} /admin/get/:email Request Administrator information
     * @apiName GetAdmin
     * @apiGroup Administrator
     *
     * @apiParam {String} email Admins unique email.
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": "1",
     *       "ssn": "123456789",
     *       "familyId": "1",
     *       "firstName": "Pranav",
     *       "lastName": "Sathy",
     *       "email": "sathyp@rpi.edu",
     *       "password": "test",
     *       "family": {
     *         "id": "1",
     *         "name": "Test Family"
     *       }
     *     }
     *
     * @apiSuccess {Object} result JSON Object representing the admin object in the database.
     * @apiError {String} err A statement that the requested email was invalid.
     */
    rtr.get('/get/:email', (req, res) => {
      Administrator.get(req.params.email, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    /**
     * @api {post} /admin/create/ Create New Administrator
     * @apiName CreateAdmin
     * @apiGroup Administrator
     *
     * @apiParam {Object} user The user object that you want to create.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "firstName": 'Pranav',
     *       "lastName": 'Sathy',
     *       "email": 'sathyp@rpi.edu',
     *       "password": 'test'
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": "1",
     *       "firstName": "Pranav",
     *       "lastName": "Sathy",
     *       "email": "sathyp@rpi.edu",
     *       "password": "test"
     *     }
     * @apiSuccess {Object} result JSON Object representing the admin object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/create', (req, res) => {
      Administrator.create(req.body, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
