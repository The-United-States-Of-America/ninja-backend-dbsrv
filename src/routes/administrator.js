import Administrator from '../models/administrator';
import OrganizationRequests from '../models/organizationrequests';

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
     *       "organization": {
     *         "id": "1",
     *         "name": "Primary Practice"
     *          ...
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

    /**
     * @api {get} /client/get_org_invtes/:admin_id Get a clients invites
     * @apiName GetOrgInvites
     * @apiGroup Provider
     *
     * @apiParam {Number} admin_id The admin ID we want invites for.
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": "1",
     *       "name": "Test Family"
     *     }
     * @apiSuccess {Object} result JSON Object representing the invite object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.get('/get_org_invites/:admin_id', (req, res) => {
      OrganizationRequests.get(req.params.admin_id, (orgs, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(orgs);
      });
    });

    /**
     * @api {post} /provider/accept_org_invite/ Accept a family invite
     * @apiName AcceptOrgInvites
     * @apiGroup Administrator
     *
     * @apiParam {Object} invite An object with the user and organization id.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "userId": 1,
     *       "organizationId": 3
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "success": true
     *     }
     * @apiSuccess {Object} result JSON Object with success as true.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/accept_org_invite', (req, res) => {
      OrganizationRequests.delete(req.body, (deleted, err) => {
        if(err) return res.status(400).send(err);
        else Administrator.joinOrganization(req.body, (user, err) => {
          if(err) return res.status(400).send(err);
          else return res.send(user);
        })
      });
    });

    /**
     * @api {post} /client/reject_org_invite/ Reject an organization invite
     * @apiName RejectOrgInvites
     * @apiGroup Administrator
     *
     * @apiParam {Object} invite An object with the user and organization id.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "userId": 1,
     *       "organizationId": 3
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "success": true
     *     }
     * @apiSuccess {Object} result JSON Object with success as true.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/reject_org_invite', (req, res) => {
      OrganizationRequests.delete(req.body, (deleted, err) => {
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
