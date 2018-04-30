const express = require('express');
const router = express.Router();
const User = require('../db/models/User')

router.get('/', function (req, res) {
    User.find({})
        .then((user) => {
            res.render('user/index', {
                user
            })
        })
        .catch((error) => {
            console.log("what have you done", error)
        })
});