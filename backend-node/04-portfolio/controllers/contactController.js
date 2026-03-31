const ContactMessage = require('../models/ContactMessage');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'Name, email, and message are required' });
    const contact = await ContactMessage.create({ name, email, subject, message, phone });
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (err) { res.status(400).json({ message: err.message }); }
};
exports.getContacts = async (req, res) => {
  try { res.json(await ContactMessage.find().sort('-createdAt')); }
  catch (err) { res.status(500).json({ message: err.message }); }
};
exports.markAsRead = async (req, res) => {
  try {
    const contact = await ContactMessage.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
    if (!contact) return res.status(404).json({ message: 'Message not found' });
    res.json(contact);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
