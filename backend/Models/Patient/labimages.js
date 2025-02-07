const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LabImages = new Schema({
    labimages:{
        type:String
    },


},{timestamps:true});
const LabImagesModel = mongoose.model('labimage',LabImages);
module.exports=LabImagesModel;