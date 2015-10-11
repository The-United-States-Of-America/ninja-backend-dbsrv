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
      console.log(req.params.email);
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

    rtr.post('/assignSpecialization', (req, res) => {
      Provider.assignSpecialization(req.body, (spec, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(spec);
      })
    })

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
