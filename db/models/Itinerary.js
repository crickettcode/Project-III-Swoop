const mongoose = require('mongoose')
const Schema = require('../schema')

const Itinerary = mongoose.model('Itinerary', Schema.ItinerarySchema)

module.exports = Itinerary 