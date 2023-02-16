var express = require('express');
const User = require('../models/users');
var router = express.Router();
const uid2 = require('uid2');
const bcrypt = require('bcrypt');
const { checkBody } = require('../modules/checkBody');

/* GET user's data given his token. */
router.get('/:token', (req, res) => {
  User.findOne({token: req.params.token}).then(data => {
    if(!(data===null)){
      res.json({result: true, user: data});
    } else {
      res.json({result: false, error: 'User not found.'})
    }
  });
});


/* POST signin */
router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ email: req.body.email }).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, user: data });
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
    
  });
  
});



/* POST signup */
router.post('/signup', (req, res) => {
  //Check if one of the fields is empty --> ''
  if (!checkBody(req.body, ['firstname', 'lastname', 'email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ email: req.body.email }).then(data => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        token: uid2(32),
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipCode,
      });

      

      newUser.save().then(newDoc => {
        res.json({ result: true, user: newDoc });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

/* DELETE user */



module.exports = router;
