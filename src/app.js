const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://demo:demo@ds231090.mlab.com:31090/beers')

// configura app para usar bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/beers', require('./routes/beersRoute'))

module.exports = app