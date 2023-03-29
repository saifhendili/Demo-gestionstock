const express = require('express');
const router = express.Router();
const Fournisseur = require('../../models/Fournisseur');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// @route    GET api/produit
// @desc     Get all produits
// @access   Private

  router.get('/:id',auth, async (req, res) => {
    try {
      const fournisseur = await Fournisseur.findById(req.params.id);
      res.json(fournisseur);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/',auth, async (req, res) => {
    try {
      const fournisseurs = await Fournisseur.find().sort({ date: -1 });
      res.json(fournisseurs);
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  });



  router.delete('/:id',auth, async (req, res) => {
    try {
      const fournisseur = await Fournisseur.findById(req.params.id);
      await fournisseur.remove();
    

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

        const newRequest = new Fournisseur({
            Code: req.body.Code,
            LibelleFour: req.body.LibelleFour,
            Tel:req.body.Tel,
            Tel2:req.body.Tel2,
            Adresse:req.body.Adresse,
            Ville:req.body.Ville,
            
            Email:req.body.Email,
            Codepostal:req.body.Codepostal,
            Fax:req.body.Fax,
            RIB:req.body.RIB,
            CodePostal:req.body.CodePostal,
        });
    
        const myfournisseur = await newRequest.save();
        
        res.json(myfournisseur);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.put('/:id',auth, async (req, res) => {
    try {
      const fournisseur = await Fournisseur.findById(req.params.id);
 if(fournisseur){
    fournisseur.Code= req.body.Code?req.body.Code:fournisseur.Code;
    fournisseur.LibelleFour= req.body.LibelleFour?req.body.LibelleFour:fournisseur.LibelleFour;
    fournisseur.Tel= req.body.Tel?req.body.Tel:fournisseur.Tel;
    fournisseur.Tel2= req.body.Tel2?req.body.Tel2:fournisseur.Tel2;
    fournisseur.Adresse=req.body.Adresse?req.body.Adresse:fournisseur.Adresse;
    fournisseur.Ville=req.body.Ville?req.body.Ville:fournisseur.Ville;
    fournisseur.Codepostal=req.body.Codepostal?req.body.Codepostal:fournisseur.Codepostal;
    fournisseur.Fax=req.body.Fax?req.body.Fax:fournisseur.Fax;
    fournisseur.RIB=req.body.RIB?req.body.RIB:fournisseur.RIB;
    fournisseur.Email=req.body.Email?req.body.Email:fournisseur.Email;
    fournisseur.CodePostal=req.body.CodePostal?req.body.CodePostal:fournisseur.CodePostal;
 };

await fournisseur.save();
      res.json(fournisseur);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;