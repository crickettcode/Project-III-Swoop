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


router.get('/itinerary', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const event = user.event.id(req.params.eventId)
            console.log('event from itin contr: ', event)
            res.json(event)
        })
        .catch((err) => {
            console.error(err)
        })
})

module.exports = router;
