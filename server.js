require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('What it do little Moon')
})

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(" What it do Pikachu " + PORT);
})
