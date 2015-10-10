import { Client } from '../models/client';
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

    rtr.post('/create', (req, res) => {
      Client.create(req.body, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user.get({plain: true}));
      });
    });

    rtr.post('/get_invites', (req, res) => {
      FamilyRequests.get(req.body, (fams, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fams.get({plain: true}));
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
