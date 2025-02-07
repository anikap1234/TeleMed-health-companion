const express = require('express');
const router = express.Router();
const DoctorController = require('../../Controllers/Doctor/doctorregister');

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


router.post('/doctorregister', DoctorController.doctorregister);
router.post('/doctorlogin', DoctorController.doctorlogin);



module.exports = router;