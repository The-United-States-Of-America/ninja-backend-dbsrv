import Client from '../models/client';
import FamilyRequests from '../models/familyrequests';

import Express from 'express'
const rtr = Express.Router();


// rtr.post('/test', (req, res) => {
//   TestClient.where('id', 1).fetch({withRelated: ['family.members']}).then(function(user) {
//     console.log(user.toJSON());
//     console.log(user.related('family').toJSON());
//   }).catch(function(err) {
//     console.error(err);
//   });
//   res.send("TEST");
// });

/**
 * ClientRoute serves all patient related endpoints.
 */
export default class ClientRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    rtr.get('/get/:id', (req, res) => {
      Client.get(req.params.id, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    rtr.post('/create', (req, res) => {
      Client.create(req.body, (user, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(user);
      });
    });

    rtr.post('/get_invites', (req, res) => {
      FamilyRequests.get(req.body, (fams, err) => {
        if(err) return res.status(400).send(err);
        else return res.send(fams);
      });
    });
    //
    // rtr.post('/accept_invite', (req, res) => {
    //   FamilyRequests.delete(req.body, (deleted, err) => {
    //     if(err) return res.status(400).send(err);
    //     else Client.joinFamily(req.body, (user, err) => {
    //       if(err) return res.status(400).send(err);
    //       else return res.send({ accepted: deleted });
    //     })
    //   });
    // });
    //
    // rtr.post('/reject_invite', (req, res) => {
    //   FamilyRequests.delete(req.body, (deleted, err) => {
    //     if(err) return res.status(400).send(err);
    //     else return res.send({ rejected: deleted });
    //   });
    // });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
