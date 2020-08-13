const express = require("express");
const trendRoutes = express.Router();

//require controller modules
const controller = require('../controller/trend');


// CRUD for company profile 
trendRoutes.route('/').get(trend.list);
trendRoutes.route('/:id').get(trend.id);
trendRoutes.route('/create').post(trend.create);
trendRoutes.route('/update/:id').put(trend.update);
trendRoutes.route('/delete/:id').get(trend.delete);

module.exports = trendRoutes; 