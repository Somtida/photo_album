'use strict';

const mongoose = require('mongoose');

let photoSchema = new mongoose.Schema({
  image: {type: String}
});

let Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
