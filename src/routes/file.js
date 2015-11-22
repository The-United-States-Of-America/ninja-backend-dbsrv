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
      // console.log(req.files)
      // for (let appt_id in req.files) {
      fs.readFile(process.cwd() + '/files/' + req.file.filename, function (err, data) {
        console.log(err);
        var newPath = process.cwd() + "/files/" + req.params.id + "/" + req.file.originalname;
        fs.writeFile(newPath, data, function (err) {
          console.log(err);
          res.send({success: true});
        });
      });
      // }
      // console.log(req.body); //form fields
    	// console.log(req.file); //form files
      // res.send({success: false})
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
