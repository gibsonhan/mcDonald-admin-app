const Menu = require('../models/menu');

const createMenu = async (req, res) => {
  const data = req.body;
  const menu = await new Menu({ ...data });
  try {
    menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json('Failed to Menu a Coupon', error);
  }
};

const menuList = async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json('failed to fetch menu list', error);
  }
};

const singleMenu = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item.toJSON());
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const updateMenu = async (req, res) => {
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

const deleteMenu = async (req, res) => {
  const id = req.params.id;
  const message = `${id} was successfully deleted`;
  try {
    await Menu.findByIdAndRemove(id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('fail to Delete', error);
  }
};

module.exports = {
  menuList,
  singleMenu,
  createMenu,
  updateMenu,
  deleteMenu,
};
