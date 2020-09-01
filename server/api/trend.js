const express = require('express');
const trendRoutes = express.Router();

//require controller modules
const controller = require('../controller/trend');

// CRUD for company profile
trendRoutes.route('/').get(trend.list);
trendRoutes.route('/:id').get(trend.id);
trendRoutes.route('/').post(trend.create);
trendRoutes.route('/:id').put(trend.update);
trendRoutes.route('/:id').get(trend.delete);

module.exports = trendRoutes;
