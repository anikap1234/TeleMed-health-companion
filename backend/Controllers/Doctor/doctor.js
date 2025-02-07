const DoctorModel = require('../../Models/Doctor/doctor');

class DoctorController {
  // Add a new doctor profile
  async addDoctor(req, res) {
    try {
      const { doctorName, qualifications, specifications, hospitalName, designation, experience } = req.body;

      const newDoctor = await DoctorModel.create({
        doctorName,
        qualifications,
        specifications,
        hospitalName,
        designation,
        experience,
      });

      if (newDoctor) {
        return res.status(200).json({ success: 'Doctor profile added successfully.' });
      } else {
        return res.status(400).json({ error: 'Failed to add doctor profile.' });
      }
    } catch (error) {
      console.error('Error adding doctor profile:', error);
      return res.status(500).json({ error: 'Internal Server Error.' });
    }
  }

  // Get all doctor profiles
  async getDoctors(req, res) {
    try {
      const doctors = await DoctorModel.find({});
      if (doctors) {
        return res.status(200).json({ doctors });
      } else {
        return res.status(404).json({ message: 'No doctor profiles found.' });
      }
    } catch (error) {
      console.error('Error fetching doctor profiles:', error);
      return res.status(500).json({ error: 'Internal Server Error.' });
    }
  }
}

const doctorController = new DoctorController();
module.exports = doctorController;
