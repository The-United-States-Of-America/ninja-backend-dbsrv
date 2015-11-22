import Express from 'express'
import fs from 'fs'
import multer from 'multer'
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
    rtr.post('/upload/:id', multer({ dest: './files/'}).single('doc'), (req, res) => {
      fs.readFile(process.cwd() + '/files/' + req.file.filename, function (err, data) {
        if(err) res.status(500).send(err);
        try {
          fs.mkdirSync(process.cwd() + '/files/' + req.params.id);
        } catch(e) {}

        var newPath = process.cwd() + "/files/" + req.params.id + "/" + req.file.originalname;
        fs.writeFile(newPath, data, function (err) {
          if(err) res.status(500).send(err);
          fs.unlinkSync(process.cwd() + '/files/' + req.file.filename);
          res.send({success: true});
        });
      });
    });

    rtr.get('/list/:id', (req, res) => {
      try {
        fs.mkdirSync(process.cwd() + '/files/' + req.params.id);
      } catch(e) {}
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
