var express = require('express');
const Newsletter = require('../models/newsletter');
var router = express.Router();

/* GET all news. */
router.get('/', (req, res) => {
    Newsletter.find().then(data => {
        res.json({result:true, news: data});
    });
});

module.exports = router;