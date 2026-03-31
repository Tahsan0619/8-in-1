const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const { submitContact, getContacts, markAsRead } = require('../controllers/contactController');

router.post('/', submitContact);
router.get('/', auth, adminOnly, getContacts);
router.patch('/:id/read', auth, adminOnly, markAsRead);
module.exports = router;
