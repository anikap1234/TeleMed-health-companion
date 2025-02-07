const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LabReport = new Schema({
    labreport:{
        type:String
    },


},{timestamps:true});
const LabReportmodel = mongoose.model('labreport',LabReport);
module.exports=LabReportmodel;