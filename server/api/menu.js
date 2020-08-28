const express = require('express');
const Menu = express.Router();

//require controller modules
const controller = require('../controller/menu');

// CRUD for company profile
Menu.route('/').get(controller.list);
Menu.route('/:id').get(controller.id);
Menu.route('/create').post(controller.create);
//TODO would be to refacor upload img to sw3 into one single route
Menu.route('/img-upload').post(upload.any(), controller.uploadImg);
Menu.route('/update/:id').put(controller.update);
Menu.route('/delete/:id').get(controller.delete);

module.exports = Menu;
