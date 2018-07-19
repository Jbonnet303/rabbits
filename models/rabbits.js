const mongoose = require('mongoose');

const rabbitSchema = mongoose.Schema({
  location: String,
  size: String,
  color: String,
  image: String
})

const Rabbit = mongoose.model('Rabbit', rabbitSchema)

module.exports = Rabbit;
