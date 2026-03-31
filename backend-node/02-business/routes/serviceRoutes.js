const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const { getServices, getService, createService, updateService, deleteService, getFeatured } = require('../controllers/serviceController');

router.get('/', getServices);
router.get('/featured', getFeatured);
router.get('/:id', getService);
router.post('/', auth, adminOnly, createService);
router.put('/:id', auth, adminOnly, updateService);
router.delete('/:id', auth, adminOnly, deleteService);
module.exports = router;
