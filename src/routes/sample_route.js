let express = require('express');
let router = express.Router();

router.get('/hello_world', function(req, res) {
  return res.send('Hello World!');
});

module.exports = router;
