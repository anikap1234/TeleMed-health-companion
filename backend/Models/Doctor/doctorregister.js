const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doctor = new Schema({
    dname:{
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
const doctormodel = mongoose.model('doctor',Doctor);
module.exports=doctormodel;