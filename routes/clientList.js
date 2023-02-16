var express = require('express');
const ClientList = require('../models/clientList');
const User = require('../models/users');
var router = express.Router();

/* GET all emails. */
router.get('/', (req, res) => {
    ClientList.find().then(data => {
        res.json({result:true, list: data});
    });
});



/* POST add email of a customer registered (e.g. a client) */
router.post('/newClient', (req, res) => {
    const newClient = new ClientList({
        email: req.body.email,
    });

    newClient.save().then(newDoc => {
        res.json({ result: true, user: newDoc });
    });
});


/* POST add an email of a customer not registered */
router.post('/newEmail', (req, res) => {
    User.findOne({email: req.body.email}).then(dataU => {
        ClientList.findOne({email: req.body.email}).then(dataCL => {
            if((dataU === null) && (dataCL === null)){
                const newClient = new ClientList({
                    email: req.body.email,
                });
                newClient.save().then(newDoc => {
                    res.json({ result: true, user: newDoc });
                });
            } else {
                res.json({result: false, error:'EMAIL ALREADY ADDED FOR NEWSLETTER SUBSCRIPTION.'})
            }
        })
    })
})

module.exports = router;