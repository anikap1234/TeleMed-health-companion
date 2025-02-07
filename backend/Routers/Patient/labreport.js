const express = require('express');
const router = express.Router();
const LabreportController = require('../../Controllers/Patient/labreport');

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "Public/Labreport");
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + "_"+ file.originalname);
    },
});
const upload = multer({storage: storage});


router.post('/uploadlabreport',upload.any(), LabreportController.labreport);
router.get('/getlabreport', LabreportController.getlabreport);



module.exports = router;