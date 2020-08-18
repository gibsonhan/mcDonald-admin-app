const Item = require('../models/item');

const itemList = async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items.map((item) => item.toJSON()));
  } catch (error) {
    res.status(500).json('failed to fetch item list', error);
  }
};

const singleItem = async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item.toJSON());
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const createItem = async (req, res, next) => {
  let content = req.body;
  const item = await new Item({ ...content });
  console.log(item);
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.log('failed to save', error);
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
    res.status(500).json('Failed to update item');
  }
};

//TODO: need to check this stuff?
const deleteItem = async (req, res) => {
  const id = req.params.id;
  const message = `${id} was successfully deleted`;
  try {
    await Item.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
    console.log('We deleted it');
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('fail to delete item', error);
  }
};

module.exports = {
  itemList,
  singleItem,
  createItem,
  updateItem,
  deleteItem,
};
