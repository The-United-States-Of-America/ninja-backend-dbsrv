import Provider from '../models/provider';

import Express from 'express'
const rtr = Express.Router();

/**
 * ProviderRoute serves all provider related endpoints.
 */
export default class ProviderRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    /**
     * @api {get} /provider/get/:email Request Provider information
     * @apiName GetProvider
     * @apiGroup Provider
     *
     * @apiParam {String} email Provider unique email.
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
     *       "organization": {
     *         "id": "1",
     *         "name": "Primary Provider",
     *         "state": "NY",
     *         "address": "123 Test Lane",
     *         "zip": "12345",
     *         "phone": "123456790"
     *       },
     *       "specializations": [
     *         {
     *           "code": "Some long code",
                 "specialization": "Surgeon"
     *         }
     *       ]
     *     }
     *
     * @apiSuccess {Object} result JSON Object representing the admin object in the database.
     * @apiError {String} err A statement that the requested email was invalid.
     */
    rtr.get('/get/:email', (req, res) => {
      console.log(req.params.email);
      Provider.get(req.params.email, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    /**
     * @api {post} /provider/create/ Create New Provider
     * @apiName CreateProvider
     * @apiGroup Provider
     *
     * @apiParam {Object} user The user object that you want to create.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "ssn": 123456789,
     *       "npi": 123456789,
     *       "firstName": "Pranav",
     *       "lastName": "Sathy",
     *       "email": "sathyp@rpi.edu",
     *       "password": "test",
     *       "prefix": "Dr."
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": "1",
     *       "ssn": 123456789,
     *       "npi": 123456789,
     *       "firstName": "Pranav",
     *       "lastName": "Sathy",
     *       "email": "sathyp@rpi.edu",
     *       "password": "test",
     *       "prefix": "Dr."
     *     }
     * @apiSuccess {Object} result JSON Object representing the provider object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/create', (req, res) => {
      Provider.create(req.body, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    /**
     * @api {post} /provider/assignSpecialization/ Assign a Specializatoin to Doctors
     * @apiName CreateProvider
     * @apiGroup Provider
     *
     * @apiParam {Object} assignment The object with provider email and their code.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "email": "test@provider.com",
     *       "code": "101YA0400X"
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       success: true
     *     }
     * @apiSuccess {Object} result JSON Object with success variable set to true.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/assignSpecialization', (req, res) => {
      Provider.assignSpecialization(req.body, (spec, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(spec);
      })
    })

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
