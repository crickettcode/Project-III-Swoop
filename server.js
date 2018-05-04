require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan')
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/Swoop

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Silly Goose');
});

// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});
app.use(logger('dev'))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const index = require('./controllers/index')
const userController = require('./controllers/userController')
// app.use('/', index)
app.use('/api/users', userController)

const itineraryController = require('./controllers/itinerarycontroller')
app.use('/api/users/:userId/event/:eventId', itineraryController)






const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(" What it do Pikachu " + PORT);
})
module.exports = app