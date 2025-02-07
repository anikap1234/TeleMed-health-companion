const express = require('express');
const router = express.Router();
const SymptomsController = require('../../Controllers/Patient/symptoms');

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


router.post('/registersymptom', SymptomsController.symptoms);
router.get('/getsymptoms', SymptomsController.getsymptoms);



module.exports = router;