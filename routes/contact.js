const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();



router.post("/add_contact", async (req, res) => {
    try {
        const { name, email, phone } = req.body; 
        const newContact = new Contact({ name, email, phone }); 

        await newContact.save(); 
        res.status(200).send({ msg: "Contact added", newContact });
    } catch (error) {
        res.status(400).send({ msg: "Contact not added", error }); 
    }
});
router.get("/get_contacts" , async(req,res)=>{
    try {
      const contactlist = await Contact.find()
      res.status(200).send({msg : "list",contactlist})
    } catch (error) {
      res.status(400).send({msg : "can not get list",error})            
    }  
  });


router.get('/getonecontact/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).send({ msg: 'Contact not found' });
        }

        res.status(200).send({ msg: 'Contact getted', contact });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Internal Server Error', error });
    }
});

router.delete('/deletecontact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).send({ msg: 'Contact not found' });
        }

        res.status(200).send({ msg: 'Contact deleted', deletedContact });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Internal Server Error', error });
    }
});

router.put('/updatecontact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body; 

        const updatedContact = await Contact.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedContact) {
            return res.status(404).send({ msg: 'Contact not found' });
        }

        res.status(200).send({ msg: 'Contact updated', updatedContact });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Internal Server Error', error });
    }
});



module.exports = router;
