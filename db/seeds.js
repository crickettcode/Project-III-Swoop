require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { User, Event, Itinerary } = require('./schema')

const botanical_gardens = new Itinerary({
    title: 'Morning',
    description: "Lets skip through the flowers",
    duration: 'three whole hours'
})
const el_taco = new Itinerary({
    title: 'Noon',
    description: 'Tacos for me, Tequila for you',
    durarion: 'might be a minute'
})

const six_flags = new Itinerary({
    title: 'Later_Noon',
    description: "Living our Best Life",
    duration: "the most of time"
})
const taka_sushi = new Itinerary({
    title: 'Evening',
    description: 'Sushi Yum!',
    duration: 'two hours'
})

const drunken_Unicorn = new Iternary({
    title: 'Night_Life',
    description: 'Adventure Time',
    duration: 'unlimited'

})

const spring_Break = new Event({
    date: "Second Weekend in May",
    duration: "three days"
})

const summer_Time_Daze = new Event({
    date: "First Weekend in July",
    duration: "two days"
})

const crickett = new User({
    dob: 2 / 2 / 87,
    email: "crickettcode@gmail.com",
    city: "ATL"
})

const finn = new User({
    dob: 1 / 1 / 10,
    email: "finnoggn@gmail.com",
    city: "ATL"
})

const tyler = new User({
    dob: 12 / 8 / 91,
    email: "trysten@gmail.com",
    city: "ATL"
})

User.remove({})
    .then(() => crickett.save())
    .then(() => finn.save())
    .then(() => tyler.save())
    .then(() => console.log('Gotti'))
    .then(() => mongoose.connection.close())