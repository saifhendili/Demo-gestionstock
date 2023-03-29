const express = require('express');
const router = express.Router();
const Client = require('../../models/Client');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// @route    GET api/produit
// @desc     Get all produits
// @access   Private

  router.get('/:id',auth, async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      res.json(client);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/',auth, async (req, res) => {
    try {
      const clients = await Client.find().sort({ date: -1 });
      res.json(clients);
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  });
  
  router.delete('/:id',auth, async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      await client.remove();
    

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

        const newRequest = new Client({
            Code: req.body.Code,
            LibelleClient: req.body.LibelleClient,
            Tel:req.body.Tel,
            Tel2:req.body.Tel2,
            Adresse:req.body.Adresse,
            Ville:req.body.Ville,
            Email:req.body.Email,
            CodePostal:req.body.CodePostal,
      
        });
    
        const myClient = await newRequest.save();
        
        res.json(myClient);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.put('/:id',auth, async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);

 if(client){
    client.Code= req.body.Code?req.body.Code:client.Code;
    client.LibelleClient= req.body.LibelleClient?req.body.LibelleClient:client.LibelleClient;
    client.Tel= req.body.Tel?req.body.Tel:client.Tel;
    client.Tel2= req.body.Tel2?req.body.Tel2:client.Tel2;
    client.Adresse=req.body.Adresse?req.body.Adresse:client.Adresse;
    client.Ville=req.body.Ville?req.body.Ville:client.Ville;
    client.Email=req.body.Email?req.body.Email:client.Email;
    client.CodePostal=req.body.CodePostal?req.body.CodePostal:client.CodePostal;
 };

await client.save();
      res.json(client);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;