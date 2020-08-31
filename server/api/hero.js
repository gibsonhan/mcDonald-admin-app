const express = require('express');
const heroRoutes = express.Router();

//require controller modules
const controller = require('../controller/hero');

// CRUD for company profile
heroRoutes.route('/').get(controller.heroList);
heroRoutes.route('/:id').get(controller.singleHero);
heroRoutes.route('/create').post(controller.createHero);
heroRoutes.route('/update/:id').put(controller.updateHero);
heroRoutes.route('/delete/:id').get(controller.deleteHero);

module.exports = heroRoutes;
