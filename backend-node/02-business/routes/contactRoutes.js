const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const { submitContact, getContacts, updateStatus } = require('../controllers/contactController');

router.post('/', submitContact);
router.get('/', auth, adminOnly, getContacts);
router.patch('/:id/status', auth, adminOnly, updateStatus);
module.exports = router;
