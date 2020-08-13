const express = require("express");
const heroRoutes = express.Router();

//require controller modules
const controller = require('../controller/hero');


// CRUD for company profile 
heroRoutes.route('/').get(hero.list);
heroRoutes.route('/:id').get(hero.id);
heroRoutes.route('/create').post(hero.create);
heroRoutes.route('/update/:id').put(hero.update);
heroRoutes.route('/delete/:id').get(hero.delete);

module.exports = heroRoutes; 