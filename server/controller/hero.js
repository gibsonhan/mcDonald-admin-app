const Hero = require('../models/hero');
const aws = require('aws-sdk');
const S3 = require('../util/createS3SingleImgObj');
aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

const createHero = async (req, res) => {
  const data = req.body;
  const hero = await new Hero({ ...data });
  try {
    hero.save();
    res.status(201).json(hero);
  } catch (error) {
    console.log('faied to create hero', error);
  }
};

const heroList = async (req, res) => {
  try {
    const hero = await Hero.find({});
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json('failed to fetch hero list', error);
  }
};

const singleHero = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item.toJSON());
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const uploadSingleImg = async (req, res) => {
  //TODO something with field name nees to change
  const heroName = req.body.name.replace(/\s+/g, ''); //remove all white space
  const imgData = req.files[0].buffer;
  const response = await S3.createS3SingleImgObj(imgData, heroName);
  res.status(200).json(response);
};

const updateHero = async (req, res) => {
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

const deleteHero = async (req, res) => {
  const id = req.params.id;
  try {
    const repsone = await Hero.findByIdAndRemove(id);
    console.log('check', response);
    res.status(200);
  } catch (error) {
    res.status(500).json('fail to Delete', error);
  }
};

module.exports = {
  heroList,
  singleHero,
  createHero,
  updateHero,
  deleteHero,
};
