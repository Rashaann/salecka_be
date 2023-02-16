var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({result:true, message:'Test'});
});


module.exports = router;
