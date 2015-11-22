import Express from 'express'

const rtr = Express.Router();

/**
 * FileRoute serves all file related endpoints.
 */
export default class FileRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    /**
     * @api {post} /file/upload/ Upload a file to the server
     * @apiName UploadFile
     * @apiGroup File
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "success": true
     *     }
     * @apiSuccess {Object} result Success object
     * @apiError {String} err An error statement regarding what went wrong.
     */
    rtr.post('/upload', (req, res) => {
      for (let appt_id in req.files) {
        fs.readFile(req.files[appt_id].path, function (err, data) {
          console.log(err);
          var newPath = process.cwd() + "/files/" + appt_id + "/" + req.files[appt_id].name;
          fs.writeFile(newPath, data, function (err) {
            console.log(err);
            res.send({success: true});
          });
        });
      }
    });

    rtr.get('/list/:id', (req, res) => {
      fs.readdir(process.cwd() + "/files/" + req.params.id, function(err, items) {
          res.send(items);
      });
    });

    rtr.get('/get/:id/:name', (req, res) => {
      res.download(process.cwd() + "/files/" + req.params.id + "/" + req.params.name)
    })

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
