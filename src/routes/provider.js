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

    rtr.get('/get/:email', (req, res) => {
      Provider.get(req.params.email, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    rtr.post('/create', (req, res) => {
      Provider.create(req.body, (user, err) => {
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
