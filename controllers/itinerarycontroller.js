const express = require('express')
const { User, Event, Itinerary } = require('../db/schema')
const router = express.Router({ mergeParams: true })

router.post('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.itinerary.push(new Itinerary())
            user.save()
                .then((data) => {
                    res.json(data)
                })
        })
        .catch((err) => {
            console.error(err)
        })
})
