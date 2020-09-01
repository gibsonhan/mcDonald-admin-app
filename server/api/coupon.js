const express = require('express');
const couponRoutes = express.Router();

//require controller modules
const controller = require('../controller/coupon');

// CRUD for company profile
couponRoutes.route('/').get(controller.couponList);
couponRoutes.route('/:id').get(controller.singleCoupon);
couponRoutes.route('/').post(controller.createCoupon);
couponRoutes.route('/:id').put(controller.updateCoupon);
couponRoutes.route('/:id').delete(controller.deleteCoupon);

module.exports = couponRoutes;
