import Client from '../models/client';
import FamilyRequests from '../models/familyrequests';

import Express from 'express'
const rtr = Express.Router();

/**
 * ClientRoute serves all patient related endpoints.
 */
export default class ClientRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {
    /**
     * @api {get} /client/get/:email Request Client information
     * @apiName GetClient
     * @apiGroup Client
     *
     * @apiParam {String} email Clients unique email.
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
     * @apiSuccess {Object} result JSON Object representing the client object in the database.
     * @apiError {String} err A statement that the requested email was invalid.
     */
    rtr.get('/get/:email', (req, res) => {
      Client.get(req.params.email, (user, err) => {
        if(err) return res.status(400).send("Requested e-mail is invalid.");
        if(!Object.keys(user).length) return res.status(400).send("The e-mail is invalid.");
        else return res.send(user);
      });
    });

    /**
     * @api {post} /client/create/ Create New Client
     * @apiName CreateUser
     * @apiGroup Client
     *
     * @apiParam {Object} user The user object that you want to create.
     * @apiParamExample {json} Request-Example:
     *     {
     *       {
     *         "ssn": 123456789,
     *         "firstName": 'Pranav',
     *         "lastName": 'Sathy',
     *         "email": 'sathyp@rpi.edu',
     *         "password": 'test'
     *       }
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": "1",
     *       "ssn": "123456789",
     *       "firstName": "Pranav",
     *       "lastName": "Sathy",
     *       "email": "sathyp@rpi.edu",
     *       "password": "test"
     *     }
     * @apiSuccess {Object} result JSON Object representing the client object in the database.
     * @apiError {String} err An error statment regarding what went wrong.
     */
    rtr.post('/create', (req, res) => {
      Client.create(req.body, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    rtr.post('/get_invites', (req, res) => {
      FamilyRequests.get(req.body, (fams, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fams);
      });
    });

    rtr.post('/accept_invite', (req, res) => {
      FamilyRequests.delete(req.body, (deleted, err) => {
        if(err) return res.status(400).send(err);
        else Client.joinFamily(req.body, (user, err) => {
          if(err) return res.status(400).send(err);
          else return res.send(user);
        })
      });
    });

    rtr.post('/reject_invite', (req, res) => {
      FamilyRequests.delete(req.body, (deleted, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(deleted);
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
