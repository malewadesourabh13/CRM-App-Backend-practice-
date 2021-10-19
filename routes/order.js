var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); // we will just have routes defined here...
//and all the logic in order-ctrl.js , we will just map order.js and order-ctrl.js together.

module.exports = router;
