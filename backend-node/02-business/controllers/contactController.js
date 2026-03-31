const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'Name, email, and message are required' });
    const contact = await Contact.create({ name, email, subject, message, phone });
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.getContacts = async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const filter = status ? { status } : {};
    const [contacts, total] = await Promise.all([
      Contact.find(filter).sort('-createdAt').skip((page - 1) * limit).limit(Number(limit)),
      Contact.countDocuments(filter),
    ]);
    res.json({ contacts, total, pages: Math.ceil(total / limit) });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateStatus = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
