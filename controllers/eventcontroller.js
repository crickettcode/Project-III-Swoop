const express = require('express')
const { User, Event } = require('../db/schema')
const router = express.Router({ mergeParams: true })

router.post('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.event.push(new Event())
            user.save()
                .then((data) => {
                    res.json(data)
                })
        })
        .catch((err) => {
            console.error(err)
        })
})

module.exports = router 