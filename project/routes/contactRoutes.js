const express = require('express');
const router = express.Router();
const { addContact, getContacts, getContactById, updateContact, deleteContact } = require('../controllers/contactController');

// Add a new contact
router.post('/', addContact);

// Get all contacts
router.get('/', getContacts);

// Get a single contact by ID
router.get('/:id', getContactById);

// Update a contact
router.put('/:id', updateContact);

// Delete a contact
router.delete('/:id', deleteContact);

module.exports = router;
