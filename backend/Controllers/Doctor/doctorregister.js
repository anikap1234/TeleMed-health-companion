const doctormodel = require("../../Models/Doctor/doctorregister");
class Doctor {
  async doctorregister(req, res) {
    try {
      let { dname, email, mobileno, password } = req.body;
      const addnewpatient = await doctormodel.create({
        dname,
        email,
        mobileno,
        password,
      });
      if (addnewpatient) {
        return res
          .status(200)
          .json({ success: "doctor register successfully.." });
      } else {
        return res.status(400).json({ error: "doctor not register .." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Api Error .." });
    }
  }
  async doctorlogin(req, res) {
    try {
      const { email, password } = req.body;

      // Check if the email exists in the database
      const doctor = await doctormodel.findOne({ email });
      if (!doctor) {
        return res
          .status(404)
          .json({ error: "Email not found. Please register first." });
      }
      console.log("doctor", doctor, email, password);

      // Validate the password
      if (password !== doctor.password) {
        return res
          .status(401)
          .json({ error: "Incorrect password. Please try again." });
      }

      // Successful login
      return res
        .status(200)
        .json({ success: "Doctor Login successfully.", doctor });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  }
}
const DoctorController = new Doctor();
module.exports = DoctorController;
