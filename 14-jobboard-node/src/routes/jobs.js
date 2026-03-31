const express = require('express');
const router = express.Router();
const { getJobs, getJob, createJob, updateJob, deleteJob, searchJobs, applyForJob } = require('../controllers/jobController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getJobs);
router.get('/search', searchJobs);
router.post('/', protect, createJob);
router.get('/:id', getJob);
router.put('/:id', protect, updateJob);
router.delete('/:id', protect, authorize('admin'), deleteJob);
router.post('/:id/apply', protect, applyForJob);

module.exports = router;
