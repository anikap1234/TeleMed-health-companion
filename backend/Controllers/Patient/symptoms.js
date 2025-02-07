const SymptomsModel = require("../../Models/Patient/symptoms");
class Symptom {
  async symptoms(req, res) {
    try {
      let { symptom, duration } = req.body;
      const addsymptoms = await SymptomsModel.create({
        symptom,
        duration,
      });
      if (addsymptoms) {
        return res
          .status(200)
          .json({ success: "Symptoms added successfully.." });
      } else {
        return res.status(400).json({ error: "Something is wrong .." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Api Error .." });
    }
  }

  async getsymptoms(req, res) {
    try {
      const symptoms = await SymptomsModel.find({});
      if (symptoms) {
        return res.status(200).json({ symptoms: symptoms });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  }
}
const SymptomsController = new Symptom();
module.exports = SymptomsController;
