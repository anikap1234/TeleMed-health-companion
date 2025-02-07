const patientmodel = require("../../Models/Patient/patientregister");
class patient {
  async patientregister(req, res) {
    try {
      let { pname, email, mobileno, password } = req.body;
      const addnewpatient = await patientmodel.create({
        pname,
        email,
        mobileno,
        password,
      });
      if (addnewpatient) {
        return res
          .status(200)
          .json({ success: "patient register successfully.." });
      } else {
        return res.status(400).json({ error: "patient not register .." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Api Error .." });
    }
  }
  async patientlogin(req, res) {
    try {
      const { email, password } = req.body;

      // Check if the email exists in the database
      const patient = await patientmodel.findOne({ email });
      if (!patient) {
        return res
          .status(404)
          .json({ error: "Email not found. Please register first." });
      }

      // validate the password
      if (password !== patient.password) {
        return res
          .status(401)
          .json({ error: "Incorrect password. Please try again." });
      }

      // Successful login
      return res.status(200).json({ success: "Login successfully.", patient });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  }
}
const PatientController = new patient();
module.exports = PatientController;
