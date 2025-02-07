const express = require('express');
const router = express.Router();
const LabImagesController = require('../../Controllers/Patient/labimages');

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "Public/LabImages");
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + "_"+ file.originalname);
    },
});
const upload = multer({storage: storage});


router.post('/uploadlabimages',upload.any(), LabImagesController.labimage);
router.get('/getlabimages', LabImagesController.getlabimages);



module.exports = router;