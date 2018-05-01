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




router.post('/', (req, res) => {
    const newUser = new User(req.body.user)
    newUser.save()
        .then((user) => {
            res.json(user)
        })
        .catch(console.log)
})


module.exports = router;