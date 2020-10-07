const express = require('express');
const trendRoutes = express.Router();

//require controller modules
const trend = require('../controller/trend');

// CRUD for company profile
trendRoutes.route('/').get(trend.list);
trendRoutes.route('/:id').get(trend.single);
trendRoutes.route('/').post(trend.create);
trendRoutes.route('/:id').put(trend.update);
trendRoutes.route('/:id').delete(trend.remove);

module.exports = trendRoutes;
