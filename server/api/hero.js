const express = require('express');
const heroRoutes = express.Router();

//require controller modules
const controller = require('../controller/hero');

// CRUD for company profile
heroRoutes.route('/').get(controller.heroList);
heroRoutes.route('/:id').get(controller.singleHero);
heroRoutes.route('/').post(controller.createHero);
heroRoutes.route('/:id').put(controller.updateHero);
heroRoutes.route('/:id').delete(controller.deleteHero);

module.exports = heroRoutes;
