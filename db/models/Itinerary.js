const mongoose = require('mongoose')
const Schema = require('../schema')

const Itinerary = mongoose.model('itinerary', Schema.ItinerarySchema)

module.exports = Itinerary 