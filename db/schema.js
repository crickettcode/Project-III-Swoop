const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ItinerarySchema = new Schema({
    title: {
        type: String,
        default: "New Thing"
    },
    description: {
        type: String,
        default: "New Thing about The Thing"
    },
    duration: {
        type: String,
        default: "The time its takes to do the Thing"
    }
})

const EventSchema = new Schema({
    date: {
        type: String,
        default: "Iza Party"
    },
    description: {
        type: String,
        default: "We has the fun"
    },

    itinerary: [ItinerarySchema]

})

const UserSchema = new Schema({
    name: {
        type: String,
        default: "Bob Ross"
    },

    dob: {
        type: Date,
        default: 12 / 12 / 20
    },
    email: {
        type: String,
        default: "youdahbest@gmail.com"
    },
    city: {
        type: String,
        default: 'YoucanfindmeintheA'
    },

    event: [EventSchema]

})

const User = mongoose.model('User', UserSchema)
const Event = mongoose.model('Event', EventSchema)
const Itinerary = mongoose.model('Itinerary', ItinerarySchema)

module.exports = {
    User, Event, Itinerary
}