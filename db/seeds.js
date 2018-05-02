require('dotenv').config()
const User = require('./models/user')
const Event = require('./models/event')
const Itinerary = require('./models/itinerary')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

//const { User, Event, Itinerary } = require('./schema')




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

const white_water = new Itinerary({
    title: 'All Day',
    description: 'chill out',
    duration: 'until they kick us out'
})

const drunken_unicorn = new Itinerary({
    title: 'Night_Life',
    description: 'Adventure Time',
    duration: 'unlimited'

})

const spring_break = new Event({
    date: "Second Weekend in May",
    duration: "three days"
})

const summer_time_daze = new Event({
    date: "First Weekend in July",
    duration: "two days"
})

const graduation_celebration = new Event({
    date: "Third Weekend in June",
    duration: "two days"
})

const crickett = new User({
    name: "Crickett",
    dob: "2 / 2 / 87",
    email: "crickettcode@gmail.com",
    city: "ATL"

})

graduation_celebration.itinerary.push(drunken_unicorn)
graduation_celebration.itinerary.push(white_water)
crickett.event.push(graduation_celebration)


const finn = new User({
    name: "Finn",
    dob: "1 / 1 / 10",
    email: "finnoggn@gmail.com",
    city: "ATL"
})

summer_time_daze.itinerary.push(six_flags)
summer_time_daze.itinerary.push(el_taco)
finn.event.push(summer_time_daze)


const tyler = new User({
    name: "Tyler",
    dob: "12 / 8 / 91",
    email: "trysten@gmail.com",
    city: "ATL"
})

spring_break.itinerary.push(botanical_gardens)
spring_break.itinerary.push(taka_sushi)
tyler.event.push(spring_break)




User.remove({})
    .then(() => crickett.save())
    .then(() => finn.save())
    .then(() => tyler.save())
    .then(() => console.log('Gotti'))
    .then(() => mongoose.connection.close())