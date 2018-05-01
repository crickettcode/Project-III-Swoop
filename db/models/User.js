const mongoose = require('mongoose')
const Schema = require('../schema')

const User = mongoose.model('user', Schema.UserSchema)

module.exports = User