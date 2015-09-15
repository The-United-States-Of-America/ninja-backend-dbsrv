const express = require('express');
const router = express.Router();

router.get('/hello_world', (req, res) => {
  return res.send('Hello World!');
});

module.exports = router;
