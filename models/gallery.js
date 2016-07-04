'use strict';

const mongoose = require('mongoose');

let gallerySchema = new mongoose.Schema({
  name: {type: String},
  createdAt: {type: Date, default: Date.now},
  photos: [{url: {type: String}}]
  // photoes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}]
});

let Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
