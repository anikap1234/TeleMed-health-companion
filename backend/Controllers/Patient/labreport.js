const LabReportmodel = require("../../Models/Patient/labreport");
class Labreport {
  async labreport(req, res) {
    try {
      let file = req.files[0].filename;

      const addlabreport = await LabReportmodel.create({
        labreport: file,
      });
      if (addlabreport) {
        return res
          .status(200)
          .json({ success: "lab report added successfully.." });
      } else {
        return res.status(400).json({ error: "somethng is wrong .." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Api Error .." });
    }
  }
  async getlabreport(req, res) {
    try {
      const labreport = await LabReportmodel.find({});
      if (labreport) {
        return res.status(200).json({ labreport: labreport });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  }
}
const LabreportController = new Labreport();
module.exports = LabreportController;
