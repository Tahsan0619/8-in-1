const Doctor = require('../models/Doctor');

const getDoctors = async (req, res, next) => {
  try {
    const { specialization, department } = req.query;
    const filter = { isActive: true };
    if (specialization) filter.specialization = new RegExp(specialization, 'i');
    if (department) filter.department = new RegExp(department, 'i');
    const doctors = await Doctor.find(filter).sort('-createdAt');
    res.json({ success: true, count: doctors.length, data: doctors });
  } catch (err) { next(err); }
};

const getDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
    res.json({ success: true, data: doctor });
  } catch (err) { next(err); }
};

const createDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({ success: true, data: doctor });
  } catch (err) { next(err); }
};

const updateDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
    res.json({ success: true, data: doctor });
  } catch (err) { next(err); }
};

const deleteDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
    res.json({ success: true, message: 'Doctor deleted' });
  } catch (err) { next(err); }
};

const getDoctorAvailability = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id).select('name availableSlots consultationFee');
    if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
    res.json({ success: true, data: { name: doctor.name, consultationFee: doctor.consultationFee, availableSlots: doctor.availableSlots } });
  } catch (err) { next(err); }
};

module.exports = { getDoctors, getDoctor, createDoctor, updateDoctor, deleteDoctor, getDoctorAvailability };
