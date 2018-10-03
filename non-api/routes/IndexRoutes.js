let express = require('express');
let router = express.Router();
let path = require('path');

/* GET home page. */
router.get('/*', function (req, res, next) {
  console.log("I GOT CALLED!")
  console.log(path.join(__dirname + '/../../public/myr/index.html'))
  res.sendFile(path.join(__dirname + '/../../public/myr/index.html'))
});

module.exports = router;