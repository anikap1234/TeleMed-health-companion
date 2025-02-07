const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: false }));
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is Connected....!"))
  .catch(() => console.log("DB is not Connected"));


// importing router
const patientregister = require('./Routers/Patient/patientregister');
const symptoms = require('./Routers/Patient/symptoms');
const healthlevel = require('./Routers/Patient/healthlevel');
const labimage = require('./Routers/Patient/labimages');
const labreport = require('./Routers/Patient/labreport');
const doctorregister = require('./Routers/Doctor/doctorregidter');




// Creating routes
app.use('/api/patient',patientregister);
app.use('/api/patient',symptoms);
app.use('/api/patient',healthlevel);
app.use('/api/patient',labimage);
app.use('/api/patient',labreport);
app.use('/api/doctor',doctorregister);





const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Running on port => ${PORT}`);
});
