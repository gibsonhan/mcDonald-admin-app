const express = require('express');
const Menu = express.Router();

//require controller modules
const controller = require('../controller/menu');

// CRUD for company profile
Menu.route('/').get(controller.menuList);
Menu.route('/:id').get(controller.singleMenu);
Menu.route('/').post(controller.createMenu);
Menu.route('/:id').put(controller.updateMenu);
Menu.route('/:id').get(controller.deleteMenu);

module.exports = Menu;
