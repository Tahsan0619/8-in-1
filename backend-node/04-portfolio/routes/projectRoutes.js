const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/auth');
const { getProjects, getProject, createProject, updateProject, deleteProject, getFeatured } = require('../controllers/projectController');

router.get('/', getProjects);
router.get('/featured', getFeatured);
router.get('/:slug', getProject);
router.post('/', auth, adminOnly, createProject);
router.put('/:id', auth, adminOnly, updateProject);
router.delete('/:id', auth, adminOnly, deleteProject);
module.exports = router;
