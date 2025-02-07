const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Symptom = new Schema({
    symptom:{
        type:String
    },
    duration:{
        type:String
    },
   
},{timestamps:true});
const SymptomsModel = mongoose.model('symptom',Symptom);
module.exports=SymptomsModel;