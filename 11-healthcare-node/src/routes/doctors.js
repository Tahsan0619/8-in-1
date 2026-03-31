const express = require('express');
const router = express.Router();
const { getDoctors, getDoctor, createDoctor, updateDoctor, deleteDoctor, getDoctorAvailability } = require('../controllers/doctorController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getDoctors);
router.post('/', protect, authorize('admin'), createDoctor);
router.get('/:id', getDoctor);
router.put('/:id', protect, authorize('admin'), updateDoctor);
router.delete('/:id', protect, authorize('admin'), deleteDoctor);
router.get('/:id/availability', getDoctorAvailability);

module.exports = router;
