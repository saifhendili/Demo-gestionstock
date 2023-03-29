const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'fournisseur',
  },
  Famille: {
    type: String,
  },
  Code: {
    type: String,
  },
  P_achat: {
    type: Number,
  },

  P_Vente: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
 
  date: {
    type: Date,
    default: Date.now,
  },

});

module.exports = Product = mongoose.model('product', ProductSchema);
