var express = require('express');
const Article = require('../models/articles');
var router = express.Router();

/* GET all articles. */
router.get('/', (req, res) => {
    Article.find().then(data => {
        res.json({result:true, articles: data});
    });
});

module.exports = router;
