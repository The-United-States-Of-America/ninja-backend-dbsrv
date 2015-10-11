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

    rtr.get('/get/:email', (req, res) => {
      Administrator.get(req.params.email, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

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
