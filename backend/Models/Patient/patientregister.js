const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema({
    pname:{
        type:String
    },
    email:{
        type:String
    },
    mobileno:{
        type:Number
    },
    password:{
        type:String
    }

},{timestamps:true});
const patientmodel = mongoose.model('patient',Patient);
module.exports=patientmodel;