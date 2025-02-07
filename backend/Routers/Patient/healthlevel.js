const express = require('express');
const router = express.Router();
const HealthLevelController = require('../../Controllers/Patient/healthlevel');

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


router.post('/addhealthlevel', HealthLevelController.healthlevel);
router.get('/gethealthlevel', HealthLevelController.gethealthlevel);



module.exports = router;