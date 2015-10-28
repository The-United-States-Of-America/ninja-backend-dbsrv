import Family from '../models/family';
import FamilyRequests from '../models/familyrequests';
import Express from 'express'

const rtr = Express.Router();

/**
 * FamilyRoute serves all family related endpoints.
 */
export default class FamilyRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    /**
     * @api {post} /family/create/ Create New Family
     * @apiName CreateFamily
     * @apiGroup Family
     *
     * @apiParam {Object} family The family object that you want to create.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "name": "Test Family",
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": 1,
     *       "name": "Test Family"
     *     }
     * @apiSuccess {Object} result JSON Object representing the family object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/create', (req, res) => {
      Family.create(req.body, (fam, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fam);
      });
    });

    /**
     * @api {post} /family/invite/ Invite a user to a family
     * @apiName InviteFamily
     * @apiGroup Family
     *
     * @apiParam {Object} invite The client id and family id to send invites for.
     * @apiParamExample {json} Request-Example:
     *     {
     *       "clientId": 1,
     *       "familyId": 3
     *     }
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": 1,
     *       "familyId": 3
     *     }
     * @apiSuccess {Object} result JSON Object representing the invite object in the database.
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/invite', (req, res) => {
      FamilyRequests.create(req.body, (invite, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(invite);
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
