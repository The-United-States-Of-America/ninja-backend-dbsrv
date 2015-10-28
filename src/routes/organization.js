import Organization from '../models/organization';
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

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
