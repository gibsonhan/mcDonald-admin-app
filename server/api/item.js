const express = require('express');
const Item = express.Router();

//require controller modules
const controller = require('../controller/item');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//CRUD for company profile :
Item.route('/').get(controller.itemList);
Item.route('/:id').get(controller.singleItem);
Item.route('/').post(controller.createItem);
//TODO would be to refacor upload img to sw3 into one single route
Item.route('/:id').put(controller.updateItem);
Item.route('/:id').get(controller.deleteItem);

module.exports = Item;
