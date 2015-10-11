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
