
const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/Users');


router.get('/', verify, (req,res) =>{
    User.findById(req.user, function (err, user) {
        res.send(user);
    } );
    
})

router.get('/logincompleted', (req,res) =>{
    id = req.body
    User.findById(id, function (err, user) {
        res.send(user);
    } );
    
})

module.exports = router;