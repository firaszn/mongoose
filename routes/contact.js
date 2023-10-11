const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('hello');
});

router.post("/add_contact", async (req, res) => {
    try {
        const { name, email, phone } = req.body; // Destructure values from req.body
        const newContact = new Contact({ name, email, phone }); // Create a new instance of the Contact model

        await newContact.save(); // Save the new contact to the database
        res.status(200).send({ msg: "Contact added", newContact }); // Send a success response with the new contact data
    } catch (error) {
        res.status(400).send({ msg: "Contact not added", error }); // Send an error response if something goes wrong
    }
});

router.get('/getcontacts/:id', async (req, res) => {
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

router.put('/updatecontact/id', async (req, res) => {
    try {
        const { id } = req.params;

        const updatedContact = await Contact.findByIdAndUpdate( { id },);

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
