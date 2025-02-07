const express = require('express');
const router = express.Router();
const PatientController = require('../../Controllers/Patient/patientregister');

// const multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, "Public/User");
//     },
//     filename: function (req, file, cb){
//         cb(null, Date.now() + "_"+ file.originalname);
//     },
// });
// const upload = multer({storage: storage});


router.post('/register', PatientController.patientregister);
router.post('/patientlogin', PatientController.patientlogin);



module.exports = router;