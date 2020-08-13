const express = require("express");
const couponRoutes = express.Router();

//require controller modules
const controller = require('../controller/coupon');


// CRUD for company profile 
couponRoutes.route('/').get(item.list);
couponRoutes.route('/:id').get(item.id);
couponRoutes.route('/create').post(item.create);
couponRoutes.route('/update/:id').put(item.update);
couponRoutes.route('/delete/:id').get(item.delete);

module.exports = couponRoutes; 