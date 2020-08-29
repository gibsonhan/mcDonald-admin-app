const express = require('express');
const Menu = express.Router();

//require controller modules
const controller = require('../controller/menu');

//handle AWS upload
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// CRUD for company profile
Menu.route('/').get(controller.menuList);
Menu.route('/:id').get(controller.singleMenu);
Menu.route('/create').post(controller.createMenu);
//TODO would be to refacor upload img to sw3 into one single route
Menu.route('/img-upload').post(upload.any(), controller.uploadImg);
Menu.route('/update/:id').put(controller.updateMenu);
Menu.route('/delete/:id').get(controller.deleteMenu);

module.exports = Menu;
