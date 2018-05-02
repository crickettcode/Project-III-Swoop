const express = require('express');
const { User } = require('../db/schema')
const router = express.Router({ mergeParams: true });


router.get('/', async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        console.log(err)
    }
})

router.get('/:userId', async (req, res) => {
    console.log("IN THE USER CONTROLLER, GET ONE USER", req.params)
    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (err) {
        console.log(err)
    }
})

//router.get('/:userId/delete', async (req, res) => {
// try {
//const userId = await User.findById(req.params.id)
// User.findByIdAndRemove(userId)
// res.redirect('/users');
// })
//})






router.post('/', (req, res) => {
    const newUser = new User(req.body.user)
    newUser.save()
        .then((user) => {
            res.json(user)
        })
        .catch(console.log)
})


module.exports = router;