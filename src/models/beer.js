const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BeerSchema   = new Schema({
    nome: String,
    nota: Number,
});

module.exports = mongoose.model('Beer', BeerSchema);