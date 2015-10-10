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

    rtr.post('/create', (req, res) => {
      Family.create(req.body, (fam, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fam);
      });
    });

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
