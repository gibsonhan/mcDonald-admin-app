const Coupon = require('../models/coupon');
const aws = require('aws-sdk');
const S3 = require('../util/createS3SingleImgObj');
aws.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

const createCoupon = async (req, res) => {
  const data = req.body;
  const coupon = await new Coupon({ ...data });
  try {
    coupon.save();
    res.status(201).json(coupon);
  } catch (error) {
    console.log('faied to create Coupon', error);
  }
};

const couponList = async (req, res) => {
  try {
    const coupon = await Coupon.find({});
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json('failed to fetch Coupon list', error);
  }
};

const singleCoupon = async (req, res) => {
  const id = req.params.id;
  try {
    const coupon = await Coupon.findById(id);
    await res.status(200).json(coupon);
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const updateCoupon = async (req, res) => {
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

const deleteCoupon = async (req, res) => {
  const id = req.params.id;
  try {
    const repsone = await Coupon.findByIdAndRemove(id);
    console.log('check', response);
    res.status(200);
  } catch (error) {
    res.status(500).json('fail to Delete', error);
  }
};

module.exports = {
  couponList,
  singleCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
};
