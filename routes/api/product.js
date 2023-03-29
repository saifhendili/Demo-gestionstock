const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// @route    GET api/produit
// @desc     Get all produits
// @access   Private

  router.get('/:id',auth, async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/', async (req, res) => {
    try {
      const products = await Product.find().sort({ date: -1 }).populate('Fournisseur');
      res.json(products);
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  });
  
  router.delete('/:id',auth, async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.remove();
    

      res.json("delete avec success");
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  
  
router.post(
    '/',auth,
    [
      check('Code', 'Code is required').notEmpty(),
    ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {

        const newRequest = new Product({
            Code: req.body.Code,
            Famille: req.body.Famille,
            P_achat:req.body.P_achat,
            Tel2:req.body.Tel2,
            P_Vente:req.body.P_Vente,
            quantity:req.body.quantity,
            Fournisseur:req.body.Fournisseur,
        });
    
        const myProduct = await newRequest.save();
        
        res.json(myProduct);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.put('/:id',auth, async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);

 if(product){
    product.Code= req.body.Code?req.body.Code:product.Code;
    product.Famille= req.body.Famille?req.body.Famille:product.Famille;
    product.Code= req.body.Code?req.body.Code:product.Code;
    product.P_achat= req.body.P_achat?req.body.P_achat:product.P_achat;
    product.P_Vente=req.body.P_Vente?req.body.P_Vente:product.P_Vente;
    product.quantity=req.body.quantity?req.body.quantity:product.quantity;
 };

await product.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;