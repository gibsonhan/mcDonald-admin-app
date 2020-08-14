const express = require("express");
const Item = express.Router();

//require controller modules
const controller = require("../controller/item");

//CRUD for company profile :
Item.route("/").get(controller.itemList);
Item.route("/:id").get(controller.singleItem);
Item.route("/create").post(controller.createItem);
Item.route("/update/:id").put(controller.updateItem);
Item.route("/delete/:id").get(controller.deleteItem);

module.exports = Item;
