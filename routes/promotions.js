var express = require('express');
const Promotion = require('../models/promotions');
var router = express.Router();

/* GET all promotions. */
router.get('/', (req, res) => {
    Promotion.find().then(data => {
        res.json({result:true, articles: data});
    });
});

module.exports = router;
