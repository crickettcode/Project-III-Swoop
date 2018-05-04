const mongoose = require('mongoose')
const Schema = require('../schema')

const Event = mongoose.model('event', Schema.EventSchema)

module.exports = Event