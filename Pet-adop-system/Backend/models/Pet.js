const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  description: String,
  image: String,
});

module.exports = mongoose.model('Pet', petSchema);