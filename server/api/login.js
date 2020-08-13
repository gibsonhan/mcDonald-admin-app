const express = require("express");
const loginRoutes = express.Router();

//require controller modules
const login = require('../controller/login');


// CRUD for company profile 
loginRoutes.route('/').post((res, req) => {

});
module.exports = loginRoutes; 