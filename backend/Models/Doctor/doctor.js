const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  qualifications: { type: String, required: true },
  specifications: { type: String, required: true },
  hospitalName: { type: String, required: true },
  designation: { type: String, required: true },
  experience: { type: String, required: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
