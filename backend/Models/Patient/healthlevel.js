const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HealthLevel = new Schema({
    Temperature:{
        type:Number
    },
    BloodPressure:{
        type:Number
    },
    HeartRate:{
        type:Number
    },
    Weight:{
        type:Number
    },
},{timestamps:true});
const HealthLevelModel = mongoose.model('healthlevel',HealthLevel);
module.exports=HealthLevelModel;