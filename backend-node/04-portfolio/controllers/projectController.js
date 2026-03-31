const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const { category, tech } = req.query;
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (tech) filter.techStack = tech;
    res.json(await Project.find(filter).sort('order'));
  } catch (err) { res.status(500).json({ message: err.message }); }
};
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug, isActive: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
exports.createProject = async (req, res) => {
  try { res.status(201).json(await Project.create(req.body)); }
  catch (err) { res.status(400).json({ message: err.message }); }
};
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
exports.deleteProject = async (req, res) => {
  try { await Project.findByIdAndDelete(req.params.id); res.json({ message: 'Project deleted' }); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
exports.getFeatured = async (req, res) => {
  try { res.json(await Project.find({ isFeatured: true, isActive: true }).sort('order')); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
