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

router.delete('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        await User.findByIdAndRemove(userId)
        res.json({
            msg: "deleted"
        })
    } catch (err) {
        console.log
    }

})


// router.post('/', (req, res) => {
//     const newUserFromForm = req.body
//     const user = new User({
//         name: newUserFromForm.name,
//         dob: newDateFromForm.dob,
//         email: newEmailFromForm.email,
//         city: newCityFromForm.city
//     })

//     const newUser = await user.save()
//     res.json({ newUser })
// })








// router.post('/', (req, res) => {
//     const newUser = new User(req.body.user)
//     newUser.save()
//         .then((user) => {
//             res.json(user)
//         })
//         .catch(console.log)
// })


module.exports = router;