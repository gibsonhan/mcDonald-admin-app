const Menu = require('../models/menu');
const aws = require('aws-sdk');
const { createS3SizeImgUrlObj } = require('../util/createS3ImgObj');
aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

const createMenu = async (req, res) => {
  const data = req.body;
  console.log('req', req);
  console.log('data check', data);
  const menu = await new Menu({ ...data });
  try {
    menu.save();
    res.status(201).json(menu);
  } catch (error) {
    console.log('faied to create menu', error);
  }
};

const menuList = async (req, res) => {
  console.log('get list attempt');
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

const uploadImg = async (req, res) => {
  const menuName = req.body.name.replace(/\s+/g, ''); //remove all white space
  const imgData = req.files;
  const response = await createS3SizeImgUrlObj(menuName, imgData);
  res.status(200).json(response);
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
  try {
    const repsone = await Menu.findByIdAndRemove(id);
    console.log('check', response);
    res.status(200);
  } catch (error) {
    res.status(500).json('fail to Delete', error);
  }
};

module.exports = {
  menuList,
  singleMenu,
  createMenu,
  uploadImg,
  updateMenu,
  deleteMenu,
};
