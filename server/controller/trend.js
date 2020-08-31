const Trend = require('../models/Trend');
const aws = require('aws-sdk');
const S3 = require('../util/createS3SingleImgObj');
aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

const createTrend = async (req, res) => {
  const data = req.body;
  const Trend = await new Trend({ ...data });
  try {
    Trend.save();
    res.status(201).json(Trend);
  } catch (error) {
    console.log('faied to create Trend', error);
  }
};

const TrendList = async (req, res) => {
  try {
    const Trend = await Trend.find({});
    res.status(200).json(Trend);
  } catch (error) {
    res.status(500).json('failed to fetch Trend list', error);
  }
};

const singleTrend = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item.toJSON());
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const updateTrend = async (req, res) => {
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

const deleteTrend = async (req, res) => {
  const id = req.params.id;
  try {
    const repsone = await Trend.findByIdAndRemove(id);
    console.log('check', response);
    res.status(200);
  } catch (error) {
    res.status(500).json('fail to Delete', error);
  }
};

module.exports = {
  TrendList,
  singleTrend,
  createTrend,
  updateTrend,
  deleteTrend,
};
