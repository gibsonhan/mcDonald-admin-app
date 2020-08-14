const Item = require("../models/item");
const { response } = require("express");
const { update } = require("../models/item");

const itemList = async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json("failed to fetch item list", error);
  }
};

const singleItem = async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item);
  } catch (error) {
    res.status(400).json("Failed to find Item", error);
  }
};

const createItem = async (req, res, next) => {
  let body = req.params;
  console.log("firing");

  //temp data
  const item = await new Item({
    itemName: "Fries",
    menuGroup: "Other",
    subMenu: "None",

    servingTime: ["Lunch", "Dinner"],
    price: { S: 1.0, M: 2.0, L: 3.0 },
    size: ["S", "M", "L"],
  });

  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.log("failed to save", error);
  }
};

//need to check update
const updateItem = async (req, res) => {
  const id = req.params.id;
  const newObject = req.params.body;
  const updateItem = newItem({ ...newObject });
  const message = `${updatedItem.name} was succesfully update`;

  try {
    await Item.findByIdAndUpdate(id, updateItem, { new: true });
    res.status(200).json(message, updateItem);
  } catch (error) {
    res.status(500).json("Failed to update item");
  }
};

//TODO: need to check this stuff?
const deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Item.findByIdAndRemove(id);
    const message = `${deleted.itemname} was succesfully deleted`;
    await res.status(200).json(message);
  } catch (error) {
    await res.status(500).json("fail to delete item", error);
  }
};

module.exports = {
  itemList,
  singleItem,
  createItem,
  updateItem,
  deleteItem,
};
