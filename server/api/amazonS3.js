const express = require('express');
const amazonS3 = express.Router();

//require controller modules
const controller = require('../controller/amazonS3');

//handle AWS upload
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//TODO would be to refacor upload img to sw3 into one single route
amazonS3.route('/single-img').post(upload.any(), controller.uploadSingleImg);
amazonS3.route('/multi-img').post(upload.any(), controller.uploadMultiImg);

module.exports = amazonS3;
