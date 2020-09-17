const Coupon = require('../models/coupon');

const createCoupon = async (req, res) => {
  const data = req.body;
  const coupon = await new Coupon({ ...data });
  try {
    coupon.save();
    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json('Failed to Create a Coupon', error);
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
  const data = req.body;
  const message = `${data.title} was succesfully update`;
  try {
    await Coupon.findByIdAndUpdate(id, data);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('Failed to update item');
  }
};

const deleteCoupon = async (req, res) => {
  const id = req.params.id;
  const message = `${id} was successfully deleted`;
  try {
    await Coupon.findByIdAndRemove(id);
    res.status(200).json(message);
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
