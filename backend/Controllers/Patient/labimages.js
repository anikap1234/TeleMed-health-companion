const LabImagesModel = require("../../Models/Patient/labimages");
class LabImages {
  async labimage(req, res) {
    try {
      let file = req.files[0].filename;

      const addlabimages = await LabImagesModel.create({
        labimages: file,
      });
      if (addlabimages) {
        return res
          .status(200)
          .json({ success: "lab images added successfully.." });
      } else {
        return res.status(400).json({ error: "somethng is wrong .." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Api Error .." });
    }
  }
  async getlabimages(req, res) {
    try {
      const labimages = await LabImagesModel.find({});
      if (labimages) {
        return res.status(200).json({ labimages: labimages });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  }
}
const LabImagesController = new LabImages();
module.exports = LabImagesController;
