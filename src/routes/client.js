import Client from '../models/client';
import Express from 'express'

const rtr = Express.Router();

/**
 * Client class serves all patient related endpoints.
 */
export default class ClientRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    rtr.post('/create_user', (req, res) => {
      Client.create(req.body, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user.get({plain: true}));
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
