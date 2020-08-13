const express = require("express");
const menuRoutes = express.Router();

//require controller modules
const controller = require('../controller/menu');


// CRUD for company profile 
menuRoutes.route('/').get(menu.list);
menuRoutes.route('/:id').get(menu.id);
menuRoutes.route('/create').post(menu.create);
menuRoutes.route('/update/:id').put(menu.update);
menuRoutes.route('/delete/:id').get(menu.delete);

module.exports = menuRoutes; 