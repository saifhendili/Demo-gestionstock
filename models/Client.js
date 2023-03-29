const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({

  Code: {
    type: String,
    required: true,
  },
  LibelleClient: {
    type: String,
  },
  Tel: {
    type: Number,
  },
  Tel2: {
    type: Number,
  },
  Adresse : {
    type: String,
  },
  Ville: {
    type: String,
  },
  Email: {
    type: String,
  },
  CodePostal: {
    type: Number,

  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model('client', ClientSchema);
