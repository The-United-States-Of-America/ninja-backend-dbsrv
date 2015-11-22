import Organization from '../models/organization';
import OrganizationRequests from '../models/organizationrequests'
import Express from 'express'

const rtr = Express.Router();

/**
 * OrganizationRoute serves all organization related endpoints.
 */
export default class OrganizationRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    /**
     * @api {post} /organization/create/ Create New Organization
     * @apiName CreateOrganization
     * @apiGroup Organization
     *
     * @apiParam {Object} org The org object that you want to create.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "name": 'Primary Health Care',
     *       "state": 'NY',
     *       "address": '123 Test Lane',
     *       "zip": '12345',
     *       "phone": "1234567890"
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": 1,
     *       "name": 'Primary Health Care',
     *       "state": 'NY',
     *       "address": '123 Test Lane',
     *       "zip": '12345',
     *       "phone": "1234567890"
     *     }
     * @apiSuccess {Object} result JSON Object representing the organization object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/create', (req, res) => {
      Organization.create(req.body, (org, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(org);
      });
    });

    /**
     * @api {post} /organization/invite/ Invite a user to an organization
     * @apiName InviteOrganization
     * @apiGroup Organization
     *
     * @apiParam {Object} invite The user id and organization id to send invites for.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "userId": 1,
     *       "organizationId": 3
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "userId": 1,
     *       "organizationId": 3
     *     }
     * @apiSuccess {Object} result JSON Object representing the invite object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/invite', (req, res) => {
      OrganizationRequests.create(req.body, (invite, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(invite);
      });
    });

    /**
     * @api {get} /organization/providers/:org_id Get all doctors in an organization
     * @apiName GetDoctors
     * @apiGroup Organization
     *
     * @apiParam {number} org_id The organization ID to get doctors for
     * @apiSuccess {Object} result JSON Object with array of doctors.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.get('/providers/:org_id', (req, res) => {
      Organization.get_providers(req.params.org_id, (providers, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(providers);
      });
    });

    /**
     * @api {get} /organization/get/:org_id Get all people in an organization
     * @apiName GetPeople
     * @apiGroup Organization
     *
     * @apiParam {number} org_id The organization ID to get people for
     * @apiSuccess {Object} result JSON Object with the whole.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.get('/get/:org_id', (req, res) => {
      Organization.get_all(req.params.org_id, (org, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(org);
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
