const mongoose = require('mongoose');

const FournisseurSchema = new mongoose.Schema({

  Code: {
    type: String,
    required: true,
  },
  LibelleFour: {
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
  Fax: {
    type: Number,
  },
    RIB: {
    type: Number,
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

module.exports = Product = mongoose.model('fournisseur', FournisseurSchema);