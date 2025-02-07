const HealthLevelModel = require("../../Models/Patient/healthlevel");
class HealthLevel {
  async healthlevel(req, res) {
    try {
      let { Temperature, BloodPressure, HeartRate, Weight } = req.body;
      const addhealthlevel = await HealthLevelModel.create({
        Temperature,
        BloodPressure,
        HeartRate,
        Weight,
      });
      if (addhealthlevel) {
        return res
          .status(200)
          .json({ success: "Monitor Health Levels added successfully.." });
      } else {
        return res.status(400).json({ error: "Something is wrong .." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Api Error .." });
    }
  }


  async gethealthlevel(req, res) {
    try {
      const healthlevel = await HealthLevelModel.find({});
      if (healthlevel) {
        return res.status(200).json({ healthlevel: healthlevel });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  }
}
const HealthLevelController = new HealthLevel();
module.exports = HealthLevelController;
